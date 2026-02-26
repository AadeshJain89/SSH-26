from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

from backend.data.loader import load_role_skills
from backend.data.store import record_assessment
from backend.logic.assessment_engine import SkillStatus, classify_skills
from backend.logic.recommendation_engine import generate_roadmap
from backend.models.schemas import RoadmapRequest, RoadmapResponse

from backend.api.auth import router as auth_router
from backend.api.analytics import router as analytics_router

app = FastAPI(title="Skill Gap Backend Prototype")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(analytics_router)


@app.get("/")
def health_check():
    return {"status": "backend running"}


@app.post("/generate-roadmap", response_model=RoadmapResponse)
def generate_roadmap_api(request: RoadmapRequest):
    """
    Generates a personalized learning roadmap based on:
    - declared skills
    - verification results
    - available study time
    """
    role_skills = load_role_skills()
    role_skill_names = [skill["name"] for skill in role_skills]

    skill_status = classify_skills(
        role_skill_names,
        request.declared_skills,
        request.verification_results,
    )

    roadmap = generate_roadmap(
        role_skills,
        skill_status,
        request.hours_per_week,
    )

    # Record for analytics
    weak_skills = [
        name for name, status in skill_status.items()
        if status != SkillStatus.VERIFIED
    ]
    skill_depths = {s["name"]: s.get("depth", "basic") for s in role_skills}
    record_assessment(
        user_id=request.user_id,
        weak_skills=weak_skills,
        skill_depths=skill_depths,
        completed=True,
    )

    return {"roadmap": roadmap}
