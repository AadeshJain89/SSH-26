import { useState } from "react";
import Landing from "./pages/Landing";
import SkillDeclaration from "./pages/SkillDeclaration";
import Verification from "./pages/Verification";
import Roadmap from "./pages/Roadmap";
import StepIndicator from "./components/StepIndicator";

function App() {
  const [stage, setStage] = useState("landing");
  const [formData, setFormData] = useState({});

  const stepIndex =
    stage === "landing" ? 0 :
    stage === "skills" ? 1 :
    stage === "verification" ? 2 : 3;

  return (
    <div className="container">
      <StepIndicator step={stepIndex} />

      {stage === "landing" && (
        <Landing onNext={() => setStage("skills")} />
      )}

      {stage === "skills" && (
        <SkillDeclaration
          onNext={(data) => {
            setFormData({ ...formData, ...data });
            setStage("verification");
          }}
        />
      )}

      {stage === "verification" && (
        <Verification
          declaredSkills={formData.declared_skills}
          onNext={(data) => {
            setFormData({ ...formData, ...data });
            setStage("result");
          }}
        />
      )}

      {stage === "result" && (
        <Roadmap formData={formData} />
      )}
    </div>
  );
}

export default App;
