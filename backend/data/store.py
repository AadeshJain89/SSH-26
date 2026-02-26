"""
In-memory store for users and assessment results (analytics).
"""
from typing import Dict, List, Any, Optional, Tuple

# user_id -> { "username", "password_hash" }
_users: Dict[str, dict] = {}
_username_to_id: Dict[str, str] = {}

# List of assessment runs for analytics
_assessments: List[Dict[str, Any]] = []


def add_user(user_id: str, username: str, password_hash: str) -> None:
    _users[user_id] = {"username": username, "password_hash": password_hash}
    _username_to_id[username] = user_id


def get_user_by_id(user_id: str) -> Optional[dict]:
    return _users.get(user_id)


def get_user_by_username(username: str) -> Optional[Tuple[str, dict]]:
    uid = _username_to_id.get(username)
    if uid is None:
        return None
    return uid, _users[uid]


def record_assessment(
    user_id: Optional[str],
    weak_skills: List[str],
    skill_depths: Dict[str, str],
    completed: bool,
) -> None:
    _assessments.append({
        "user_id": user_id,
        "weak_skills": weak_skills,
        "skill_depths": dict(skill_depths),
        "completed": completed,
    })


def get_all_assessments() -> List[Dict[str, Any]]:
    return list(_assessments)


def get_user_count() -> int:
    return len(_users)
