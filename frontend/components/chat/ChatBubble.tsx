"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

import MessageActions from "./MessageActions";
import SourceCard from "./SourceCard";

import { Message } from "@/types/chat";

interface Props {
  message: Message;
  isStreaming?: boolean;
}

export default function ChatBubble({ message, isStreaming = false }: Props) {
  const isUser = message.role === "user";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex w-full max-w-4xl gap-3 ${
          isUser ? "ml-auto flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}

        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm ${
            isUser ? "bg-blue-600 text-white" : "bg-gray-900 text-white"
          }`}
        >
          {isUser ? <User size={16} /> : <Bot size={16} />}
        </div>

        {/* Message Bubble */}

        <div
          className={`w-fit max-w-full rounded-2xl border px-5 py-4 shadow-sm transition-all ${
            isUser
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-200 bg-white"
          }`}
        >
          {/* Markdown */}

          <div
            className={`prose prose-sm max-w-none ${
              isUser ? "prose-invert" : ""
            }`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {message.content}
            </ReactMarkdown>

            {isStreaming && (
              <span className="animate-pulse font-bold text-blue-500">▋</span>
            )}
          </div>

          {/* AI Only */}

          {!isUser && (
            <>
              {/* Sources */}

              {message.sources && message.sources.length > 0 && (
                <div className="mt-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Sources
                  </h4>

                  <div className="space-y-2">
                    {message.sources.map((source, index) => (
                      <SourceCard
                        key={index}
                        filename={source.filename}
                        page={source.page}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Divider */}

              <div className="mt-4 border-t pt-3">
                <MessageActions
                  text={message.content}
                  onRegenerate={() => {
                    console.log("Regenerate");
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
