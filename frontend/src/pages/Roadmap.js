import { useEffect, useState } from "react";
import { generateRoadmap } from "../api";

export default function Roadmap({ formData }) {
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRoadmap() {
      try {
        const data = await generateRoadmap({
          declared_skills: formData.declared_skills,
          verification_results: formData.verification_results,
          hours_per_week: 8,
        });

        setRoadmap(data.roadmap);
      } catch (err) {
        console.error("Failed to fetch roadmap", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRoadmap();
  }, [formData]);

  if (loading) {
    return <p>Generating your roadmap...</p>;
  }

  return (
    <div>
      <h2>Your Personalized Learning Roadmap</h2>
      <p style={{ color: "#555", marginBottom: "16px" }}>
        Based on your current skills and available time.
      </p>

      {roadmap.length === 0 && (
        <p>No learning gaps detected. You’re good to go! 🚀</p>
      )}

      {roadmap.map((item) => (
        <div className="card" key={item.name}>
          <h3>{item.name}</h3>

          <p>
            <strong>Priority:</strong>{" "}
            <span
              style={{
                color:
                  item.priority === "must-have"
                    ? "#dc2626"
                    : "#16a34a",
              }}
            >
              {item.priority}
            </span>
          </p>

          <p>
            <strong>Depth:</strong> {item.depth}
          </p>
        </div>
      ))}
    </div>
  );
}
