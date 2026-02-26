import { useMemo } from "react";
import PageContainer from "../layout/PageContainer";
import { getRoadmapFromQuizResults, getTopicBasedResults } from "../data/quizQuestions";
import "./Roadmap.css";
import "./pages.css";

const COLORS = {
  passed: "#00B09A",
  partial: "#FFC107",
  needWork: "#E60000",
  notAssessed: "#9E9E9E",
};

function getStepColor(passed, score, total) {
  if (total === 0) return COLORS.notAssessed;
  if (passed) return COLORS.passed;
  if (score / total >= 0.5) return COLORS.partial;
  return COLORS.needWork;
}

export default function Roadmap({ declaredSkills, verificationResults, overconfidenceSummary }) {
  const roadmap = useMemo(
    () => getRoadmapFromQuizResults(verificationResults || {}, declaredSkills || []),
    [verificationResults, declaredSkills]
  );

  const topicResults = useMemo(
    () => getTopicBasedResults(verificationResults || {}, declaredSkills || []),
    [verificationResults, declaredSkills]
  );

  const diagramSteps = useMemo(() => {
    return topicResults.map((r) => ({
      id: r.name.toLowerCase().replace(/\s+/, "-"),
      title: r.name,
      desc: r.reason,
      color: getStepColor(r.passed, r.score, r.total),
      icon: r.name.charAt(0),
    }));
  }, [topicResults]);

  const mid = Math.ceil(diagramSteps.length / 2);
  const leftSteps = diagramSteps.slice(0, mid);
  const rightSteps = diagramSteps.slice(mid);

  const hasQuizResults = Object.keys(verificationResults || {}).length > 0;
  const allPassed = hasQuizResults && roadmap.length === 0;

  return (
    <PageContainer>
      <div className="roadmap-root">
        {/* Template header */}
        <header className="roadmap-template-header">
          <div className="roadmap-main-title-wrap">
            <h1 className="roadmap-main-title">
              <span className="roadmap-title-dark">YOUR SKILL</span>{" "}
              <span className="roadmap-title-accent">ROADMAP</span>
            </h1>
            <div className="roadmap-title-underline" aria-hidden="true" />
          </div>
        </header>

        {/* Two-column flow: quiz results by category */}
        <div className="roadmap-diagram">
          <div className="roadmap-col roadmap-col-left">
            {leftSteps.map((step) => (
              <div key={step.id} className="roadmap-step">
                <div
                  className="roadmap-step-circle"
                  style={{ backgroundColor: step.color }}
                  aria-hidden="true"
                >
                  <span className="roadmap-step-icon">{step.icon}</span>
                </div>
                <div className="roadmap-step-content">
                  <h3 className="roadmap-step-title">{step.title}</h3>
                  <p className="roadmap-step-desc">{step.desc}</p>
                </div>
                <div className="roadmap-step-connector roadmap-connector-right" aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="roadmap-col roadmap-col-center" aria-hidden="true">
            <div className="roadmap-vertical-connector" />
          </div>
          <div className="roadmap-col roadmap-col-right">
            {rightSteps.map((step) => (
              <div key={step.id} className="roadmap-step">
                <div className="roadmap-step-connector roadmap-connector-left" aria-hidden="true" />
                <div
                  className="roadmap-step-circle"
                  style={{ backgroundColor: step.color }}
                  aria-hidden="true"
                >
                  <span className="roadmap-step-icon">{step.icon}</span>
                </div>
                <div className="roadmap-step-content">
                  <h3 className="roadmap-step-title">{step.title}</h3>
                  <p className="roadmap-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Template footer */}
        <footer className="roadmap-template-footer">
          <span className="roadmap-footer-left">HUSTLEUP</span>
          <span className="roadmap-footer-center" aria-hidden="true" />
          <span className="roadmap-footer-right">SKILL GAP PLATFORM</span>
        </footer>

        {/* Your results section */}
        <section className="roadmap-results-section">
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
        </section>
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
