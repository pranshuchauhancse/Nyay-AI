import api from "./api";

export async function askLegalQuestion(question) {
  const response = await api.post("/legal-query", { question });
  return response.data;
}
