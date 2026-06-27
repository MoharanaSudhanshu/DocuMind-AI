import { create } from "zustand";

interface PDFStore {
  file?: string;

  page: number;

  scale: number;

  setFile: (file: string) => void;

  jumpToPage: (page: number) => void;

  zoomIn: () => void;

  zoomOut: () => void;
}

export const usePDFStore = create<PDFStore>((set) => ({
  file: undefined,

  page: 1,

  scale: 1,

  setFile: (file) =>
    set({
      file,
      page: 1,
    }),

  jumpToPage: (page) =>
    set({
      page,
    }),

  zoomIn: () =>
    set((state) => ({
      scale: Math.min(state.scale + 0.1, 2),
    })),

  zoomOut: () =>
    set((state) => ({
      scale: Math.max(state.scale - 0.1, 0.5),
    })),
}));
