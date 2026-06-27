"use client";

import { Upload } from "lucide-react";

interface Props {
  onClick?: () => void;
}

export default function UploadButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700"
    >
      <Upload size={18} />
      Upload PDF
    </button>
  );
}
