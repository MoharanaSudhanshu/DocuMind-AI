"use client";

import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

import { Brain, MessageSquare, FileBadge, Shield } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Features
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Everything you need to chat with PDFs
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Upload research papers, books and documentation. Search
            intelligently, ask questions in natural language, and receive
            grounded answers with citations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          <FeatureCard
            icon={Brain}
            title="Semantic Search"
            description="Vector search powered by AI embeddings to retrieve the most relevant content instantly."
          />

          <FeatureCard
            icon={MessageSquare}
            title="AI Chat"
            description="Have natural conversations with your documents using Retrieval-Augmented Generation."
          />

          <FeatureCard
            icon={FileBadge}
            title="Source Citation"
            description="Every answer is backed by citations with document names and page numbers."
          />

          <FeatureCard
            icon={Shield}
            title="Private Workspace"
            description="Your documents remain secure inside your personal workspace and are never shared."
          />
        </div>
      </div>
    </section>
  );
}
