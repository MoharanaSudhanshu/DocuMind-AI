"use client";

import { useEffect, useMemo, useState } from "react";

import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import DocumentCard from "./DocumentCard";
import StorageCard from "./StorageCard";

import UploadModal from "@/components/upload/UploadModal";

import { fetchDocuments } from "@/lib/document";
import { useDocumentStore } from "@/store/documentStore";

export default function Sidebar() {
  const { documents, setDocuments } = useDocumentStore();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadDocuments();
  }, []);

  async function loadDocuments() {
    try {
      const docs = await fetchDocuments();
      setDocuments(docs);
    } catch (error) {
      console.error("Failed to load documents:", error);
    }
  }

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) =>
      doc.filename.toLowerCase().includes(search.toLowerCase()),
    );
  }, [documents, search]);

  return (
    <>
      <aside className="flex h-full flex-col border-r bg-gray-50">
        {/* Top */}
        <div className="space-y-4 p-6">
          <SearchBar value={search} onChange={setSearch} />

          <UploadButton onClick={() => setOpen(true)} />
        </div>

        {/* Documents */}
        <div className="flex-1 overflow-y-auto px-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Recent Documents
          </h2>

          <div className="space-y-3">
            {filteredDocuments.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center">
                <p className="text-sm text-gray-500">
                  No documents uploaded yet.
                </p>
              </div>
            ) : (
              filteredDocuments.map((doc) => (
                <DocumentCard key={doc.id} document={doc} />
              ))
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t p-6">
          <StorageCard />
        </div>
      </aside>

      {/* Upload Modal */}
      <UploadModal
        open={open}
        onOpenChange={(value) => {
          setOpen(value);

          // Refresh document list after closing the modal
          if (!value) {
            loadDocuments();
          }
        }}
      />
    </>
  );
}
