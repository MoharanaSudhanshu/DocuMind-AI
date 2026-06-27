"use client";

import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 py-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
        AI
      </div>

      <div className="rounded-2xl border bg-white px-5 py-4 shadow-sm">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: i * 0.2,
              }}
              className="h-2 w-2 rounded-full bg-blue-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
