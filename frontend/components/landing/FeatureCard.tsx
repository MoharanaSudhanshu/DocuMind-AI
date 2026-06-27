import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
        <Icon className="text-blue-600" />
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-gray-500">{description}</p>
    </div>
  );
}
