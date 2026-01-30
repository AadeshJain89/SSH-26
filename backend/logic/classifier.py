from enum import Enum
from typing import Dict, List


class SkillStatus(str, Enum):
    VERIFIED = "VERIFIED"
    WEAK = "WEAK"
    MISSING = "MISSING"


def classify_skills(
    role_skills: List[str],
    declared_skills: List[str],
    verification_results: Dict[str, bool]
) -> Dict[str, SkillStatus]:
    """
    Classifies each role skill as VERIFIED, WEAK, or MISSING.

    Args:
        role_skills: list of required skill names for the role
        declared_skills: skills the student claims to know
        verification_results: skill -> pass/fail (True/False)

    Returns:
        dict mapping skill name to SkillStatus
    """

    status_map: Dict[str, SkillStatus] = {}

    for skill in role_skills:
        if skill not in declared_skills:
            status_map[skill] = SkillStatus.MISSING
        else:
            passed = verification_results.get(skill, False)
            if passed:
                status_map[skill] = SkillStatus.VERIFIED
            else:
                status_map[skill] = SkillStatus.WEAK

    return status_map


if __name__ == "__main__":
    role = ["HTML & CSS", "JavaScript Fundamentals", "Git"]
    declared = ["HTML & CSS", "Git"]
    results = {
        "HTML & CSS": True,
        "Git": False
    }

    output = classify_skills(role, declared, results)
    for skill, status in output.items():
        print(skill, status.value)