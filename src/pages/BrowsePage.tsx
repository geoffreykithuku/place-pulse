import { SEOHead } from "../hooks/useSEO";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import Button from "../components/ui/Button";
import PropertyCard from "../components/ui/PropertyCard";
import Card from "../components/ui/Card";
import BookingModal from "../components/ui/BookingModal";
import ShareModal from "../components/ui/ShareModal";
import { mockProperties, kenyanAreas, propertyTypes } from "../data/mockData";

const BrowsePage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [showFilters, setShowFilters] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [propertyToShare, setPropertyToShare] = useState<any>(null);

  // Filter and search logic
  const filteredProperties = useMemo(() => {
    let results = mockProperties.filter((property) => {
      // Text search
      if (query) {
        const searchText =
          `${property.title} ${property.location} ${property.description}`.toLowerCase();
        if (!searchText.includes(query.toLowerCase())) {
          return false;
        }
      }

      // Area filter
      if (selectedArea && !property.location.includes(selectedArea)) {
        return false;
      }

      // Property type filter
      if (selectedType && property.type !== selectedType) {
        return false;
      }

      // Price range filter
      if (minPrice && property.price < parseInt(minPrice)) {
        return false;
      }
      if (maxPrice && property.price > parseInt(maxPrice)) {
        return false;
      }

      return true;
    });

    // Sort results
    switch (sortBy) {
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
  }, [query, selectedArea, selectedType, minPrice, maxPrice, sortBy]);

  const handleReset = () => {
    setQuery("");
    setSelectedArea("");
    setSelectedType("");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("recent");
  };

  const handleViewProperty = (id: string) => {
    navigate(`/property/${id}`);
  };

  const handleBookViewing = (id: string) => {
    const property = mockProperties.find((p) => p.id === id);
    if (property) {
      setSelectedProperty(property);
      setIsBookingModalOpen(true);
    }
  };

  const handleBookingConfirm = (bookingData: any) => {
    console.log("Booking confirmed:", bookingData);
    // TODO: Send booking data to backend
    alert(
      `Booking confirmed for ${bookingData.date} at ${bookingData.time}. You will receive payment instructions via SMS.`
    );
    setIsBookingModalOpen(false);
    setSelectedProperty(null);
  };

  const handleShare = (id: string) => {
    const property = mockProperties.find((p) => p.id === id);
    if (property) {
      setPropertyToShare(property);
      setIsShareModalOpen(true);
    }
  };

  return (
    <div>
      <SEOHead
        title="Browse Houses"
        description="Search verified rental listings across Kenya. Filter by location, price, type, and amenities."
        keywords={["browse houses", "rentals Kenya", "search houses"]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold mb-4">
            Browse Houses
          </h1>
          <p className="text-neutral-600">
            Find verified listings across Kenya. Use the filters to narrow down
            your search.
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Main Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by area, property type, or keyword..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex gap-3">
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Areas</option>
                {kenyanAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Types</option>
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>

                <input
                  type="number"
                  placeholder="Min Price (KSh)"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />

                <input
                  type="number"
                  placeholder="Max Price (KSh)"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="recent">Most Recent</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <Button variant="outline" onClick={handleReset} size="sm">
                  Reset Filters
                </Button>
                <span className="text-sm text-neutral-600">
                  {filteredProperties.length} properties found
                </span>
              </div>
            </div>
          )}
        </Card>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              onViewProperty={handleViewProperty}
              onBookViewing={handleBookViewing}
              onShare={handleShare}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <Card className="text-center py-12">
            <div className="text-neutral-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No properties found
            </h3>
            <p className="text-neutral-600 mb-4">
              Try adjusting your search criteria or browse all available
              properties.
            </p>
            <Button onClick={handleReset} variant="outline">
              Clear All Filters
            </Button>
          </Card>
        )}
      </main>

      {/* Booking Modal */}
      {selectedProperty && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => {
            setIsBookingModalOpen(false);
            setSelectedProperty(null);
          }}
          property={{
            id: selectedProperty.id,
            title: selectedProperty.title,
            location: selectedProperty.location,
            price: selectedProperty.price,
            hunterName: selectedProperty.hunterName,
          }}
          onBookingConfirm={handleBookingConfirm}
        />
      )}

      {/* Share Modal */}
      {propertyToShare && (
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => {
            setIsShareModalOpen(false);
            setPropertyToShare(null);
          }}
          property={{
            id: propertyToShare.id,
            title: propertyToShare.title,
            location: propertyToShare.location,
            price: propertyToShare.price,
            image: propertyToShare.images[0] || "/placeholder-house.jpg",
          }}
        />
      )}
    </div>
  );
};

export default BrowsePage;
