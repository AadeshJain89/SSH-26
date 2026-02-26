"""
Adaptive assessment engine: difficulty branching and skill classification.
"""
from enum import Enum
from typing import Dict, List

# Difficulty levels for adaptive assessment
DIFFICULTY_LEVELS = ("basic", "intermediate", "advanced")


class SkillStatus(str, Enum):
    VERIFIED = "VERIFIED"
    WEAK = "WEAK"
    MISSING = "MISSING"


def evaluate_skill(responses: List[str]) -> str:
    """
    Adaptive evaluation: score yes/unsure/no responses and return final skill level.
    YES → +2, UNSURE → +1, NO → 0.
    """
    score = 0
    for answer in responses:
        a = (answer or "").strip().lower()
        if a == "yes":
            score += 2
        elif a == "unsure":
            score += 1
        else:
            score += 0

    if score >= 4:
        return "advanced"
    elif score >= 2:
        return "intermediate"
    else:
        return "basic"


def classify_skills(
    role_skills: List[str],
    declared_skills: List[str],
    verification_results: Dict[str, bool],
) -> Dict[str, SkillStatus]:
    """
    Classifies each role skill as VERIFIED, WEAK, or MISSING.
    """
    status_map: Dict[str, SkillStatus] = {}
    for skill in role_skills:
        if skill not in declared_skills:
            status_map[skill] = SkillStatus.MISSING
        else:
            passed = verification_results.get(skill, False)
            status_map[skill] = SkillStatus.VERIFIED if passed else SkillStatus.WEAK
    return status_map


if __name__ == "__main__":
    # Test evaluate_skill
    print(evaluate_skill(["yes", "yes"]))           # 4 -> advanced
    print(evaluate_skill(["yes", "unsure"]))        # 3 -> intermediate
    print(evaluate_skill(["no", "no"]))             # 0 -> basic
    # Test classify_skills
    out = classify_skills(
        ["HTML & CSS", "JavaScript Fundamentals", "Git"],
        ["HTML & CSS", "Git"],
        {"HTML & CSS": True, "Git": False},
    )
    for skill, status in out.items():
        print(skill, status.value)
