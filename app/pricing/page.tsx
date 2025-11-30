import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Affordable pricing plans for house hunters and scouts.",
};

export default function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
      <h1 className="text-3xl font-display font-bold mb-8">Pricing</h1>
      <p className="text-neutral-600 mb-12">Transparent pricing for renters and hunters.</p>
    </main>
  );
}
