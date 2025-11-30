"use client";

import { Heart, MapPin, Eye, Calendar, Shield, Share2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import Card from "./Card";
import type { Property } from "../../data/mockData";

interface PropertyCardProps extends Property {
  onViewProperty?: (id: string) => void;
  onBookViewing?: (id: string) => void;
  onBook?: (id: string) => void;
  onShare?: (id: string) => void;
  layout?: "grid" | "list";
}

const PropertyCard = (props: PropertyCardProps) => {
  const {
    id,
    title,
    price,
    location,
    bedrooms,
    bathrooms,
    images,
    hunterName,
    hunterRating,
    isVerified,
    viewsToday,
    postedDays,
    scoutId,
    onViewProperty,
    onBookViewing,
    onBook,
    onShare,
    layout: _layout = "grid",
  } = props;

  const router = useRouter();
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScoutClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/hunter/${scoutId}`);
  };

  const handleBooking = () => {
    if (onBook) {
      onBook(id);
    } else if (onBookViewing) {
      onBookViewing(id);
    }
  };

  return (
    <Card hover className="overflow-hidden group" data-test="property-card">
      {/* Image Gallery */}
      <div className="relative h-48 -m-6 mb-4 overflow-hidden">
        <img
          src={images[currentImageIndex] || "/placeholder-house.jpg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Image Navigation Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex space-x-2">
          {onShare && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onShare(id);
              }}
              className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <Share2 className="w-4 h-4 text-neutral-600" />
            </button>
          )}
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorited ? "fill-red-500 text-red-500" : "text-neutral-600"
              }`}
            />
          </button>
        </div>

        {/* Verification Badge */}
        {isVerified && (
          <div
            data-test="verified-badge"
            className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1"
          >
            <Shield className="w-3 h-3" />
            <span>Verified</span>
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg">
          <span data-test="property-price" className="font-bold text-primary-600">
            KSh {price.toLocaleString()}
          </span>
          <span className="text-xs text-neutral-500 ml-1">/month</span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Title and Location */}
        <div>
          <h3
            data-test="property-title"
            className="font-semibold text-lg text-neutral-900 group-hover:text-primary-600 transition-colors"
          >
            {title}
          </h3>
          <div className="flex items-center text-neutral-600 text-sm mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span data-test="property-location">{location}</span>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center space-x-4 text-sm text-neutral-600">
          <span>{bedrooms} beds</span>
          <span>•</span>
          <span>{bathrooms} baths</span>
          <span>•</span>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            {viewsToday} views today
          </div>
        </div>

        {/* Hunter Info */}
        <div className="flex items-center justify-between py-3 border-t border-neutral-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-semibold text-sm">{hunterName.charAt(0)}</span>
            </div>
            <div>
              <button
                data-test="hunter-link"
                onClick={handleScoutClick}
                className="font-medium text-sm text-safari-800 hover:text-safari-600 transition-colors cursor-pointer"
              >
                {hunterName}
              </button>
              <div className="flex items-center text-xs text-neutral-500">
                <span className="text-yellow-500 mr-1">★</span>
                {hunterRating} • Posted {postedDays}d ago
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          {onViewProperty && (
            <Button
              data-test="view-property"
              variant="outline"
              size="sm"
              onClick={() => onViewProperty(id)}
              className="flex-1"
            >
              View Details
            </Button>
          )}
          <Button data-test="book-viewing" size="sm" onClick={handleBooking} className="flex-1">
            <Calendar className="w-4 h-4 mr-1" />
            Book Viewing
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
