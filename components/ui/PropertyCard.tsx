"use client";

import { Heart, MapPin, Eye, Calendar, Shield } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Card from "./Card";
import type { Property } from "@/lib/types";

interface PropertyCardProps extends Property {
  onBook?: (id: string) => void;
  onShare?: (id: string) => void;
}

export default function PropertyCard(props: PropertyCardProps) {
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
    onBook,
    onShare,
  } = props;

  const [isFavorited, setIsFavorited] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onBook) {
      onBook(id);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onShare) {
      onShare(id);
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <Link href={`/property/${id}`}>
      <Card hover className="overflow-hidden group h-full flex flex-col">
        {/* Image Gallery */}
        <div className="relative h-48 -m-6 mb-4 overflow-hidden bg-neutral-100">
          <Image
            src={images[currentImageIndex] || "/placeholder-house.jpg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Image Navigation Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={clsx(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  )}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className="absolute top-2 right-2 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
            aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={clsx(
                "w-5 h-5 transition-colors",
                isFavorited ? "fill-red-500 text-red-500" : "text-neutral-600"
              )}
            />
          </button>

          {/* Verified Badge */}
          {isVerified && (
            <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-green-500 text-white text-xs font-medium flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Title & Price */}
          <div className="mb-3">
            <h3 className="font-semibold text-lg text-neutral-900 line-clamp-2 group-hover:text-safari-600 transition-colors">
              {title}
            </h3>
            <p className="text-2xl font-bold text-safari-600 mt-1">
              KES {price.toLocaleString()}
              <span className="text-sm font-normal text-neutral-500">/month</span>
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-neutral-600 mb-3">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>

          {/* Property Details */}
          <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4 pb-4 border-b">
            <span>{bedrooms} Bed</span>
            <span>•</span>
            <span>{bathrooms} Bath</span>
          </div>

          {/* Scout Info */}
          <Link
            href={`/hunter/${scoutId}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
              <span className="text-sm font-medium">{hunterName[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-neutral-900 truncate">{hunterName}</p>
              <div className="flex items-center gap-1">
                <span className="text-xs text-neutral-500">★ {hunterRating}</span>
              </div>
            </div>
          </Link>

          {/* Stats */}
          <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{viewsToday} views today</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{postedDays}d ago</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-auto">
            <Button variant="primary" size="sm" fullWidth onClick={handleBooking}>
              Book Viewing
            </Button>
            {onShare && (
              <Button variant="outline" size="sm" onClick={handleShare} aria-label="Share property">
                Share
              </Button>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}

function clsx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
