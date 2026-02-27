import { useState, useEffect, useMemo } from "react";
import PageContainer from "../layout/PageContainer";
import { buildTopicScoresForAlignment } from "../data/quizQuestions";
import { getRoleTransition } from "../api";
import "./RoleTransition.css";
import "./pages.css";

const ROLE_OPTIONS = [
  { id: "Frontend", name: "Frontend Developer" },
  { id: "Backend", name: "Backend Developer" },
  { id: "DevOps", name: "DevOps Engineer" },
  { id: "App Dev", name: "App Developer" },
];

export default function RoleTransition({ verificationResults, onBack }) {
  const [transitionFrom, setTransitionFrom] = useState("Frontend");
  const [transitionTo, setTransitionTo] = useState("Backend");
  const [transitionResult, setTransitionResult] = useState(null);
  const [transitionLoading, setTransitionLoading] = useState(false);

  const hasQuizResults = Object.keys(verificationResults || {}).length > 0;

  const topicScores = useMemo(
    () => buildTopicScoresForAlignment(verificationResults || {}),
    [verificationResults]
  );

  useEffect(() => {
    if (!hasQuizResults || !transitionFrom || !transitionTo) {
      setTransitionResult(null);
      return;
    }
    setTransitionLoading(true);
    getRoleTransition(transitionFrom, transitionTo, topicScores)
      .then((data) => setTransitionResult(data))
      .catch(() => setTransitionResult(null))
      .finally(() => setTransitionLoading(false));
  }, [hasQuizResults, topicScores, transitionFrom, transitionTo]);

  return (
    <PageContainer>
      <div className="role-transition-page">
        <div className="role-transition-container">
          <div className="role-transition-header">
            <h1 className="role-transition-title">Career Transition Path</h1>
            <p className="role-transition-subtitle">
              Plan your professional journey and skills development.
            </p>
          </div>

          <div className="role-transition-section">
            <h2 className="role-transition-heading">Role Transition</h2>
            <div className="role-transition-controls">
              <div className="role-transition-role-group">
                <label className="role-transition-role-label">Current Role</label>
                <select
                  className="role-transition-select"
                  value={transitionFrom}
                  onChange={(e) => setTransitionFrom(e.target.value)}
                  aria-label="Current role"
                >
                  <option value="">Select your current role</option>
                  {ROLE_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>{o.name}</option>
                  ))}
                </select>
              </div>
              <div className="role-transition-arrow">→</div>
              <div className="role-transition-role-group">
                <label className="role-transition-role-label">Target Role</label>
                <select
                  className="role-transition-select"
                  value={transitionTo}
                  onChange={(e) => setTransitionTo(e.target.value)}
                  aria-label="Target role"
                >
                  <option value="">Select your target role</option>
                  {ROLE_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>{o.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {!hasQuizResults && (
            <div className="role-transition-no-results">
              <p>Complete the quiz to see detailed skill gap analysis and transition recommendations.</p>
            </div>
          )}

          {hasQuizResults && transitionLoading && (
            <div className="role-transition-loading-container">
              <p className="role-transition-loading">Loading…</p>
            </div>
          )}

          {hasQuizResults && !transitionLoading && transitionResult && (
            <div className="role-transition-skills-develop">
              <h3 className="role-transition-skills-heading">Skills to Develop</h3>
              <p className="role-transition-skills-subtitle">
                Select the skills you want to learn or strengthen for your transition
              </p>
              {transitionResult.gap_delta?.length > 0 ? (
                <div className="role-transition-skills-container">
                  <div className="role-transition-skills-label">Available Skills</div>
                  <div className="role-transition-skills-tags">
                    {transitionResult.gap_delta.map((g, idx) => (
                      <span key={idx} className="role-transition-skill-tag">
                        {g.topic}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="role-transition-skills-container">
                  <div className="role-transition-skills-label">Available Skills</div>
                  <div className="role-transition-skills-empty">
                    <p>No additional skills needed. You're ready for this transition!</p>
                  </div>
                </div>
              )}
              {transitionResult.effort_estimate?.description && (
                <div className="role-transition-effort-info">
                  <p className="role-transition-effort">
                    {transitionResult.effort_estimate.description}
                  </p>
                </div>
              )}
              {transitionResult.skills_already_met?.length > 0 && (
                <div className="role-transition-skills-met">
                  <p className="role-transition-skills-met-label">Skills Already Met:</p>
                  <div className="role-transition-skills-tags role-transition-skills-tags-met">
                    {transitionResult.skills_already_met.map((s, idx) => (
                      <span key={idx} className="role-transition-skill-tag role-transition-skill-tag-met">
                        {s.topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {onBack && (
            <div className="role-transition-actions">
              <button type="button" className="role-transition-back-btn" onClick={onBack}>
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
