from fastapi import FastAPI

from backend.logic.classifier import classify_skills
from backend.logic.roadmap import generate_roadmap
from backend.data.loader import load_role_skills

app = FastAPI(title="Skill Gap Backend")


@app.get("/")
def health():
    return {"status": "ok"}


@app.post("/generate-roadmap")
def generate(
    declared_skills: list[str],
    verification_results: dict[str, bool],
    hours_per_week: int
):
    role_skills = load_role_skills()

    role_skill_names = [s["name"] for s in role_skills]

    skill_status = classify_skills(
        role_skill_names,
        declared_skills,
        verification_results
    )

    roadmap = generate_roadmap(
        role_skills,
        skill_status,
        hours_per_week
    )

    return {"roadmap": roadmap}
