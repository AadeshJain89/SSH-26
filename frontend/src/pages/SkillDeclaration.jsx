import { useState } from "react";
import PageContainer from "../layout/PageContainer";
import "./pages.css";
import "./SkillDeclaration.css";

const SKILLS = [
  { name: "Backend", icon: "server" },
  { name: "DevOps", icon: "branch" },
  { name: "App Dev Frontend", icon: "layers" },
  { name: "Frontend", icon: "monitor" },
  { name: "Power BI", icon: "database" },
  { name: "Blockchain", icon: "code" },
  { name: "Cyber Security", icon: "server" },
  { name: "Data Analyst", icon: "palette" },
  { name: "Game Development", icon: "layers" },
  { name: "Machine Learning", icon: "code" },
  { name: "AWS", icon: "globe" },
];

export default function SkillDeclaration({ onNext, onBack, onRoleTransition }) {
  const [selected, setSelected] = useState([]);

  const toggleSkill = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  return (
    <div className="skill-declaration-page">
      <div className="skill-declaration-accent skill-declaration-accent-left" />
      <div className="skill-declaration-accent skill-declaration-accent-right" />

      <PageContainer>
        <div className="skill-declaration-root">
          <h1 className="skill-declaration-title">
            Personalize your quiz experience
          </h1>
          <p className="skill-declaration-subtitle">
            For a tailored skill check, tell us what you already work with.
          </p>
          <p className="skill-declaration-subtitle-secondary">
            You can come back and change this later.
          </p>

          <div className="skill-declaration-grid">
            {SKILLS.map(({ name, icon }) => (
              <button
                key={name}
                type="button"
                className={`skill-declaration-card ${
                  selected.includes(name) ? "skill-declaration-card-selected" : ""
                }`}
                onClick={() => toggleSkill(name)}
              >
                <span className={`skill-declaration-icon skill-declaration-icon-${icon}`} aria-hidden="true" />
                <span className="skill-declaration-label">{name}</span>
              </button>
            ))}
          </div>

          <div className="skill-declaration-actions">
            <button type="button" className="skill-declaration-btn secondary" onClick={onBack}>
              Back
            </button>
            <button
              type="button"
              className="skill-declaration-btn primary"
              onClick={() => onNext(selected)}
              disabled={selected.length === 0}
            >
              Continue
            </button>
          </div>

          {onRoleTransition && (
            <div className="skill-declaration-role-transition">
              <button
                type="button"
                className="skill-declaration-role-transition-btn"
                onClick={onRoleTransition}
              >
                <span className="skill-declaration-role-transition-icon">🔄</span>
                <div className="skill-declaration-role-transition-content">
                  <span className="skill-declaration-role-transition-title">Explore Role Transition</span>
                  <span className="skill-declaration-role-transition-desc">See how your skills align with different roles</span>
                </div>
              </button>
            </div>
          )}
        </div>
      </PageContainer>
    </div>
  );
}
