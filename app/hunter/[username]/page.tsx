'use client';

import { useParams } from 'next/navigation';
import { mockScouts, mockProperties } from '../../../src/data/mockData';

export default function HunterProfilePage() {
  const params = useParams();
  const username = params?.username as string;
  const scout = mockScouts.find((s) => s.id === username);

  if (!scout) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-4">Scout Not Found</h1>
        <p className="text-neutral-600">The scout you're looking for doesn't exist.</p>
      </main>
    );
  }

  const scoutProperties = mockProperties.filter((p) => p.hunterName === scout.name);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold mb-4">{scout.name}</h1>
        <p className="text-lg text-neutral-600 mb-4">Rating: {scout.rating}★</p>
        <p className="text-neutral-600">{scoutProperties.length} properties listed</p>
      </div>
    </main>
  );
}
