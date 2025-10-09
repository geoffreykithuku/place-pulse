import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Calendar,
  Award,
  Phone,
  Mail,
  MessageCircle,
  Filter,
  Grid,
  List,
  Share2,
} from "lucide-react";
import { mockScouts, mockProperties } from "../data/mockData";
import PropertyCard from "../components/ui/PropertyCard";
import BookingModal from "../components/ui/BookingModal";
import ShareModal from "../components/ui/ShareModal";
import Button from "../components/ui/Button";

const ScoutProfilePage: React.FC = () => {
  const { scoutId } = useParams<{ scoutId: string }>();
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [propertyToShare, setPropertyToShare] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  // Find the scout
  const scout = mockScouts.find((s) => s.id === scoutId);

  // Get properties listed by this scout
  const scoutProperties = mockProperties.filter(
    (property) => property.scoutId === scoutId
  );

  if (!scout) {
    return <Navigate to="/not-found" replace />;
  }

  // Filter properties based on filters
  const filteredProperties = scoutProperties.filter((property) => {
    const priceMatch =
      priceFilter === "all" ||
      (priceFilter === "under-20k" && property.price < 20000) ||
      (priceFilter === "20k-50k" &&
        property.price >= 20000 &&
        property.price <= 50000) ||
      (priceFilter === "over-50k" && property.price > 50000);

    const typeMatch = typeFilter === "all" || property.type === typeFilter;

    return priceMatch && typeMatch;
  });

  const handleBookProperty = (propertyId: string) => {
    setSelectedProperty(propertyId);
    setIsBookingModalOpen(true);
  };

  const handleShareProperty = (propertyId: string) => {
    setPropertyToShare(propertyId);
    setIsShareModalOpen(true);
  };

  const handleContactScout = () => {
    // In a real app, this would open a contact modal or redirect to messaging
    window.open(`tel:${scout.phone}`, "_self");
  };

  return (
    <div className="min-h-screen bg-safari-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-safari-600 to-safari-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-safari-300 flex items-center justify-center text-6xl font-bold text-safari-800">
                {scout.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              {scout.isVerified && (
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {scout.name}
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="text-xl font-semibold">{scout.rating}</span>
                <span className="text-safari-200">
                  ({scout.successfulMatches}+ matches)
                </span>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{scout.yearsExperience} years experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{scout.specializations.join(", ")}</span>
                </div>
              </div>

              <p className="text-safari-100 text-lg mb-6 max-w-2xl">
                {scout.bio}
              </p>

              <div className="flex gap-4 justify-center md:justify-start">
                <Button
                  onClick={handleContactScout}
                  className="bg-white text-safari-800 hover:bg-safari-50"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Scout
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-safari-800"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scout Stats */}
      <div className="bg-white border-b border-safari-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-safari-800">
                {scoutProperties.length}
              </div>
              <div className="text-safari-600">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-safari-800">
                {scout.successfulMatches}+
              </div>
              <div className="text-safari-600">Successful Matches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-safari-800">
                {scout.yearsExperience}
              </div>
              <div className="text-safari-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-safari-800">
                {scout.areas.length}
              </div>
              <div className="text-safari-600">Areas Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Specializations & Areas */}
      <div className="bg-safari-50 border-b border-safari-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-safari-800 mb-4">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-2">
                {scout.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 bg-safari-600 text-white rounded-full text-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-safari-800 mb-4">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {scout.areas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-safari-200 text-safari-800 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-safari-800 mb-2">
              Properties by {scout.name.split(" ")[0]}
            </h2>
            <p className="text-safari-600">
              {filteredProperties.length} of {scoutProperties.length} properties
            </p>
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex bg-safari-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${
                  viewMode === "grid"
                    ? "bg-white text-safari-800 shadow-sm"
                    : "text-safari-600 hover:text-safari-800"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${
                  viewMode === "list"
                    ? "bg-white text-safari-800 shadow-sm"
                    : "text-safari-600 hover:text-safari-800"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 bg-white rounded-lg border border-safari-200">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-safari-600" />
            <span className="font-medium text-safari-800">Filters:</span>
          </div>

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-3 py-1 border border-safari-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-500"
          >
            <option value="all">All Prices</option>
            <option value="under-20k">Under KSh 20,000</option>
            <option value="20k-50k">KSh 20,000 - 50,000</option>
            <option value="over-50k">Over KSh 50,000</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-1 border border-safari-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-500"
          >
            <option value="all">All Types</option>
            <option value="bedsitter">Bedsitter</option>
            <option value="1br">1 Bedroom</option>
            <option value="2br">2 Bedroom</option>
            <option value="3br">3 Bedroom</option>
            <option value="4br+">4+ Bedroom</option>
          </select>
        </div>

        {/* Properties Grid/List */}
        {filteredProperties.length > 0 ? (
          <motion.div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
                onBook={() => handleBookProperty(property.id)}
                onShare={() => handleShareProperty(property.id)}
                layout={viewMode}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-semibold text-safari-800 mb-2">
              No properties match your filters
            </h3>
            <p className="text-safari-600 mb-6">
              Try adjusting your filters to see more properties from{" "}
              {scout.name.split(" ")[0]}.
            </p>
            <Button
              onClick={() => {
                setPriceFilter("all");
                setTypeFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false);
          setSelectedProperty(null);
        }}
        property={
          selectedProperty
            ? mockProperties.find((p) => p.id === selectedProperty)
            : undefined
        }
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => {
          setIsShareModalOpen(false);
          setPropertyToShare(null);
        }}
        property={
          propertyToShare
            ? mockProperties.find((p) => p.id === propertyToShare)
            : undefined
        }
      />
    </div>
  );
};

export default ScoutProfilePage;
