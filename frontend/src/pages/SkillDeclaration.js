import { useState } from "react";

const ROLE_SKILLS = [
  "HTML & CSS",
  "JavaScript Fundamentals",
  "Frontend Frameworks",
  "Git"
];

export default function SkillDeclaration({ onNext }) {
  const [selected, setSelected] = useState([]);

  const toggleSkill = (skill) => {
    setSelected((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div>
      <h2>Select skills you already know</h2>
      <p style={{ color: "#555", marginBottom: "16px" }}>
        Choose the skills you are confident about. We’ll verify them next.
      </p>

      {ROLE_SKILLS.map((skill) => (
        <div className="card" key={skill}>
          <label
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            <input
              type="checkbox"
              checked={selected.includes(skill)}
              onChange={() => toggleSkill(skill)}
            />
            <strong>{skill}</strong>
          </label>
        </div>
      ))}

      <button
        disabled={selected.length === 0}
        onClick={() => onNext({ declared_skills: selected })}
        style={{ marginTop: "20px" }}
      >
        Next
      </button>
    </div>
  );
}
