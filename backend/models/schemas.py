from pydantic import BaseModel
from typing import Any, Dict, List, Optional


class RoadmapRequest(BaseModel):
    declared_skills: List[str]
    verification_results: Dict[str, bool]
    hours_per_week: int
    user_id: Optional[str] = None  # optional for analytics when logged in


class RoadmapResponse(BaseModel):
    roadmap: List[dict]


class QuizSubmissionRequest(BaseModel):
    declared_skills: List[str]
    results: Dict[str, bool]  # question_id -> correct
    confidence: Dict[str, Dict[str, int]] = {}  # question_id -> { timeSpentMs, answerChangeCount }
    user_id: Optional[str] = None


class QuizSubmissionResponse(BaseModel):
    ok: bool = True
    overconfidence_detected: bool = False
    overconfidence_summary: Optional[str] = None


# --- Multi-role alignment & role transition ---

# topic_scores: { "Backend": { "Database": { "correct": 0, "total": 3 }, ... }, ... }
class TopicScoresRequest(BaseModel):
    topic_scores: Dict[str, Dict[str, Dict[str, int]]]


class RoleAlignmentItem(BaseModel):
    role_id: str
    role_name: str
    alignment_pct: int
    skills_met: List[dict]
    skill_gap: List[dict]
    total_skills: int
    rank: int


class MultiRoleAlignmentResponse(BaseModel):
    roles: List[RoleAlignmentItem]


class RoleTransitionRequest(BaseModel):
    topic_scores: Dict[str, Dict[str, Dict[str, int]]]
    from_role_id: str
    to_role_id: str


class RoleTransitionResponse(BaseModel):
    from_role_id: str
    from_role_name: str
    to_role_id: str
    to_role_name: str
    gap_delta: List[dict]
    skills_already_met: List[dict]
    from_role_skills: List[str]
    to_role_skills: List[str]
    effort_estimate: Dict[str, Any]
