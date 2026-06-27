"use client";

import { FileText, Globe } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow">
            D
          </div>

          <div className="text-left">
            <h1 className="text-lg font-bold text-gray-900">DocuMind AI</h1>
            <p className="text-xs text-gray-500">AI Research Assistant</p>
          </div>
        </button>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() =>
              document.getElementById("features")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="text-gray-600 hover:text-blue-600"
          >
            Features
          </button>

          <button
            onClick={() => router.push("/docs")}
            className="text-gray-600 transition hover:text-blue-600"
          >
            Documentation
          </button>

          <a
            href="https://github.com/MoharanaSudhanshu/DocuMind-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
          >
            
            GitHub
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/dashboard")}
            className="rounded-xl border px-5 py-2 transition hover:bg-gray-100"
          >
            Dashboard
          </button>

          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            <FileText size={18} />
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
