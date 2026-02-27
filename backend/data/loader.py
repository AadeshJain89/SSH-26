import json
import os
from pathlib import Path
from typing import List, Dict


def _data_dir() -> Path:
    """Resolve backend/data so it works locally and on Vercel serverless."""
    # Same package as this file (e.g. .../backend/data/)
    same_dir = Path(__file__).resolve().parent
    if (same_dir / "role_skills.json").exists():
        return same_dir
    # Fallback: repo root / backend / data (e.g. cwd is repo root on Vercel)
    cwd_data = Path(os.getcwd()) / "backend" / "data"
    if (cwd_data / "role_skills.json").exists():
        return cwd_data
    return same_dir


DATA_DIR = _data_dir()


def load_role_skills() -> List[Dict]:
    """
    Loads role skills from role_skills.json.
    Returns a list of skill dictionaries.
    """
    file_path = DATA_DIR / "role_skills.json"
    with open(file_path, "r") as f:
        data = json.load(f)
    return data["skills"]


def load_roles() -> List[Dict]:
    """
    Loads role definitions from roles.json (id, name, skill_topics).
    Used for multi-role alignment and role transition.
    """
    file_path = DATA_DIR / "roles.json"
    with open(file_path, "r") as f:
        return json.load(f)
