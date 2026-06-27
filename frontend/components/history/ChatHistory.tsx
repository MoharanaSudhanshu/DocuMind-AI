"use client";

import HistoryItem from "./HistoryItem";

import { useHistoryStore } from "@/store/historyStore";

export default function ChatHistory() {
  const { history } = useHistoryStore();

  return (
    <div className="space-y-3">
      {history.map((chat) => (
        <HistoryItem key={chat.id} title={chat.title} />
      ))}
    </div>
  );
}
