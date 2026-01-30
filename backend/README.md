# Backend – Skill Gap Platform (Prototype)

This backend provides a deterministic skill-gap analysis and learning roadmap generator.

## Core Features
- Skill classification (VERIFIED / WEAK / MISSING)
- Personal pacing based on available study time
- Priority-based roadmap generation
- Minimal FastAPI interface

## Architecture
- `data/` – role definitions (JSON)
- `logic/` – core decision engines
- `api/` – FastAPI wrapper (no business logic)
- `models/` – request/response schemas

## Run Locally

```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
uvicorn backend.api.main:app --reload
