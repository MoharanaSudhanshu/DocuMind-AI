"use client";

import Sidebar from "@/components/sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
