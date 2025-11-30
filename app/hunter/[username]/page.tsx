import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockScouts, mockProperties } from "@/src/data/mockData";

// Generate static paths for all scouts
export async function generateStaticParams() {
  return mockScouts.map((scout) => ({
    username: scout.id,
  }));
}

// Generate metadata for each scout
export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  const scout = mockScouts.find((s) => s.id === params.username);

  if (!scout) {
    return {
      title: "Scout Not Found",
    };
  }

  return {
    title: `${scout.name} - Verified Scout`,
    description: scout.bio,
    openGraph: {
      title: `${scout.name} - Verified Scout`,
      description: scout.bio,
      type: "profile",
    },
  };
}

export default function HunterProfilePage({ params }: { params: { username: string } }) {
  const scout = mockScouts.find((s) => s.id === params.username);

  if (!scout) {
    notFound();
  }

  const scoutProperties = mockProperties.filter((p) => p.scoutId === scout.id);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold mb-4">{scout.name}</h1>
        <p className="text-lg text-neutral-600 mb-4">Rating: {scout.rating}★</p>
        <p className="text-neutral-600 mb-4">{scoutProperties.length} properties listed</p>
        <p className="text-neutral-700">{scout.bio}</p>
      </div>
    </main>
  );
}
