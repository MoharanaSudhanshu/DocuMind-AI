import { toast } from "sonner";

export async function uploadDocument(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ingest`,
    {
      method: "POST",
      body: formData,
    },
  );

  if (!response.ok) {
    toast.error("Upload failed");

    throw new Error("Upload failed");
  }

  toast.success("Document uploaded successfully");

  return response.json();
}
