# HustleUp — Frontend

React SPA for the HustleUp skill assessment platform. Built with Create React App (React 19).

## Tech stack

- **React** 19
- **Create React App** (react-scripts)
- **Axios** for API calls
- **CSS** (no Tailwind) — light blue theme, shared in `pages/` and `layout/`

## Scripts

From `frontend/`:

| Command | Description |
|--------|-------------|
| `npm start` | Dev server at [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Production build into `build/` |
| `npm test` | Run tests (watch mode) |
| `npm run eject` | Eject CRA (one-way; not recommended) |

## Project structure

```
src/
├── App.js                 # Step flow: Landing → SkillDeclaration → Quiz → ConfidenceCompetence → Roadmap
├── api.js                 # Axios base URL, submitQuiz()
├── data/
│   └── quizQuestions.js   # QUIZ_QUESTIONS (Frontend, Backend, DevOps, App Dev), adaptive pool, roadmap helpers
├── layout/
│   └── PageContainer.jsx  # Wrapper for inner pages
├── pages/
│   ├── Landing.jsx       # Hero, features, CTA; nav: Home, About, Blog, Contact (dropdown), Sign In
│   ├── LoginSignup.jsx    # Two-panel auth (form + CTA)
│   ├── SkillDeclaration.jsx
│   ├── Quiz.jsx           # 15 questions, adaptive, time/change tracking
│   ├── ConfidenceCompetence.jsx
│   ├── Roadmap.jsx        # Topic diagram (Database, Security, Architecture, API) + focus cards
│   └── Blog.jsx           # Filter + post grid; full post view
└── index.js
```

## Environment

- API base URL is set in `src/api.js` (default `http://localhost:8000` for dev). Override for production if needed.

## Backend

Expects the Skill Gap backend running on port **8000** (or the URL in `api.js`). Endpoints used:

- `POST /submit-quiz` — quiz results + confidence; returns overconfidence flag/summary.
- Auth/analytics as needed.
