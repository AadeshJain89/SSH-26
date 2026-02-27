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

/**
 * Multi-role alignment: ranked role fit from topic_scores.
 * topic_scores: { "Frontend": { "HTML": { correct, total }, ... }, ... }
 */
export async function getMultiRoleAlignment(topicScores) {
  const response = await axios.post(
    `${BASE_URL}/multi-role-alignment`,
    { topic_scores: topicScores }
  );
  return response.data;
}

/**
 * Role transition: from_role -> to_role gap and effort estimate.
 */
export async function getRoleTransition(fromRoleId, toRoleId, topicScores) {
  const response = await axios.post(
    `${BASE_URL}/role-transition`,
    { from_role_id: fromRoleId, to_role_id: toRoleId, topic_scores: topicScores }
  );
  return response.data;
}
