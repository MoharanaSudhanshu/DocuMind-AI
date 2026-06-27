"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();

  return (
    <section className="bg-blue-600 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold">Ready to chat with your PDFs?</h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
          Upload research papers, books, notes and documents. Ask questions and
          receive accurate answers with citations.
        </p>

        <button
          onClick={() => router.push("/dashboard")}
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105"
        >
          Get Started
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
