import "./Landing.css";

export default function Landing({ onStart }) {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <div className="landing-header-inner">
          <div className="landing-brand">
            <span className="landing-brand-icon">H</span>
            <span className="landing-brand-name">HustleUp</span>
          </div>
          <nav className="landing-nav">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT US</a>
            <a href="#services">SERVICES</a>
            <a href="#how">HOW IT WORKS</a>
            <a href="#blog">BLOG</a>
            <a href="#contact">CONTACT</a>
          </nav>
          <div className="landing-header-icons">
            <span className="landing-icon-circle" aria-hidden="true">GM</span>
            <span className="landing-icon-dot" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="landing-hero" id="home">
        <div className="landing-hero-inner">
          <div className="landing-hero-text">
            <h1 className="landing-hero-title">
              Making Your Learning Goals
              <strong> Come True</strong>
            </h1>
            <p className="landing-hero-desc">
              We help you discover the right tech path with adaptive skill
              assessment and a clear roadmap — even if you don't know what
              skills are called yet.
            </p>
            <button type="button" className="landing-btn landing-btn-primary" onClick={onStart}>
              GET STARTED
            </button>
          </div>
          <div className="landing-hero-illus">
            <div className="landing-hero-circle" />
            <div className="landing-hero-figure">
              <div className="landing-figure-head" />
              <div className="landing-figure-body" />
              <div className="landing-figure-laptop" />
            </div>
            <div className="landing-hero-plant" />
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="landing-cards-section">
        <div className="landing-cards-wrap">
          <div className="landing-fcard">
            <div className="landing-fcard-icon landing-fcard-icon-1" aria-hidden="true">◆</div>
            <h3 className="landing-fcard-title">Skill Assessment</h3>
            <p className="landing-fcard-desc">
              Adaptive checks that meet you where you are. We adjust difficulty
              based on your answers so you get an honest picture of your level.
            </p>
          </div>
          <div className="landing-fcard">
            <div className="landing-fcard-icon landing-fcard-icon-2" aria-hidden="true">▣</div>
            <h3 className="landing-fcard-title">Learning Roadmap</h3>
            <p className="landing-fcard-desc">
              A clear, prioritized path based on your goals and study time.
              Focus on must-have skills first, then level up from there.
            </p>
          </div>
          <div className="landing-fcard">
            <div className="landing-fcard-icon landing-fcard-icon-3" aria-hidden="true">◈</div>
            <h3 className="landing-fcard-title">Progress Tracking</h3>
            <p className="landing-fcard-desc">
              See which skills are verified, weak, or missing. No jargon — just
              clarity so you know exactly what to learn next.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="landing-achievements">
        <h2 className="landing-achievements-title">Our Achievements</h2>
        <p className="landing-achievements-desc">
          HustleUp is built for learners who want clarity, not confusion. We
          combine adaptive assessment with structured roadmaps so you can close
          your skill gap with confidence.
        </p>
        <div className="landing-stats">
          <div className="landing-stat">
            <span className="landing-stat-num">10K+</span>
            <span className="landing-stat-label">SKILLS ASSESSED</span>
          </div>
          <div className="landing-stat">
            <span className="landing-stat-num">5K+</span>
            <span className="landing-stat-label">LEARNERS</span>
          </div>
          <div className="landing-stat">
            <span className="landing-stat-num">8K+</span>
            <span className="landing-stat-label">ROADMAPS CREATED</span>
          </div>
          <div className="landing-stat">
            <span className="landing-stat-num">78%</span>
            <span className="landing-stat-label">COMPLETION RATE</span>
          </div>
        </div>
      </section>

      {/* Our Results */}
      <section className="landing-results">
        <div className="landing-results-inner">
          <div className="landing-results-left">
            <h2 className="landing-results-title">Our Results</h2>
            <p className="landing-results-desc">
              We're a platform built for people who want to level up. Adaptive
              assessment, clear roadmaps, and pacing based on your schedule —
              so you know exactly what to learn and how deep to go.
            </p>
            <button type="button" className="landing-btn landing-btn-primary" onClick={onStart}>
              READ MORE
            </button>
            <div className="landing-results-illus">
              <div className="landing-res-figure">
                <div className="landing-res-head" />
                <div className="landing-res-screen" />
              </div>
            </div>
          </div>
          <div className="landing-results-right">
            <div className="landing-chart">
              <div className="landing-chart-bar" style={{ height: "80%" }}><span>80%</span></div>
              <div className="landing-chart-bar" style={{ height: "90%" }}><span>90%</span></div>
              <div className="landing-chart-bar" style={{ height: "60%" }}><span>60%</span></div>
              <div className="landing-chart-bar" style={{ height: "50%" }}><span>50%</span></div>
              <div className="landing-chart-bar" style={{ height: "70%" }}><span>70%</span></div>
              <div className="landing-chart-bar" style={{ height: "80%" }}><span>80%</span></div>
            </div>
            <div className="landing-chart-labels">
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
            </div>
            <ul className="landing-results-list">
              <li>
                <span className="landing-list-num">01</span>
                <div>
                  <strong>Skill Check</strong>
                  <p>Declare what you know and answer quick checks. We adapt difficulty so results are accurate.</p>
                </div>
              </li>
              <li>
                <span className="landing-list-num">02</span>
                <div>
                  <strong>Personal Roadmap</strong>
                  <p>Get a prioritized list of skills to learn based on your goals and hours per week.</p>
                </div>
              </li>
              <li>
                <span className="landing-list-num">03</span>
                <div>
                  <strong>Track Progress</strong>
                  <p>See verified, weak, and missing skills at a glance. No overwhelm — just next steps.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="landing-cta-section">
        <h2 className="landing-cta-title">Ready to close your skill gap?</h2>
        <p className="landing-cta-desc">
          Join learners who use HustleUp to get a clear path and the right
          depth for every skill.
        </p>
        <button type="button" className="landing-btn landing-btn-cta" onClick={onStart}>
          GET STARTED
        </button>
      </section>
    </div>
  );
}
