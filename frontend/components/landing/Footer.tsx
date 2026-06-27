"use client";

import Link from "next/link";
import { Globe, BookOpen, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        {/* Left */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">DocuMind AI</h2>
          <p className="mt-2 max-w-sm text-sm text-gray-500">
            AI-powered research assistant that lets you chat with your PDFs
            using Retrieval-Augmented Generation (RAG).
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="https://github.com/MoharanaSudhanshu/DocuMind-AI"
            target="_blank"
            className="flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
          >
            <Globe size={18} />
            GitHub
          </Link>

          <Link
            href="/docs"
            className="flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
          >
            <BookOpen size={18} />
            Documentation
          </Link>

          <Link
            href="mailto:moharanasudhanshu1@gmail.com"
            className="flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
          >
            <Mail size={18} />
            Contact
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} DocuMind AI. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Made with
            <Heart className="fill-red-500 text-red-500" size={15} />
            by Sudhanshu Sekhar Moharana
          </p>
        </div>
      </div>
    </footer>
  );
}
