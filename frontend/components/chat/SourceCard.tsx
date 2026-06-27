import { FileText } from "lucide-react";

interface Props {
  filename: string;
  page: number;
}

export default function SourceCard({ filename, page }: Props) {
  return (
    <div className="rounded-xl border bg-blue-50 p-4">
      <div className="flex items-center gap-3">
        <FileText size={18} className="text-blue-600" />

        <div>
          <p className="font-medium">{filename}</p>

          <p className="text-sm text-gray-500">Page {page}</p>
        </div>
      </div>
    </div>
  );
}
