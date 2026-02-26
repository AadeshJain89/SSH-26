import { useMemo } from "react";
import PageContainer from "../layout/PageContainer";
import { getRoadmapFromQuizResults } from "../data/quizQuestions";
import "./pages.css";

export default function Roadmap({ declaredSkills, verificationResults, overconfidenceSummary }) {
  const roadmap = useMemo(
    () => getRoadmapFromQuizResults(verificationResults || {}, declaredSkills || []),
    [verificationResults, declaredSkills]
  );

  const hasQuizResults = Object.keys(verificationResults || {}).length > 0;
  const allPassed = hasQuizResults && roadmap.length === 0;

  return (
    <PageContainer>
      <div className="roadmap-root">
        <h2 className="roadmap-title">Your learning roadmap</h2>
        <p className="roadmap-subtitle">
          Based on your quiz results. Focus on the areas below to level up.
        </p>

        {overconfidenceSummary && (
          <div className="roadmap-overconfidence">
            <strong>Confidence vs competence</strong>
            <p>{overconfidenceSummary}</p>
          </div>
        )}

        {allPassed && (
          <div className="roadmap-success">
            <p className="roadmap-success-text">
              You passed all assessed areas. Keep practicing to stay sharp, or explore a new track.
            </p>
          </div>
        )}

        {!hasQuizResults && roadmap.length === 0 && (
          <div className="roadmap-empty">
            <p>Complete the quiz to see your personalized roadmap.</p>
          </div>
        )}

        {roadmap.length > 0 && (
          <div className="roadmap-section">
            <h3 className="roadmap-section-title must">Areas to focus on</h3>
            {roadmap.map((item) => (
              <RoadmapCard key={item.name} item={item} />
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  );
}

function RoadmapCard({ item }) {
  return (
    <div className="roadmap-card">
      <div className="roadmap-card-main">
        <h4>{item.name}</h4>
        <span className={`depth-badge ${item.depth}`}>{item.depth}</span>
      </div>
      {item.total != null && item.total > 0 && (
        <p className="roadmap-score">
          Quiz: {item.score}/{item.total} correct
        </p>
      )}
      <p className="roadmap-desc">
        {item.reason || `Aim for a strong ${item.depth} level before moving on.`}
      </p>
      {item.focusAreas && item.focusAreas.length > 0 && (
        <ul className="roadmap-focus-list">
          {item.focusAreas.map((area) => (
            <li key={area.topic} className="roadmap-focus-item">
              <strong className="roadmap-focus-topic">{area.topic}</strong>
              <span className="roadmap-focus-suggestion">{area.suggestion}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
