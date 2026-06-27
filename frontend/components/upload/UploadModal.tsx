"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { FileText, ShieldCheck, Sparkles } from "lucide-react";

import UploadDropzone from "./UploadDropzone";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function UploadModal({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl rounded-3xl border-0 p-0 shadow-2xl">
        {/* Header */}

        <div className="rounded-t-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <FileText size={30} />
          </div>

          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">
              Upload your PDF
            </DialogTitle>

            <DialogDescription className="mt-2 text-blue-100">
              Upload research papers, books, manuals or notes and chat with them
              using AI.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Body */}

        <div className="space-y-8 p-8">
          <UploadDropzone />

          {/* Features */}

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-gray-50 p-5">
              <Sparkles className="mb-3 text-blue-600" size={26} />

              <h3 className="font-semibold">AI Analysis</h3>

              <p className="mt-2 text-sm text-gray-500">
                Semantic search and contextual answers.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-5">
              <FileText className="mb-3 text-blue-600" size={26} />

              <h3 className="font-semibold">Source Citations</h3>

              <p className="mt-2 text-sm text-gray-500">
                Every answer links back to the exact PDF page.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-5">
              <ShieldCheck className="mb-3 text-blue-600" size={26} />

              <h3 className="font-semibold">Private Workspace</h3>

              <p className="mt-2 text-sm text-gray-500">
                Documents remain inside your own workspace.
              </p>
            </div>
          </div>

          {/* Footer */}

          <div className="rounded-2xl bg-blue-50 p-4 text-center text-sm text-gray-600">
            Supported format:
            <span className="ml-2 rounded-lg bg-white px-2 py-1 font-semibold">
              PDF
            </span>
            <span className="mx-2">•</span>
            Maximum size:
            <span className="ml-2 rounded-lg bg-white px-2 py-1 font-semibold">
              20 MB
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
