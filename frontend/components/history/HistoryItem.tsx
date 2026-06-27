"use client";

import { MessageSquare } from "lucide-react";

interface Props {
  title: string;
}

export default function HistoryItem({ title }: Props) {
  return (
    <div className="cursor-pointer rounded-xl border bg-white p-4 hover:border-blue-500">
      <div className="flex items-center gap-3">
        <MessageSquare size={18} />

        <span>{title}</span>
      </div>
    </div>
  );
}
