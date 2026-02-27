"""
Multi-role alignment scoring and role transition simulator.

- Alignment: % of role skills at or above threshold; skill gap per role; ranked role fit.
- Transition: from_role -> to_role gap delta, skills already met, effort estimate.
"""
from typing import Dict, List, Any

PASS_THRESHOLD = 0.7  # 70% correct on a topic = skill met
WEEKS_PER_GAP_SKILL = 2  # rough effort: 2 weeks per skill to close gap




def _topic_score_passed(correct: int, total: int) -> bool:
    if total == 0:
        return False
    return (correct / total) >= PASS_THRESHOLD


def compute_multi_role_alignment(
    roles: List[Dict],
    topic_scores: Dict[str, Dict[str, Dict[str, int]]],
) -> List[Dict]:
    """
    topic_scores: { "Backend": { "Database": { "correct": 0, "total": 3 }, ... }, ... }
    Returns list of { role_id, role_name, alignment_pct, skills_met, skill_gap, rank } sorted by alignment desc.
    """
    results = []
    for role in roles:
        role_id = role["id"]
        skill_topics = role.get("skill_topics", [])
        category_scores = topic_scores.get(role_id, {})

        met = []
        gap = []
        for topic in skill_topics:
            t = category_scores.get(topic, {})
            correct = t.get("correct", 0)
            total = t.get("total", 0)
            if total == 0:
                gap.append({"topic": topic, "correct": 0, "total": 0, "pct": 0})
                continue
            pct = round((correct / total) * 100)
            if _topic_score_passed(correct, total):
                met.append({"topic": topic, "correct": correct, "total": total, "pct": pct})
            else:
                gap.append({"topic": topic, "correct": correct, "total": total, "pct": pct})

        total_skills = len(skill_topics)
        if total_skills == 0:
            alignment_pct = 0
        else:
            alignment_pct = round((len(met) / total_skills) * 100)

        results.append({
            "role_id": role_id,
            "role_name": role["name"],
            "alignment_pct": alignment_pct,
            "skills_met": met,
            "skill_gap": gap,
            "total_skills": total_skills,
        })

    results.sort(key=lambda x: x["alignment_pct"], reverse=True)
    for i, r in enumerate(results, start=1):
        r["rank"] = i
    return results


def compute_role_transition(
    roles: List[Dict],
    topic_scores: Dict[str, Dict[str, Dict[str, int]]],
    from_role_id: str,
    to_role_id: str,
) -> Dict[str, Any]:
    """
    If I move from from_role to to_role, what's the gap delta and effort?
    Returns: gap_delta (skills to build for to_role that are weak/missing),
             skills_already_met (in to_role),
             from_role_skills (topic list),
             to_role_skills (topic list),
             effort_estimate (weeks, description).
    """
    role_map = {r["id"]: r for r in roles}
    from_role = role_map.get(from_role_id, {})
    to_role = role_map.get(to_role_id, {})

    to_skill_topics = to_role.get("skill_topics", [])
    from_skill_topics = set(from_role.get("skill_topics", []))
    category_scores = topic_scores.get(to_role_id, {})

    skills_already_met = []
    gap_delta = []

    for topic in to_skill_topics:
        t = category_scores.get(topic, {})
        correct = t.get("correct", 0)
        total = t.get("total", 0)
        pct = round((correct / total) * 100) if total else 0
        if _topic_score_passed(correct, total):
            skills_already_met.append({"topic": topic, "correct": correct, "total": total, "pct": pct})
        else:
            # New or weak: need to build for to_role
            in_from = topic in from_skill_topics
            gap_delta.append({
                "topic": topic,
                "correct": correct,
                "total": total,
                "pct": pct,
                "was_in_source_role": in_from,
            })

    gap_count = len(gap_delta)
    estimated_weeks = gap_count * WEEKS_PER_GAP_SKILL
    effort_estimate = {
        "gap_skill_count": gap_count,
        "estimated_weeks": estimated_weeks,
        "description": f"{gap_count} skill(s) to build — roughly {estimated_weeks} weeks at ~{WEEKS_PER_GAP_SKILL} weeks per skill.",
    }

    return {
        "from_role_id": from_role_id,
        "from_role_name": from_role.get("name", from_role_id),
        "to_role_id": to_role_id,
        "to_role_name": to_role.get("name", to_role_id),
        "gap_delta": gap_delta,
        "skills_already_met": skills_already_met,
        "from_role_skills": list(from_skill_topics),
        "to_role_skills": to_skill_topics,
        "effort_estimate": effort_estimate,
    }
