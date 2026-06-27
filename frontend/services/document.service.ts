import api from "@/lib/api";

export async function getDocuments() {
  const response = await api.get("/api/documents");

  return response.data;
}
export async function deleteDocument(id: string) {
  await api.delete(`/api/documents/${id}`);
}