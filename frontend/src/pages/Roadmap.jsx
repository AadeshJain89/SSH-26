import PageContainer from "../layout/PageContainer";
import StepIndicator from "../components/StepIndicator";
import "./pages.css";

const ROADMAP = [
  {
    name: "JavaScript Fundamentals",
    priority: "must-have",
    depth: "intermediate",
  },
  {
    name: "Frontend Frameworks",
    priority: "must-have",
    depth: "basic",
  },
  {
    name: "Git",
    priority: "nice-to-have",
    depth: "basic",
  },
];

export default function Roadmap() {
  return (
    <PageContainer>
      <StepIndicator current={3} />

      <div className="roadmap-root">
        <h2 className="roadmap-title">Your learning roadmap</h2>

        <p className="roadmap-subtitle">
          Focus on the essentials first. You can always come back to the rest.
        </p>

        <div className="roadmap-section">
          <h3 className="roadmap-section-title must">
            Must-have skills
          </h3>

          {ROADMAP.filter((r) => r.priority === "must-have").map(
            (item) => (
              <RoadmapCard key={item.name} item={item} />
            )
          )}
        </div>

        <div className="roadmap-section">
          <h3 className="roadmap-section-title nice">
            Nice-to-have skills
          </h3>

          {ROADMAP.filter((r) => r.priority === "nice-to-have").map(
            (item) => (
              <RoadmapCard key={item.name} item={item} />
            )
          )}
        </div>
      </div>
    </PageContainer>
  );
}

function RoadmapCard({ item }) {
  return (
    <div className="roadmap-card">
      <div className="roadmap-card-main">
        <h4>{item.name}</h4>
        <span className={`depth-badge ${item.depth}`}>
          {item.depth}
        </span>
      </div>

      <p className="roadmap-desc">
        Learn this to a <strong>{item.depth}</strong> level before moving on.
      </p>
    </div>
  );
}
