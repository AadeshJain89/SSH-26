"""
Analytics endpoint: aggregate stats from stored assessments and users.
"""
from collections import Counter
from fastapi import APIRouter

from backend.data.store import get_all_assessments, get_user_count

router = APIRouter(tags=["analytics"])


@router.get("/analytics")
def get_analytics():
    """
    Returns aggregate analytics for dashboard:
    total_users, most_common_weak_skill, avg_skill_depth, completion_rate.
    """
    total_users = get_user_count()
    assessments = get_all_assessments()

    if not assessments:
        return {
            "total_users": total_users,
            "most_common_weak_skill": None,
            "avg_skill_depth": "basic",
            "completion_rate": 0,
        }

    # Flatten weak_skills across all assessments
    all_weak: list = []
    depth_order = {"basic": 0, "intermediate": 1, "advanced": 2}
    depth_values: list = []
    completed = 0

    for a in assessments:
        all_weak.extend(a.get("weak_skills") or [])
        depths = a.get("skill_depths") or {}
        for d in depths.values():
            depth_values.append(depth_order.get(d, 0))
        if a.get("completed"):
            completed += 1

    most_common = None
    if all_weak:
        (skill, count) = Counter(all_weak).most_common(1)[0]
        most_common = skill

    avg_depth = "basic"
    if depth_values:
        avg_idx = sum(depth_values) / len(depth_values)
        if avg_idx >= 2:
            avg_depth = "advanced"
        elif avg_idx >= 1:
            avg_depth = "intermediate"

    completion_rate = round(100 * completed / len(assessments)) if assessments else 0

    return {
        "total_users": total_users,
        "most_common_weak_skill": most_common,
        "avg_skill_depth": avg_depth,
        "completion_rate": completion_rate,
    }
