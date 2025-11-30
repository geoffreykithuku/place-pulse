import type { Metadata } from "next";
import { Suspense } from "react";
import PropertyList from "@/components/browse/PropertyList";
import SearchFilters from "@/components/browse/SearchFilters";
import { getProperties } from "@/lib/data";

export const metadata: Metadata = {
  title: "Browse Properties",
  description:
    "Browse available rental properties across Kenya. Find bedsitters, apartments, and family homes.",
  openGraph: {
    title: "Browse Properties | Spot A Crib",
    description: "Find your perfect rental home in Kenya",
  },
};

interface PageProps {
  searchParams: {
    query?: string;
    area?: string;
    type?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
  };
}

export default async function BrowsePage({ searchParams }: PageProps) {
  const properties = await getProperties();

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Browse Properties</h1>
          <p className="text-neutral-600">Find your perfect home from our curated listings</p>
        </div>

        {/* Filters */}
        <Suspense fallback={<div>Loading filters...</div>}>
          <SearchFilters />
        </Suspense>

        {/* Property List */}
        <Suspense fallback={<PropertyListSkeleton />}>
          <PropertyList properties={properties} searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

function PropertyListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
          <div className="bg-neutral-200 h-48 rounded mb-4"></div>
          <div className="bg-neutral-200 h-6 rounded mb-2"></div>
          <div className="bg-neutral-200 h-4 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
}
