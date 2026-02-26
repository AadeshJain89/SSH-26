import PageContainer from "../layout/PageContainer";
import "./ConfidenceCompetence.css";

function computeCompetenceScore(results) {
  if (!results || Object.keys(results).length === 0) return 0;
  const correct = Object.values(results).filter(Boolean).length;
  return Math.round((correct / Object.keys(results).length) * 100);
}

function computeConfidenceScore(confidence) {
  if (!confidence || Object.keys(confidence).length === 0) return 50;
  let totalTime = 0;
  let totalChanges = 0;
  let n = 0;
  Object.values(confidence).forEach((c) => {
    if (c.timeSpentMs != null) {
      totalTime += c.timeSpentMs;
      n++;
    }
    if (c.answerChangeCount != null) totalChanges += c.answerChangeCount;
  });
  if (n === 0) return 50;
  const avgTimeSec = totalTime / 1000 / n;
  const avgChanges = totalChanges / n;
  // Higher score = faster + fewer changes (more "confident" behavior). Cap 0-100.
  const timeComponent = Math.min(50, (30 - Math.min(avgTimeSec, 30)) / 30 * 50);
  const changeComponent = Math.min(50, Math.max(0, 50 - avgChanges * 15));
  return Math.round(Math.min(100, Math.max(0, timeComponent + changeComponent)));
}

export default function ConfidenceCompetence({
  verificationResults = {},
  quizConfidence = {},
  questionsAsked = [],
  onNext,
  onBack,
}) {
  const competenceScore = computeCompetenceScore(verificationResults);
  const confidenceScore = computeConfidenceScore(quizConfidence);

  return (
    <div className="confidence-competence-page">
      <PageContainer>
        <div className="cc-root">
          <h1 className="cc-title">Confidence & Competence</h1>
          <p className="cc-subtitle">
            Your quiz results and how they compare.
          </p>

          <div className="cc-scores-row">
            <div className="cc-score-card cc-competence">
              <span className="cc-score-label">Competence</span>
              <span className="cc-score-value">{competenceScore}%</span>
              <p className="cc-score-desc">Correct answers</p>
            </div>
            <div className="cc-score-card cc-confidence">
              <span className="cc-score-label">Confidence</span>
              <span className="cc-score-value">{confidenceScore}%</span>
              <p className="cc-score-desc">Based on time & answer changes</p>
            </div>
          </div>

          <div className="cc-question-list-section">
            <h2 className="cc-section-title">Score per question</h2>
            <ul className="cc-question-list">
              {questionsAsked.map((q, index) => {
                const correct = verificationResults[q.id] === true;
                const conf = quizConfidence[q.id] || {};
                const timeSec = conf.timeSpentMs != null
                  ? (conf.timeSpentMs / 1000).toFixed(1)
                  : "—";
                const changes = conf.answerChangeCount ?? "—";
                return (
                  <li key={q.id} className={`cc-question-item ${correct ? "cc-correct" : "cc-incorrect"}`}>
                    <div className="cc-question-row">
                      <span className="cc-q-num">Q{index + 1}</span>
                      <span className={`cc-q-result ${correct ? "correct" : "incorrect"}`}>
                        {correct ? "Correct" : "Incorrect"}
                      </span>
                      <span className="cc-q-meta">Time: {timeSec}s</span>
                      <span className="cc-q-meta">Changes: {changes}</span>
                    </div>
                    <p className="cc-q-text">{q.question}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="cc-actions">
            <button type="button" className="cc-btn cc-btn-secondary" onClick={onBack}>
              Back
            </button>
            <button type="button" className="cc-btn cc-btn-primary" onClick={onNext}>
              Continue to roadmap
            </button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
