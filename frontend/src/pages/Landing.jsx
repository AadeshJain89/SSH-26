import PageContainer from "../layout/PageContainer";
import "./pages.css";

export default function Landing({ onStart }) {
  return (
    <PageContainer>
      <div className="landing-root">
        <div className="landing-logo">💡</div>

        <h1 className="landing-title">Skill Issue</h1>

        <p className="landing-subtitle">
          We'll help you discover the right tech path — even if you don't know
          what skills are called yet.
        </p>

        <div className="landing-cards">
          {/* Card 1 */}
          <div className="landing-card clickable" onClick={onStart}>
            <div className="card-icon purple">🧭</div>

            <h3>I'm not sure what to learn</h3>

            <p>
              Don't worry about knowing tech terms. We'll ask simple questions
              about your interests and guide you from there.
            </p>

            <span className="card-link">
              Let's discover together →
            </span>
          </div>

          {/* Card 2 */}
          <div className="landing-card clickable" onClick={onStart}>
            <div className="card-icon teal">💡</div>

            <h3>I already have some experience</h3>

            <p>
              Know some programming or tech concepts? We'll validate your
              knowledge and show you exactly how deep to go.
            </p>

            <span className="card-link">
              Validate my skills →
            </span>
          </div>
        </div>

        <p className="landing-footer">
          Built for students who want clarity, not confusion.
          No jargon, no overwhelm.
        </p>
      </div>
    </PageContainer>
  );
}
