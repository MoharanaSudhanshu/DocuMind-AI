"use client";

import { useEffect, useRef, useState } from "react";
import { SendHorizonal } from "lucide-react";

import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import SuggestedQuestions from "./SuggestedQuestions";

import { useChat } from "@/hooks/useChat";

export default function ChatWindow() {
  const { messages, loading, send } = useChat();

  const [question, setQuestion] = useState("");

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function handleSend() {
    if (!question.trim()) return;

    const text = question;

    setQuestion("");

    await send(text);
  }

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <div className="max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight">
                🤖 DocuMind AI
              </h1>

              <p className="mt-3 text-sm text-gray-500">
                Upload a PDF and ask anything about it.
              </p>

              <div className="mt-8">
                <SuggestedQuestions onSelect={(text) => setQuestion(text)} />
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-4xl">
            {messages.map((message, index) => (
              <ChatBubble
                key={message.id}
                message={message}
                isStreaming={
                  loading &&
                  index === messages.length - 1 &&
                  message.role === "assistant"
                }
              />
            ))}

            {loading && <TypingIndicator />}

            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t bg-white px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 shadow-sm">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask anything about your document..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />

          <button
            disabled={loading || !question.trim()}
            onClick={handleSend}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <SendHorizonal size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
