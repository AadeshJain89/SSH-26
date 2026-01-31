export default function StepIndicator({ step }) {
  const steps = ["Start", "Skills", "Verify", "Roadmap"];

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      {steps.map((s, i) => (
        <div
          key={s}
          style={{
            padding: "6px 12px",
            borderRadius: "999px",
            background: i === step ? "#2563eb" : "#e5e7eb",
            color: i === step ? "white" : "#333",
            fontSize: "14px",
          }}
        >
          {s}
        </div>
      ))}
    </div>
  );
}
