import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export async function generateRoadmap(payload) {
  const response = await axios.post(
    `${BASE_URL}/generate-roadmap`,
    payload
  );
  return response.data;
}
