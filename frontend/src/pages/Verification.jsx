import { useState } from "react";
import PageContainer from "../layout/PageContainer";
import StepIndicator from "../components/StepIndicator";
import "./pages.css";

const QUESTIONS = [
  {
    skill: "JavaScript Fundamentals",
    question: "Can you confidently use variables, functions, and basic loops?",
  },
  {
    skill: "Git",
    question: "Do you know how to commit changes and push code to GitHub?",
  },
  {
    skill: "Frontend Frameworks",
    question: "Have you built anything using React or a similar framework?",
  },
];

export default function Verification({ onNext, onBack }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (value) => {
    setAnswers({
      ...answers,
      [QUESTIONS[current].skill]: value,
    });

    if (current < QUESTIONS.length - 1) {
      setCurrent(current + 1);
    } else {
      onNext();
    }
  };

  const q = QUESTIONS[current];

  return (
    <PageContainer>
      <StepIndicator current={2} />

      <div className="verify-root">
        <h2 className="verify-title">Quick skill check</h2>

        <p className="verify-subtitle">
          This isn’t a test. Just answer honestly so we can guide you better.
        </p>

        <div className="verify-card">
          <p className="verify-skill">{q.skill}</p>
          <h3 className="verify-question">{q.question}</h3>

          <div className="verify-actions">
            <button
              className="verify-btn yes"
              onClick={() => handleAnswer("yes")}
            >
              Yes
            </button>

            <button
              className="verify-btn unsure"
              onClick={() => handleAnswer("unsure")}
            >
              Not sure
            </button>

            <button
              className="verify-btn no"
              onClick={() => handleAnswer("no")}
            >
              No
            </button>
          </div>
        </div>

        <button className="secondary-btn verify-back" onClick={onBack}>
          Back
        </button>
      </div>
    </PageContainer>
  );
}
