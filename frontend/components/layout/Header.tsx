"use client";

import { Search, Moon, Bell, } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-18 items-center justify-between border-b bg-white px-8">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white text-xl font-bold shadow-sm">
          D
        </div>

        <div>
          <h1 className="text-lg font-semibold text-gray-900">DocuMind AI</h1>

          <p className="text-xs text-gray-500">AI Research Assistant</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative hidden w-105 lg:block">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search documents..."
          className="h-11 w-full rounded-full border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-100 transition">
          <Bell size={18} />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-100 transition">
          <Moon size={18} />
        </button>

        {/* <a
          href="https://github.com/yourusername/DocuMind-AI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 transition hover:bg-gray-100"
        >
          <Github size={18} />
        </a> */}

        <div className="h-11 w-11 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center font-semibold">
          S
        </div>
      </div>
    </header>
  );
}
