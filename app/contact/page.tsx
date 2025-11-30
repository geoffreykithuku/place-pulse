import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Spot A Crib for support and inquiries.",
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <h1 className="text-3xl font-display font-bold mb-4">Contact Us</h1>
      <p className="text-neutral-600">Get in touch with our team. We'd love to hear from you.</p>
    </main>
  );
}
