"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  function handleGetStarted() {
    router.push("/dashboard");
  }

  function handleViewDemo() {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-6 flex justify-center">
            <div className="rounded-full border bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
              <Sparkles size={15} className="mr-2 inline" />
              AI Powered Research Assistant
            </div>
          </div>

          <h1 className="text-center text-7xl font-bold tracking-tight">
            Chat with
            <span className="text-blue-600"> your PDFs</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xl text-gray-500">
            Upload research papers, books and documentation. Ask questions and
            receive grounded answers with citations.
          </p>

          <div className="mt-12 flex justify-center gap-5">
            <button
              onClick={handleGetStarted}
              className="rounded-xl bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
            >
              Get Started
            </button>

            <button
              onClick={handleViewDemo}
              className="rounded-xl border px-8 py-4 transition hover:bg-gray-100"
            >
              View Demo
              <ArrowRight className="ml-2 inline" size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
