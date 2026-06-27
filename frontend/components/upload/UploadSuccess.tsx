import { CheckCircle2 } from "lucide-react";

export default function UploadSuccess() {
  return (
    <div className="py-10 text-center">
      <CheckCircle2 size={70} className="mx-auto text-green-500" />

      <h2 className="mt-5 text-2xl font-semibold">Upload Successful</h2>

      <p className="mt-2 text-gray-500">Your document has been indexed.</p>
    </div>
  );
}
