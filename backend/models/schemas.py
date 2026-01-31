from pydantic import BaseModel
from typing import Dict, List


class RoadmapRequest(BaseModel):
    declared_skills: List[str]
    verification_results: Dict[str, bool]
    hours_per_week: int


class RoadmapResponse(BaseModel):
    roadmap: List[dict]
