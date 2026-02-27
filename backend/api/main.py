import os
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

from backend.data.loader import load_role_skills, load_roles
from backend.data.store import record_assessment
from backend.logic.assessment_engine import SkillStatus, classify_skills
from backend.logic.recommendation_engine import generate_roadmap
from backend.models.schemas import (
    RoadmapRequest,
    RoadmapResponse,
    QuizSubmissionRequest,
    QuizSubmissionResponse,
    TopicScoresRequest,
    MultiRoleAlignmentResponse,
    RoleTransitionRequest,
    RoleTransitionResponse,
)
from backend.data.store import record_quiz_submission
from backend.logic.confidence import detect_overconfidence
from backend.logic.role_alignment import compute_multi_role_alignment, compute_role_transition

from backend.api.auth import router as auth_router
from backend.api.analytics import router as analytics_router

# CORS: set CORS_ORIGINS in Vercel (e.g. "https://your-app.vercel.app") or leave default for local dev
_cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:3000").strip().split(",")

app = FastAPI(title="Skill Gap Backend Prototype")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in _cors_origins if o.strip()],
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


@app.post("/submit-quiz", response_model=QuizSubmissionResponse)
def submit_quiz(request: QuizSubmissionRequest):
    """
    Store quiz results and per-question confidence (time spent, answer changes).
    Returns overconfidence detection: declared vs validated gap when user scored
    low but answered fast with few changes.
    """
    record_quiz_submission(
        user_id=request.user_id,
        declared_skills=request.declared_skills,
        results=request.results,
        confidence=request.confidence,
    )
    detected, summary = detect_overconfidence(request.results, request.confidence)
    return QuizSubmissionResponse(
        ok=True,
        overconfidence_detected=detected,
        overconfidence_summary=summary if detected else None,
    )


@app.post("/multi-role-alignment", response_model=MultiRoleAlignmentResponse)
def multi_role_alignment_api(request: TopicScoresRequest):
    """
    Returns ranked role fit: for each role, alignment %, skills met, skill gap.
    Body: { "topic_scores": { "Backend": { "Database": { "correct", "total" }, ... }, ... } }
    """
    roles = load_roles()
    roles_result = compute_multi_role_alignment(roles, request.topic_scores)
    return MultiRoleAlignmentResponse(roles=roles_result)


@app.post("/role-transition", response_model=RoleTransitionResponse)
def role_transition_api(request: RoleTransitionRequest):
    """
    Simulates moving from one role to another: gap delta, skills already met, effort estimate.
    Body: { "from_role_id", "to_role_id", "topic_scores": { ... } }
    """
    roles = load_roles()
    result = compute_role_transition(
        roles,
        request.topic_scores,
        request.from_role_id,
        request.to_role_id,
    )
    return RoleTransitionResponse(**result)
