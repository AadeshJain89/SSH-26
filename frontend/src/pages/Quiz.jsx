import { useState, useMemo, useRef, useEffect } from "react";
import {
  getQuestionPoolByDifficulty,
  getNextAdaptiveQuestion,
  getCategoriesFromDeclaration,
  ADAPTIVE_CONFIG,
  adjustDifficulty,
} from "../data/quizQuestions";
import "./Quiz.css";

export default function Quiz({ declaredSkills = [], onNext, onBack }) {
  const categories = useMemo(
    () => getCategoriesFromDeclaration(declaredSkills).length ? getCategoriesFromDeclaration(declaredSkills) : ["Frontend", "Backend", "DevOps"],
    [declaredSkills]
  );
  const pool = useMemo(() => getQuestionPoolByDifficulty(declaredSkills), [declaredSkills]);

  const [questionsAsked, setQuestionsAsked] = useState(() => {
    const first = getNextAdaptiveQuestion(pool, "intermediate", new Set(), categories);
    return first ? [first] : [];
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [currentDifficulty, setCurrentDifficulty] = useState("intermediate");
  const [correctStreak, setCorrectStreak] = useState(0);
  const [wrongStreak, setWrongStreak] = useState(0);
  const [confidence, setConfidence] = useState({});
  const [answerChangeCount, setAnswerChangeCount] = useState(0);

  const questionStartTime = useRef(null);
  const askedIds = useRef(new Set(questionsAsked.map((q) => q.id)));

  const currentQuestion = questionsAsked[currentIndex];
  const total = questionsAsked.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = ADAPTIVE_CONFIG.maxQuestions > 0
    ? Math.round((answeredCount / ADAPTIVE_CONFIG.maxQuestions) * 100)
    : 0;

  useEffect(() => {
    questionStartTime.current = Date.now();
    setAnswerChangeCount(0);
  }, [currentQuestion?.id]);

  const recordAnswerAndNext = () => {
    if (!currentQuestion) return;
    const selected = answers[currentQuestion.id];
    let nextDifficulty = currentDifficulty;
    if (selected !== undefined) {
      const correct = selected === currentQuestion.correctIndex;
      setResults((prev) => ({ ...prev, [currentQuestion.id]: correct }));

      const timeSpentMs = questionStartTime.current ? Math.round(Date.now() - questionStartTime.current) : 0;
      setConfidence((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          timeSpentMs,
          answerChangeCount,
        },
      }));

      if (correct) {
        const newStreak = correctStreak + 1;
        setCorrectStreak(newStreak);
        setWrongStreak(0);
        if (newStreak >= ADAPTIVE_CONFIG.correctStreakToLevelUp) {
          nextDifficulty = adjustDifficulty(currentDifficulty, "up");
          setCurrentDifficulty(nextDifficulty);
          setCorrectStreak(0);
        }
      } else {
        const newStreak = wrongStreak + 1;
        setWrongStreak(newStreak);
        setCorrectStreak(0);
        if (newStreak >= ADAPTIVE_CONFIG.wrongStreakToLevelDown) {
          nextDifficulty = adjustDifficulty(currentDifficulty, "down");
          setCurrentDifficulty(nextDifficulty);
          setWrongStreak(0);
        }
      }
    }

    if (total < ADAPTIVE_CONFIG.maxQuestions) {
      askedIds.current.add(currentQuestion.id);
      const next = getNextAdaptiveQuestion(
        pool,
        nextDifficulty,
        askedIds.current,
        categories
      );
      if (next) {
        setQuestionsAsked((prev) => [...prev, next]);
        setCurrentIndex((i) => i + 1);
      } else {
        const finalResults = { ...results };
        if (currentQuestion && answers[currentQuestion.id] !== undefined) {
          finalResults[currentQuestion.id] = answers[currentQuestion.id] === currentQuestion.correctIndex;
        }
        const timeSpentMs = questionStartTime.current ? Math.round(Date.now() - questionStartTime.current) : 0;
        const finalConfidence = { ...confidence, [currentQuestion.id]: { timeSpentMs, answerChangeCount } };
        onNext(finalResults, finalConfidence, [...questionsAsked]);
      }
    } else {
      const finalResults = { ...results };
      if (currentQuestion && answers[currentQuestion.id] !== undefined) {
        finalResults[currentQuestion.id] = answers[currentQuestion.id] === currentQuestion.correctIndex;
      }
      const timeSpentMs = questionStartTime.current ? Math.round(Date.now() - questionStartTime.current) : 0;
      const finalConfidence = { ...confidence, [currentQuestion.id]: { timeSpentMs, answerChangeCount } };
      onNext(finalResults, finalConfidence, [...questionsAsked]);
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const selectOption = (optionIndex) => {
    if (!currentQuestion) return;
    const prev = answers[currentQuestion.id];
    if (prev !== undefined && prev !== optionIndex) {
      setAnswerChangeCount((c) => c + 1);
    }
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
  };

  const goToQuestion = (index) => {
    setCurrentIndex(index);
  };

  const getQuestionStatus = (q) => {
    if (questionsAsked.indexOf(q) === currentIndex) return "current";
    return "answered";
  };

  if (categories.length === 0) {
    return (
      <div className="quiz-page">
        <div className="quiz-empty">
          <p>No quiz categories selected. Go back and select at least one.</p>
          <button type="button" className="quiz-btn quiz-btn-primary" onClick={onBack}>
            Back
          </button>
        </div>
      </div>
    );
  }

  if (questionsAsked.length === 0) {
    return (
      <div className="quiz-page">
        <div className="quiz-empty">
          <p>No questions available for the selected categories.</p>
          <button type="button" className="quiz-btn quiz-btn-primary" onClick={onBack}>
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-layout">
        <main className="quiz-main">
          <header className="quiz-header">
            <div className="quiz-header-row">
              <button type="button" className="quiz-back" onClick={onBack}>
                ← Back
              </button>
            </div>
            <h1 className="quiz-title">Skill Check</h1>
            <div className="quiz-progress-wrap">
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${Math.min(progressPercent, 100)}%` }}
                />
              </div>
              <span className="quiz-progress-pct">
                {answeredCount}/{ADAPTIVE_CONFIG.maxQuestions}
              </span>
            </div>
          </header>

          <div className="quiz-question-area">
            {currentQuestion && (
              <>
                <p className="quiz-question-label">
                  Question {currentIndex + 1}:
                </p>
                <p className="quiz-question-text">{currentQuestion.question}</p>

                <div className="quiz-options">
                  {currentQuestion.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      type="button"
                      className={`quiz-option ${
                        answers[currentQuestion.id] === optionIndex ? "quiz-option-selected" : ""
                      }`}
                      onClick={() => selectOption(optionIndex)}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <div className="quiz-nav-buttons">
                  <button
                    type="button"
                    className="quiz-btn quiz-btn-prev"
                    onClick={goPrevious}
                    disabled={currentIndex === 0}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="quiz-btn quiz-btn-next"
                    onClick={recordAnswerAndNext}
                    disabled={answers[currentQuestion?.id] === undefined}
                  >
                    {total < ADAPTIVE_CONFIG.maxQuestions ? "Next" : "Finish"}
                  </button>
                </div>
              </>
            )}
          </div>
        </main>

        <aside className="quiz-sidebar">
          <div className="quiz-sidebar-title">Questions</div>
          <ul className="quiz-sidebar-list">
            {questionsAsked.map((q, index) => {
              const status = getQuestionStatus(q);
              return (
                <li key={q.id}>
                  <button
                    type="button"
                    className={`quiz-sidebar-item quiz-sidebar-item-${status}`}
                    onClick={() => goToQuestion(index)}
                  >
                    <span className="quiz-sidebar-icon">
                      {status === "current" ? "○" : "○"}
                    </span>
                    <span>Question {index + 1}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
}
