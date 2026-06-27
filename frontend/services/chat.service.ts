import api from "@/lib/api";

export async function sendQuestion(question: string) {
  return api.post("/api/chat", {
    question,
  });
}
