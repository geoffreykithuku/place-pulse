"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { kenyanAreas, propertyTypes } from "@/lib/data";

export default function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [selectedArea, setSelectedArea] = useState(searchParams.get("area") || "");
  const [selectedType, setSelectedType] = useState(searchParams.get("type") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    if (selectedArea) params.set("area", selectedArea);
    if (selectedType) params.set("type", selectedType);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);

    router.push(`/browse?${params.toString()}`);
    setShowFilters(false);
  };

  const handleReset = () => {
    setQuery("");
    setSelectedArea("");
    setSelectedType("");
    setMinPrice("");
    setMaxPrice("");
    router.push("/browse");
  };

  return (
    <>
      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by location, property type..."
              className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applyFilters()}
            />
          </div>
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            Filters
          </Button>
        </div>
      </Card>

      {showFilters && (
        <Card className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Area</label>
              <select
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent outline-none"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                <option value="">All Areas</option>
                {kenyanAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Property Type
              </label>
              <select
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent outline-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">All Types</option>
                {propertyTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Min Price (KES)
              </label>
              <input
                type="number"
                placeholder="10,000"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent outline-none"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Max Price (KES)
              </label>
              <input
                type="number"
                placeholder="100,000"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent outline-none"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-neutral-200">
            <Button variant="ghost" onClick={handleReset}>
              Reset Filters
            </Button>
            <Button onClick={applyFilters}>Apply Filters</Button>
          </div>
        </Card>
      )}
    </>
  );
}
