def compute_pacer(hours_per_week: int) -> int:
    """
    Determines how many skills a student should work on concurrently
    based on available study time per week.

    Args:
        hours_per_week: number of hours the student can study per week

    Returns:
        max_concurrent_skills: int
    """

    if hours_per_week <= 0:
        # Defensive default
        return 1

    if hours_per_week < 5:
        return 1
    elif hours_per_week <= 10:
        return 2
    else:
        return 3


# Local sanity test
if __name__ == "__main__":
    test_cases = [0, 2, 5, 8, 12, 20]

    for hours in test_cases:
        print(f"{hours} hrs/week → {compute_pacer(hours)} skill(s)")
