"""
Recommendation engine: prioritized learning roadmap from skill status and pacing.
"""
from typing import Dict, List

from backend.logic.assessment_engine import SkillStatus
from backend.logic.pacer import compute_pacer


def generate_roadmap(
    role_skills: List[Dict],
    skill_status: Dict[str, SkillStatus],
    hours_per_week: int,
) -> List[Dict]:
    """
    Generates a prioritized learning roadmap based on:
    - role requirements
    - classified skill status
    - pacing constraints
    """
    capacity = compute_pacer(hours_per_week)

    pending_skills = [
        skill for skill in role_skills
        if skill_status.get(skill["name"]) != SkillStatus.VERIFIED
    ]

    pending_skills.sort(
        key=lambda skill: 0 if skill["priority"] == "must-have" else 1
    )

    return pending_skills[:capacity]


if __name__ == "__main__":
    role_skills = [
        {"name": "HTML & CSS", "priority": "must-have"},
        {"name": "JavaScript Fundamentals", "priority": "must-have"},
        {"name": "Git", "priority": "nice-to-have"},
    ]
    skill_status = {
        "HTML & CSS": SkillStatus.VERIFIED,
        "JavaScript Fundamentals": SkillStatus.MISSING,
        "Git": SkillStatus.WEAK,
    }
    for skill in generate_roadmap(role_skills, skill_status, hours_per_week=8):
        print(skill["name"], "-", skill["priority"])
