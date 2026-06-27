"use client";

import { Plus } from "lucide-react";

import { useChatStore } from "@/store/chatStore";

export default function NewChatButton() {
  const { clearChat } = useChatStore();

  return (
    <button
      onClick={clearChat}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white"
    >
      <Plus size={18} />
      New Chat
    </button>
  );
}
