import { create } from "zustand";

export interface ChatHistory {
  id: string;
  title: string;
  createdAt: string;
}

interface HistoryStore {
  history: ChatHistory[];

  addChat: (chat: ChatHistory) => void;

  removeChat: (id: string) => void;

  clear: () => void;
}

export const useHistoryStore = create<HistoryStore>((set) => ({
  history: [],

  addChat: (chat) =>
    set((state) => ({
      history: [chat, ...state.history],
    })),

  removeChat: (id) =>
    set((state) => ({
      history: state.history.filter((chat) => chat.id !== id),
    })),

  clear: () =>
    set({
      history: [],
    }),
}));
