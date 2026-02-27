# HustleUp (Skill Gap Platform)

A web-based skill assessment and learning roadmap platform. Users declare skills, take an adaptive quiz, and get a topic-based roadmap (Database, Security, Architecture, API) with evidence-backed focus areas. Designed to support **recruiter-facing capability proof** (assessment + optional artifact evidence).

## Repo structure

| Path       | Description |
|-----------|-------------|
| `frontend/` | React 19 SPA — landing, auth, skill declaration, adaptive quiz, confidence/competence results, roadmap, blog |
| `backend/`  | FastAPI API — auth, quiz submission, overconfidence detection, roadmap generation, analytics |

## Quick start

**Backend** (from repo root):

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn backend.api.main:app --reload --host 0.0.0.0 --port 8000
```

**Frontend**:

```bash
cd frontend
npm install
npm start
```

- Frontend: [http://localhost:3000](http://localhost:3000)  
- Backend: [http://localhost:8000](http://localhost:8000)  
- API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

## Features

- **Landing & auth** — Sign in / sign up; contact dropdown (email, socials).
- **Skill declaration** — Choose tracks: Frontend, Backend, DevOps, App Dev Frontend.
- **Adaptive quiz** — 15 questions per run; difficulty adjusts by performance; time and answer-change tracking for confidence.
- **Confidence & competence** — Post-quiz page with competence %, confidence %, and per-question breakdown.
- **Roadmap** — Topic-based (Database, Security, Architecture, API) with scores and study suggestions; overconfidence callout when relevant.
- **Blog** — Filterable posts (Engineering, Industry, Product) with full article view.

## Tech stack

- **Frontend:** React 19, Create React App, Axios, CSS (no Tailwind).
- **Backend:** FastAPI, Pydantic, JWT (auth), in-memory store; optional artifact-based evidence (planned).

## License

Proprietary / internal use unless otherwise stated.
