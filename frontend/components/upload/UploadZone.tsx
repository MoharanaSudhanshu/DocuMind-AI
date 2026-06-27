"use client";

import { useDropzone } from "react-dropzone";

export default function UploadZone() {
  const onDrop = async (acceptedFiles: File[]) => {
    try {
      console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL);

      const file = acceptedFiles[0];

      if (!file) {
        console.log("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ingest`;

      console.log("Uploading to:", url);

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      console.log("Status:", response.status);

      const text = await response.text();

      console.log("Response:", text);

      if (!response.ok) {
        throw new Error(text);
      }

      alert("Upload successful!");
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed rounded-xl bg-white p-8 text-center hover:border-blue-500 transition cursor-pointer"
    >
      <input {...getInputProps()} />

      <h2 className="text-xl font-bold">Drag & Drop PDF</h2>

      <p>or click to upload</p>
    </div>
  );
}
