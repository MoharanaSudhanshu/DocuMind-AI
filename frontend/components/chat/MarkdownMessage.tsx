"use client";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

interface Props {
  content: string;
}

export default function MarkdownMessage({ content }: Props) {
  return (
    <div className="prose prose-gray max-w-none prose-pre:rounded-xl prose-code:text-sm">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
