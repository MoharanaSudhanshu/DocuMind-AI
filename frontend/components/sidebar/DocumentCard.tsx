"use client";

import { motion } from "framer-motion";
import { FileText, MoreVertical, Trash2, Download, Pencil } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";

import { DocumentItem } from "@/types/document";
import { useDocumentStore } from "@/store/documentStore";
import { usePDFStore } from "@/store/pdfStore";

interface Props {
  document: DocumentItem;
}

export default function DocumentCard({ document }: Props) {
  const { selectedDocument, selectDocument } = useDocumentStore();
  const { setFile } = usePDFStore();

  const active = selectedDocument?.id === document.id;

  function handleSelect() {
    selectDocument(document);

    setFile(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${document.filename}`,
    );
  }

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleSelect}
      className={`cursor-pointer rounded-xl border p-3 transition-all ${
        active
          ? "border-blue-500 bg-blue-50 shadow-sm"
          : "border-gray-200 bg-white hover:border-blue-300 hover:shadow"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex min-w-0 gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${
              active ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
            }`}
          >
            <FileText size={18} />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold">
              {document.filename}
            </h3>

            <p className="mt-0.5 text-xs text-gray-500">
              {new Date(document.uploaded_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger
            onClick={(e) => e.stopPropagation()}
            className="rounded-md p-1 hover:bg-gray-100"
          >
            <MoreVertical size={16} />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              Rename
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              Download
            </DropdownMenuItem>

            <DropdownMenuItem className="text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <Badge className="h-5 bg-green-100 px-2 text-[10px] text-green-700 hover:bg-green-100">
          Ready
        </Badge>

        <span className="text-[10px] uppercase tracking-wide text-gray-400">
          PDF
        </span>
      </div>
    </motion.div>
  );
}
