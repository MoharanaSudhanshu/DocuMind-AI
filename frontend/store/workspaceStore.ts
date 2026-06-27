import { create } from "zustand";

interface WorkspaceState {
  uploadOpen: boolean;

  uploading: boolean;

  selectedDocumentId?: string;

  openUpload: () => void;

  closeUpload: () => void;

  setUploading: (value: boolean) => void;

  selectDocument: (id: string) => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  uploadOpen: false,

  uploading: false,

  selectedDocumentId: undefined,

  openUpload: () =>
    set({
      uploadOpen: true,
    }),

  closeUpload: () =>
    set({
      uploadOpen: false,
    }),

  setUploading: (uploading) =>
    set({
      uploading,
    }),

  selectDocument: (selectedDocumentId) =>
    set({
      selectedDocumentId,
    }),
}));
