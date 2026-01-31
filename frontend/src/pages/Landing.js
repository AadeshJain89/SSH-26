export default function Landing({ onNext }) {
  return (
    <div>
      <h1>Skill Gap Platform</h1>
      <p>Find your skill gaps and get a learning roadmap.</p>
      <button onClick={onNext}>Start</button>
    </div>
  );
}
