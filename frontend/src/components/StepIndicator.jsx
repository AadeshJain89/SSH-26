import "./StepIndicator.css";

const steps = ["Start", "Skills", "Verify", "Roadmap"];

export default function StepIndicator({ current }) {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div
          key={step}
          className={
            index === current
              ? "step active"
              : "step"
          }
        >
          {step}
        </div>
      ))}
    </div>
  );
}
