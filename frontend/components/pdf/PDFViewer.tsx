"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  FileText,
} from "lucide-react";

import { usePDFStore } from "@/store/pdfStore";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PDFViewer() {
  const [mounted, setMounted] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(320);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setPageWidth(containerRef.current.clientWidth - 24);
      }
    }

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { file, page, scale, jumpToPage, zoomIn, zoomOut } = usePDFStore();

  if (!mounted) return null;

  function onLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);

    if (page > numPages) {
      jumpToPage(1);
    }
  }

  if (!file) {
    return (
      <aside className="flex h-full flex-col bg-gray-50">
        <div className="border-b bg-white px-4 py-3">
          <h2 className="font-semibold">PDF Preview</h2>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <FileText className="mx-auto text-gray-300" size={48} />

            <h3 className="mt-3 text-lg font-medium">No PDF Selected</h3>

            <p className="mt-2 text-sm text-gray-500">
              Upload or select a document.
            </p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="flex h-full flex-col bg-gray-100">
      {/* Toolbar */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-4 py-2">
        <div className="text-sm font-medium">
          Page {page} / {numPages}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={zoomOut}
            className="rounded-md border bg-white p-1.5 hover:bg-gray-100"
          >
            <ZoomOut size={16} />
          </button>

          <span className="w-12 text-center text-xs">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={zoomIn}
            className="rounded-md border bg-white p-1.5 hover:bg-gray-100"
          >
            <ZoomIn size={16} />
          </button>

          <button
            disabled={page === 1}
            onClick={() => jumpToPage(page - 1)}
            className="rounded-md border bg-white p-1.5 hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            disabled={page === numPages}
            onClick={() => jumpToPage(page + 1)}
            className="rounded-md border bg-white p-1.5 hover:bg-gray-100 disabled:opacity-40"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* PDF */}
      <div ref={containerRef} className="flex-1 overflow-auto p-3">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Document
            file={file}
            onLoadSuccess={onLoadSuccess}
            loading={
              <div className="animate-pulse rounded-lg bg-white p-10 text-center">
                Loading PDF...
              </div>
            }
          >
            <Page pageNumber={page} width={pageWidth} scale={scale} />
          </Document>
        </motion.div>
      </div>
    </aside>
  );
}
