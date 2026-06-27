import { FileText } from "lucide-react";

export default function PDFViewer() {
  return (
    <aside className="flex flex-col bg-gray-50 p-6">
      <h2 className="mb-4 text-lg font-semibold">PDF Preview</h2>

      <div className="flex flex-1 flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white">
        <FileText size={60} className="text-gray-300" />

        <h3 className="mt-6 text-lg font-medium">No Document Selected</h3>

        <p className="mt-2 max-w-xs text-center text-sm text-gray-500">
          Upload a PDF and click a citation to preview pages here.
        </p>
      </div>
    </aside>
  );
}
