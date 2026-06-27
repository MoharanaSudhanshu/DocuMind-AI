"use client";

import { useDocumentStore } from "@/store/documentStore";

import { deleteDocument, getDocuments } from "@/services/document.service";

export function useDocuments() {
  const { documents, setDocuments } = useDocumentStore();

  async function refresh() {
    const docs = await getDocuments();

    setDocuments(docs);
  }

  async function remove(id: string) {
    await deleteDocument(id);

    await refresh();
  }

  return {
    documents,
    refresh,
    remove,
  };
}
