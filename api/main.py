# Vercel serverless entrypoint: ensure repo root is on path, then expose FastAPI app.
import sys
from pathlib import Path

_root = Path(__file__).resolve().parent.parent
if str(_root) not in sys.path:
    sys.path.insert(0, str(_root))

from backend.api.main import app
