import api from "./api";
import { DocumentItem } from "@/types/document";

export async function fetchDocuments(): Promise<DocumentItem[]> {
  const response = await api.get<DocumentItem[]>("/api/documents");

  return response.data;
}

export async function deleteDocument(id: string) {
  return api.delete(`/api/documents/${id}`);
}
