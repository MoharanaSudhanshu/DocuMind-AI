"use client";

import { useMemo } from "react";
import { useDocumentStore } from "@/store/documentStore";

export default function StorageCard() {
  const { documents } = useDocumentStore();

  const { totalFiles, totalSizeMB, percentage } = useMemo(() => {
    const totalFiles = documents.length;

    // If your backend returns file_size, use it.
    const bytes = documents.reduce(
      (sum, doc: any) => sum + (doc.file_size || 0),
      0,
    );

    const totalSizeMB = (bytes / (1024 * 1024)).toFixed(2);

    // Example storage limit: 100 MB
    const percentage = Math.min((Number(totalSizeMB) / 100) * 100, 100);

    return {
      totalFiles,
      totalSizeMB,
      percentage,
    };
  }, [documents]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold">Storage</h3>

      <p className="mt-2 text-sm text-gray-500">
        {totalFiles} {totalFiles === 1 ? "Document" : "Documents"}
      </p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-2 text-xs text-gray-500">
        {totalSizeMB} MB used of 100 MB
      </p>
    </div>
  );
}
