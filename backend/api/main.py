from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

from backend.data.loader import load_role_skills
from backend.logic.classifier import classify_skills
from backend.logic.roadmap import generate_roadmap
from backend.models.schemas import RoadmapRequest, RoadmapResponse

app = FastAPI(title="Skill Gap Backend Prototype")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
        request.verification_results
    )

    roadmap = generate_roadmap(
        role_skills,
        skill_status,
        request.hours_per_week
    )


    return {"roadmap": roadmap}
