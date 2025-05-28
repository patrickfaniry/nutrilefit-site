"use client";

import dynamic from "next/dynamic";

// Dynamically import AdminPanel without SSR
const AdminPanel = dynamic(() => import("./AdminPanel"), { ssr: false });

export default function AdminPage() {
  return <AdminPanel />;
}
