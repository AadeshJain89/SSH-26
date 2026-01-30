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
