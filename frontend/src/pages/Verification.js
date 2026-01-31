import { useState } from "react";

const QUESTIONS = {
  "HTML & CSS": {
    id: "html_css",
    question: "Is HTML a markup language?",
    correct: "yes",
  },
  "JavaScript Fundamentals": {
    id: "js",
    question: "Is JavaScript used to add interactivity to web pages?",
    correct: "yes",
  },
  "Frontend Frameworks": {
    id: "fw",
    question: "Is React used for building user interfaces?",
    correct: "yes",
  },
  "Git": {
    id: "git",
    question: "Is Git a version control system?",
    correct: "yes",
  },
};

export default function Verification({ declaredSkills, onNext }) {
  const [answers, setAnswers] = useState({});

  const allAnswered = declaredSkills.every(
    (skill) => answers[QUESTIONS[skill].id]
  );

  const submit = () => {
    const verification_results = {};

    declaredSkills.forEach((skill) => {
      const q = QUESTIONS[skill];
      verification_results[skill] =
        answers[q.id] === q.correct;
    });

    onNext({ verification_results });
  };

  return (
    <div>
      <h2>Skill Verification</h2>
      <p style={{ color: "#555", marginBottom: "16px" }}>
        Answer a simple question to verify each selected skill.
      </p>

      {declaredSkills.map((skill) => {
        const q = QUESTIONS[skill];

        return (
          <div className="card" key={skill}>
            <p><strong>{q.question}</strong></p>

            {["yes", "no"].map((option) => (
              <label
                key={option}
                style={{ display: "block", marginTop: "6px" }}
              >
                <input
                  type="radio"
                  name={q.id}
                  value={option}
                  checked={answers[q.id] === option}
                  onChange={() =>
                    setAnswers({
                      ...answers,
                      [q.id]: option,
                    })
                  }
                />
                {" "}
                {option.toUpperCase()}
              </label>
            ))}
          </div>
        );
      })}

      <button
        disabled={!allAnswered}
        onClick={submit}
        style={{ marginTop: "20px" }}
      >
        Submit Verification
      </button>
    </div>
  );
}
