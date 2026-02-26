import { useState } from "react";
import { submitQuiz } from "./api";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import LoginSignup from "./pages/LoginSignup";
import SkillDeclaration from "./pages/SkillDeclaration";
import Quiz from "./pages/Quiz";
import ConfidenceCompetence from "./pages/ConfidenceCompetence";
import Roadmap from "./pages/Roadmap";

function App() {
  const [step, setStep] = useState(0);
  const [showAuth, setShowAuth] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

  // GLOBAL STATE (important)
  const [declaredSkills, setDeclaredSkills] = useState([]);
  const [verificationResults, setVerificationResults] = useState({});
  const [quizConfidence, setQuizConfidence] = useState({});
  const [questionsAsked, setQuestionsAsked] = useState([]);
  const [overconfidenceSummary, setOverconfidenceSummary] = useState(null);

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => prev - 1);

  if (showAuth) {
    return (
      <LoginSignup
        onClose={() => setShowAuth(false)}
        onSuccess={() => {
          setShowAuth(false);
          goNext();
        }}
      />
    );
  }

  if (showBlog) {
    return <Blog onBack={() => setShowBlog(false)} />;
  }

  return (
    <>
      {step === 0 && (
        <Landing
          onStart={goNext}
          onOpenAuth={() => setShowAuth(true)}
          onOpenBlog={() => setShowBlog(true)}
        />
      )}

      {step === 1 && (
        <SkillDeclaration
          onNext={(skills) => {
            setDeclaredSkills(skills);
            goNext();
          }}
          onBack={goBack}
        />
      )}

      {step === 2 && (
        <Quiz
          declaredSkills={declaredSkills}
          onNext={async (results, confidence = {}, asked = []) => {
            setVerificationResults(results);
            setQuizConfidence(confidence);
            setQuestionsAsked(asked);
            try {
              const res = await submitQuiz({
                declared_skills: declaredSkills,
                results,
                confidence,
              });
              setOverconfidenceSummary(
                res.overconfidence_detected ? res.overconfidence_summary : null
              );
            } catch (_) {
              setOverconfidenceSummary(null);
            }
            goNext();
          }}
          onBack={goBack}
        />
      )}

      {step === 3 && (
        <ConfidenceCompetence
          verificationResults={verificationResults}
          quizConfidence={quizConfidence}
          questionsAsked={questionsAsked}
          onNext={goNext}
          onBack={goBack}
        />
      )}

      {step === 4 && (
        <Roadmap
          declaredSkills={declaredSkills}
          verificationResults={verificationResults}
          quizConfidence={quizConfidence}
          overconfidenceSummary={overconfidenceSummary}
        />
      )}
    </>
  );
}

export default App;
