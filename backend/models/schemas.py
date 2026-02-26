from pydantic import BaseModel
from typing import Dict, List, Optional


class RoadmapRequest(BaseModel):
    declared_skills: List[str]
    verification_results: Dict[str, bool]
    hours_per_week: int
    user_id: Optional[str] = None  # optional for analytics when logged in


class RoadmapResponse(BaseModel):
    roadmap: List[dict]
