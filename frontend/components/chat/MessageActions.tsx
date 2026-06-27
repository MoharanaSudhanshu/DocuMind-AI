"use client";

import {
  Copy,
  RotateCcw,
  ThumbsUp,
  ThumbsDown,
  Share2,
  FileDown,
} from "lucide-react";

import { toast } from "sonner";

interface Props {
  text: string;
  onRegenerate?: () => void;
}

export default function MessageActions({ text, onRegenerate }: Props) {
  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);

      toast.success("Copied to clipboard");
    } catch {
      toast.error("Failed to copy");
    }
  }

  function exportMarkdown() {
    const blob = new Blob([text], {
      type: "text/markdown",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "response.md";

    a.click();

    URL.revokeObjectURL(url);

    toast.success("Markdown exported");
  }

  async function share() {
    if (navigator.share) {
      await navigator.share({
        title: "DocuMind AI",
        text,
      });

      return;
    }

    copyText();
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={copyText}
        className="rounded-lg p-2 transition hover:bg-gray-100"
        title="Copy"
      >
        <Copy size={18} />
      </button>

      <button
        onClick={onRegenerate}
        className="rounded-lg p-2 transition hover:bg-gray-100"
        title="Regenerate"
      >
        <RotateCcw size={18} />
      </button>

      <button
        className="rounded-lg p-2 transition hover:bg-gray-100"
        title="Like"
      >
        <ThumbsUp size={18} />
      </button>

      <button
        className="rounded-lg p-2 transition hover:bg-gray-100"
        title="Dislike"
      >
        <ThumbsDown size={18} />
      </button>

      <button
        onClick={share}
        className="rounded-lg p-2 transition hover:bg-gray-100"
        title="Share"
      >
        <Share2 size={18} />
      </button>

      <button
        onClick={exportMarkdown}
        className="rounded-lg p-2 transition hover:bg-gray-100"
        title="Export"
      >
        <FileDown size={18} />
      </button>
    </div>
  );
}
