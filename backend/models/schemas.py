from pydantic import BaseModel
from typing import Dict, List, Optional


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
