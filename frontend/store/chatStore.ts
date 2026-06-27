import { create } from "zustand";

import { Message } from "@/types/chat";

interface ChatStore {
  messages: Message[];

  loading: boolean;

  addMessage: (message: Message) => void;

  updateLastMessage: (token: string) => void;

  clearChat: () => void;

  setLoading: (loading: boolean) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],

  loading: false,

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  updateLastMessage: (token) =>
    set((state) => {
      const messages = [...state.messages];

      if (messages.length) {
        messages[messages.length - 1] = {
          ...messages[messages.length - 1],
          content: messages[messages.length - 1].content + token,
        };
      }

      return {
        messages,
      };
    }),

  clearChat: () =>
    set({
      messages: [],
    }),

  setLoading: (loading) =>
    set({
      loading,
    }),
}));
