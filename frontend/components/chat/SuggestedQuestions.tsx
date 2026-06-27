const suggestions = [
  "Summarize this document",
  "Explain the methodology",
  "List the key findings",
  "Generate interview questions",
];

interface Props {
  onSelect: (text: string) => void;
}

export default function SuggestedQuestions({ onSelect }: Props) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      {suggestions.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="rounded-xl border bg-white p-4 text-left hover:border-blue-500 hover:bg-blue-50"
        >
          {q}
        </button>
      ))}
    </div>
  );
}
