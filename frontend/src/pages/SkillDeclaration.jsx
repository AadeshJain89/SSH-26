import { useState } from "react";
import PageContainer from "../layout/PageContainer";
import StepIndicator from "../components/StepIndicator";
import "./pages.css";

const SKILLS = [
  "HTML & CSS",
  "JavaScript Fundamentals",
  "Git",
  "Frontend Frameworks",
  "Backend Basics",
  "Databases",
];

export default function SkillDeclaration({ onNext, onBack }) {
  const [selected, setSelected] = useState([]);

  const toggleSkill = (skill) => {
    setSelected((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <PageContainer>
      <StepIndicator current={1} />

      <div className="skill-root">
        <h2 className="skill-title">What skills do you already know?</h2>

        <p className="skill-subtitle">
          Select everything you’re somewhat familiar with.
          You don’t need to be an expert.
        </p>

        <div className="skill-grid">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className={`skill-card ${
                selected.includes(skill) ? "active" : ""
              }`}
              onClick={() => toggleSkill(skill)}
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="skill-actions">
          <button className="secondary-btn" onClick={onBack}>
            Back
          </button>

          <button
            className="primary-btn"
            onClick={onNext}
            disabled={selected.length === 0}
          >
            Continue
          </button>
        </div>
      </div>
    </PageContainer>
  );
}
