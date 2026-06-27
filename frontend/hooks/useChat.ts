"use client";

import { v4 as uuid } from "uuid";

import { useChatStore } from "@/store/chatStore";
import { useHistoryStore } from "@/store/historyStore";
import { Message } from "@/types/chat";

export function useChat() {
  const { messages, addMessage, updateLastMessage, setLoading, loading } =
    useChatStore();

  const { addChat } = useHistoryStore();

  async function send(question: string) {
    if (!question.trim()) return;

    const user: Message = {
      id: uuid(),
      role: "user",
      content: question,
    };

    const assistant: Message = {
      id: uuid(),
      role: "assistant",
      content: "",
      sources: [],
    };

    addMessage(user);
    addMessage(assistant);

    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chat/stream`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to connect to backend.");
      }

      const reader = response.body?.getReader();

      if (!reader) {
        throw new Error("No response stream.");
      }

      const decoder = new TextDecoder();

      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        buffer += decoder.decode(value, {
          stream: true,
        });

        const lines = buffer.split("\n");

        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.trim()) continue;

          try {
            const event = JSON.parse(line);

            if (event.type === "token") {
              updateLastMessage(event.data);
            }

            if (event.type === "sources") {
              useChatStore.setState((state) => {
                const copy = [...state.messages];

                copy[copy.length - 1] = {
                  ...copy[copy.length - 1],
                  sources: event.data,
                };

                return {
                  messages: copy,
                };
              });
            }
          } catch (err) {
            console.error("Invalid JSON:", line);
          }
        }
      }

      // Save chat to history
      const title =
        question.length > 40 ? question.slice(0, 40) + "..." : question;

      const exists = useHistoryStore
        .getState()
        .history.some((chat) => chat.title === title);

      if (!exists) {
        addChat({
          id: crypto.randomUUID(),
          title,
          createdAt: new Date().toISOString(),
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    loading,
    send,
  };
}
