import { create } from "zustand";

import { DocumentItem } from "@/types/document";

interface DocumentStore {
  documents: DocumentItem[];

  selectedDocument?: DocumentItem;

  setDocuments: (docs: DocumentItem[]) => void;

  selectDocument: (doc: DocumentItem) => void;
}

export const useDocumentStore = create<DocumentStore>((set) => ({
  documents: [],

  selectedDocument: undefined,

  setDocuments: (documents) =>
    set({
      documents,
    }),

  selectDocument: (selectedDocument) =>
    set({
      selectedDocument,
    }),
}));
