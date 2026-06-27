"use client";

import { useDocumentStore } from "@/store/documentStore";
import { useWorkspaceStore } from "@/store/workspaceStore";
import { usePDFStore } from "@/store/pdfStore";
import { useChatStore } from "@/store/chatStore";

import { uploadDocument } from "@/services/upload.service";
import { getDocuments } from "@/services/document.service";

export function useUpload() {
  const { closeUpload, setUploading } = useWorkspaceStore();

  const { setDocuments, selectDocument } = useDocumentStore();

  const { setFile } = usePDFStore();

  const { clearChat } = useChatStore();

  async function upload(file: File) {
    try {
      setUploading(true);

      await uploadDocument(file);

      const docs = await getDocuments();

      setDocuments(docs);

      if (docs.length > 0) {
        const latest = docs[0];

        selectDocument(latest);

        clearChat();

        setFile(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${latest.filename}`,
        );
      }

      closeUpload();
    } finally {
      setUploading(false);
    }
  }

  return {
    upload,
  };
}
