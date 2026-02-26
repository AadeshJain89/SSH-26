"""
Confidence vs competence: overconfidence detection from quiz results and confidence signals.
"""
from typing import Any, Dict, Tuple


def detect_overconfidence(
    results: Dict[str, bool],
    confidence: Dict[str, Dict[str, Any]],
) -> Tuple[bool, str]:
    """
    Heuristic: overconfidence = low score + fast answers + few answer changes.
    Returns (detected: bool, summary: str).
    """
    if not results:
        return False, ""

    correct = sum(1 for v in results.values() if v)
    total = len(results)
    score_pct = (correct / total * 100) if total else 0

    times = []
    changes = []
    for qid, data in confidence.items():
        if qid not in results:
            continue
        t = data.get("timeSpentMs") or data.get("time_spent_ms")
        c = data.get("answerChangeCount") or data.get("answer_change_count")
        if t is not None:
            times.append(int(t))
        if c is not None:
            changes.append(int(c))

    avg_time_sec = (sum(times) / len(times) / 1000.0) if times else 0
    avg_changes = (sum(changes) / len(changes)) if changes else 0

    # Low score but high "confidence" signals: answered fast and rarely changed
    low_score = score_pct < 50
    fast = avg_time_sec < 15 and len(times) == total
    few_changes = avg_changes < 1

    if low_score and (fast or few_changes):
        summary = (
            f"Declared vs validated gap: quiz score {score_pct:.0f}% with "
            f"avg {avg_time_sec:.1f}s per question and {avg_changes:.1f} answer changes. "
            "Consider reviewing before claiming strength in this area."
        )
        return True, summary
    return False, ""
