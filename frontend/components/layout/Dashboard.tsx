"use client";

import dynamic from "next/dynamic";

import Header from "./Header";
import Sidebar from "../sidebar/Sidebar";
import ChatWindow from "../chat/ChatWindow";

import UploadModal from "@/components/upload/UploadModal";

import { useWorkspaceStore } from "@/store/workspaceStore";

const PDFViewer = dynamic(() => import("../pdf/PDFViewer"), {
  ssr: false,
});

export default function Dashboard() {
  const { uploadOpen, closeUpload } = useWorkspaceStore();

  return (
    <>
      <div className="flex h-screen flex-col bg-gray-50">
        <Header />

        <div
          className="
            grid
            flex-1
            overflow-hidden
            grid-cols-[280px_minmax(0,1fr)_360px]
          "
        >
          {/* Sidebar */}
          <aside className="overflow-hidden border-r bg-gray-50">
            <Sidebar />
          </aside>

          {/* Chat */}
          <main className="overflow-hidden border-x bg-white">
            <ChatWindow />
          </main>

          {/* PDF */}
          <aside className="overflow-hidden bg-gray-100">
            <PDFViewer />
          </aside>
        </div>
      </div>

      <UploadModal
        open={uploadOpen}
        onOpenChange={(open) => {
          if (!open) closeUpload();
        }}
      />
    </>
  );
}
