import { useState } from "react";

import Landing from "./pages/Landing";
import SkillDeclaration from "./pages/SkillDeclaration";
import Verification from "./pages/Verification";
import Roadmap from "./pages/Roadmap";

function App() {
  const [step, setStep] = useState(0);

  // GLOBAL STATE (important)
  const [declaredSkills, setDeclaredSkills] = useState([]);
  const [verificationResults, setVerificationResults] = useState({});
  const [roadmapData, setRoadmapData] = useState([]);

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => prev - 1);

  return (
    <>
      {step === 0 && <Landing onStart={goNext} />}

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
        <Verification
          declaredSkills={declaredSkills}
          onNext={(results) => {
            setVerificationResults(results);
            goNext();
          }}
          onBack={goBack}
        />
      )}

      {step === 3 && (
        <Roadmap
          declaredSkills={declaredSkills}
          verificationResults={verificationResults}
          roadmapData={roadmapData}
          setRoadmapData={setRoadmapData}
        />
      )}
    </>
  );
}

export default App;
