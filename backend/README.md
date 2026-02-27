# HustleUp — Backend

FastAPI service for the HustleUp skill assessment platform: auth, quiz submission, overconfidence detection, roadmap generation, and analytics. Designed to support future **evidence-based skill validation** (recruiter-facing proof from repo/artifacts).

## Core features

- **Auth** — JWT-based register/login (in-memory user store).
- **Quiz submission** — Store results and per-question confidence; return overconfidence detection (declared vs validated gap).
- **Roadmap** — Generate prioritized learning roadmap from declared skills and verification results (role/skill data).
- **Analytics** — GET analytics (e.g. assessment counts) for dashboard.

## Architecture

| Path | Purpose |
|------|--------|
| `api/` | FastAPI app, CORS, routes: health, `generate-roadmap`, `submit-quiz`, auth, analytics |
| `logic/` | `assessment_engine` (classify skills), `recommendation_engine` (roadmap), `confidence` (overconfidence), `pacer` |
| `data/` | `store` (in-memory users, assessments, quiz submissions), `loader` (role skills), `role_skills.json` |
| `models/` | Pydantic request/response schemas |

## Run locally

From **project root** (so `backend.api.main` resolves):

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn backend.api.main:app --reload --host 0.0.0.0 --port 8000
```

From **backend/** with PYTHONPATH:

```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
PYTHONPATH=.. uvicorn backend.api.main:app --reload --port 8000
```

- API: [http://localhost:8000](http://localhost:8000)
- Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

## Main endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Health check |
| POST | `/generate-roadmap` | Roadmap from declared skills + verification results + hours_per_week |
| POST | `/submit-quiz` | Store quiz results + confidence; return overconfidence_detected + summary |
| POST | `/register` | Register user (email, password) |
| POST | `/login` | Login; returns JWT |
| GET | `/analytics` | Analytics payload (e.g. assessment counts) |

## Data

- **Storage:** In-memory (no DB). Restart clears users, assessments, and quiz submissions.
- **Secrets:** JWT secret and any API keys via environment variables (see `api/auth.py` and config).

## Planned: evidence-based skill validation

- Repo URL → snapshot → LLM-extracted **signals** (structure, behavior, maturity).
- Backend maps signals → **skill vector** (deterministic scoring).
- **Recruiter-facing proof:** assessment + optional artifact evidence (no AI as final judge).
