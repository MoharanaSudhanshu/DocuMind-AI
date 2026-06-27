"use client";

import { UploadCloud } from "lucide-react";
import { useDropzone } from "react-dropzone";

import { useUpload } from "@/hooks/useUpload";

export default function UploadDropzone() {
 
  const { upload } = useUpload();

  const onDrop = async (files: File[]) => {
    if (!files.length) return;

    await upload(files[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`cursor-pointer rounded-3xl border-2 border-dashed p-16 text-center transition ${
        isDragActive
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
      }`}
    >
      <input {...getInputProps()} />

      <UploadCloud className="mx-auto text-blue-600" size={64} />

      <h2 className="mt-6 text-xl font-semibold">Drag & Drop PDF</h2>

      <p className="mt-2 text-gray-500">or click to browse</p>

      <p className="mt-6 text-xs text-gray-400">PDF • Max 20 MB</p>
    </div>
  );
}
