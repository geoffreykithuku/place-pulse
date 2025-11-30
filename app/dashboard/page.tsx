import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your properties and viewings.",
};

export default function DashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <h1 className="text-3xl font-display font-bold mb-8">Dashboard</h1>
      <p className="text-neutral-600">User dashboard (authentication required).</p>
    </main>
  );
}
