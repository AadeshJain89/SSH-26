import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export async function generateRoadmap(payload) {
  const response = await axios.post(
    `${BASE_URL}/generate-roadmap`,
    payload
  );
  return response.data;
}

/**
 * Submit quiz results and confidence (time per question, answer change count).
 * Returns overconfidence_detected and overconfidence_summary when applicable.
 */
export async function submitQuiz(payload) {
  const response = await axios.post(
    `${BASE_URL}/submit-quiz`,
    payload
  );
  return response.data;
}
