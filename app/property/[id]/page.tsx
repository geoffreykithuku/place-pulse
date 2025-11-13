'use client';

import { useParams } from 'next/navigation';
import { mockProperties } from '../../../src/data/mockData';

export default function PropertyDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <p className="text-neutral-600">The property you're looking for doesn't exist.</p>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div>
        <h1 className="text-3xl font-display font-bold mb-4">{property.title}</h1>
        <p className="text-lg text-neutral-600 mb-4">{property.location}</p>
        <div className="text-2xl font-bold text-primary-600">KSh {property.price.toLocaleString()}</div>
      </div>
    </main>
  );
}
