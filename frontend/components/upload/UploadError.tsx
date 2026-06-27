import { AlertCircle } from "lucide-react";

export default function UploadError() {
  return (
    <div className="py-10 text-center">
      <AlertCircle size={70} className="mx-auto text-red-500" />

      <h2 className="mt-5 text-xl font-semibold">Upload Failed</h2>

      <p className="mt-2 text-gray-500">Please try again.</p>
    </div>
  );
}
