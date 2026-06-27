"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search documents..."
        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
      />
    </div>
  );
}
