interface Props {
  progress: number;
}

export default function UploadProgress({ progress }: Props) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <span>Uploading...</span>

        <span>{progress}%</span>
      </div>

      <div className="h-2 rounded-full bg-gray-200">
        <div
          style={{
            width: `${progress}%`,
          }}
          className="h-full rounded-full bg-blue-600"
        />
      </div>
    </div>
  );
}
