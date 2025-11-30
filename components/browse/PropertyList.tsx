"use client";

import { useMemo } from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import type { Property } from "@/lib/types";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface PropertyListProps {
  properties: Property[];
  searchParams: {
    query?: string;
    area?: string;
    type?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
  };
}

export default function PropertyList({ properties, searchParams }: PropertyListProps) {
  const { query, area, type, minPrice, maxPrice, sort = "recent" } = searchParams;

  const filteredProperties = useMemo(() => {
    let results = [...properties];

    // Text search
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(lowerQuery) ||
          p.location.toLowerCase().includes(lowerQuery) ||
          p.description.toLowerCase().includes(lowerQuery)
      );
    }

    // Area filter
    if (area) {
      results = results.filter((p) => p.location.includes(area));
    }

    // Type filter
    if (type) {
      results = results.filter((p) => p.type === type);
    }

    // Price range
    if (minPrice) {
      results = results.filter((p) => p.price >= parseInt(minPrice));
    }
    if (maxPrice) {
      results = results.filter((p) => p.price <= parseInt(maxPrice));
    }

    // Sort
    switch (sort) {
      case "price-low":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        results.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        results.sort((a, b) => b.viewsToday - a.viewsToday);
        break;
      case "recent":
      default:
        results.sort((a, b) => a.postedDays - b.postedDays);
        break;
    }

    return results;
  }, [properties, query, area, type, minPrice, maxPrice, sort]);

  if (filteredProperties.length === 0) {
    return (
      <Card className="text-center py-16">
        <p className="text-neutral-600 mb-4">No properties match your search criteria.</p>
        <Button variant="outline" onClick={() => (window.location.href = "/browse")}>
          Clear Filters
        </Button>
      </Card>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <p className="text-neutral-600">
          <span className="font-semibold text-neutral-900">{filteredProperties.length}</span>{" "}
          properties found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </>
  );
}
