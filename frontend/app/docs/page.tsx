
"use client";

import {
  FileText,
  MessageSquare,
  Search,
  Shield,
  Database,
  Cpu,
  Upload,
  ArrowRight,
} from "lucide-react";

export default function DocsPage() {
  const features = [
    {
      icon: Upload,
      title: "Upload PDFs",
      description:
        "Upload research papers, books, and documentation with drag-and-drop support.",
    },
    {
      icon: MessageSquare,
      title: "AI Chat",
      description:
        "Ask natural language questions and receive context-aware answers.",
    },
    {
      icon: Search,
      title: "Semantic Search",
      description:
        "Vector embeddings retrieve the most relevant information from documents.",
    },
    {
      icon: Shield,
      title: "Private Workspace",
      description:
        "Your uploaded documents remain private and are only used for your conversations.",
    },
  ];

  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "Google Gemini",
    "LangChain",
    "PostgreSQL",
    "pgvector",
    "Framer Motion",
    "Zustand",
  ];

  const workflow = [
    "Upload PDF",
    "Extract Text",
    "Generate Embeddings",
    "Store in PostgreSQL + pgvector",
    "Semantic Search",
    "Generate AI Response",
    "Display Citations",
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Documentation
          </span>

          <h1 className="mt-6 text-5xl font-bold text-gray-900">
            Welcome to DocuMind AI
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            DocuMind AI is an intelligent research assistant that enables users
            to upload PDF documents, ask questions in natural language, and
            receive grounded answers using Retrieval-Augmented Generation (RAG)
            with page-level citations.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Core Features</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Workflow */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            How DocuMind AI Works
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3"
              >
                <div className="rounded-xl bg-blue-600 px-5 py-3 text-white">
                  {step}
                </div>

                {index !== workflow.length - 1 && (
                  <ArrowRight className="text-blue-500" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Technology Stack
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="rounded-xl border bg-white p-5 text-center font-medium shadow-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* API */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            API Endpoints
          </h2>

          <div className="mt-10 overflow-hidden rounded-2xl border">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Method</th>
                  <th className="p-4 text-left">Endpoint</th>
                  <th className="p-4 text-left">Description</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-mono">POST</td>
                  <td className="p-4 font-mono">/api/ingest</td>
                  <td className="p-4">Upload PDF</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-mono">GET</td>
                  <td className="p-4 font-mono">/api/documents</td>
                  <td className="p-4">Fetch Documents</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-mono">POST</td>
                  <td className="p-4 font-mono">/api/chat</td>
                  <td className="p-4">AI Chat</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-mono">POST</td>
                  <td className="p-4 font-mono">/api/chat/stream</td>
                  <td className="p-4">Streaming Chat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Future Enhancements
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <Cpu className="mb-4 text-blue-600" size={32} />
            <h3 className="text-xl font-semibold">
              AI Improvements
            </h3>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
              <li>Multi-document reasoning</li>
              <li>OCR support</li>
              <li>Voice conversations</li>
              <li>Image understanding</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <Database className="mb-4 text-blue-600" size={32} />
            <h3 className="text-xl font-semibold">
              Platform Features
            </h3>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
              <li>User authentication</li>
              <li>Cloud storage</li>
              <li>Team collaboration</li>
              <li>Conversation history</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
;
