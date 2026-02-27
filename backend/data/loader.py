import json
from pathlib import Path
from typing import List, Dict


DATA_DIR = Path(__file__).parent


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
