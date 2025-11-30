import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPropertyById, getProperties } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Shield, Eye, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((property) => ({
    id: property.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const property = await getPropertyById(params.id);

  if (!property) {
    return {
      title: "Property Not Found",
    };
  }

  return {
    title: property.title,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: property.images.map((img) => ({
        url: img,
        alt: property.title,
      })),
    },
  };
}

export default async function PropertyDetailsPage({ params }: PageProps) {
  const property = await getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">{property.title}</h1>
          <div className="flex items-center gap-4 text-neutral-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{property.location}</span>
            </div>
            {property.isVerified && (
              <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                Verified
              </div>
            )}
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {property.images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className={`relative ${
                index === 0 ? "md:col-span-2 h-96" : "h-64"
              } rounded-lg overflow-hidden bg-neutral-200`}
            >
              <Image
                src={image}
                alt={`${property.title} - Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <p className="text-4xl font-bold text-safari-600">
                KES {property.price.toLocaleString()}
                <span className="text-lg font-normal text-neutral-500">/month</span>
              </p>
            </div>

            {/* Details */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-bold mb-4">Property Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-neutral-500" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-neutral-500" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-neutral-500" />
                  <span>{property.viewsToday} views today</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-neutral-500" />
                  <span>Posted {property.postedDays} days ago</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-neutral-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            {property.amenities.length > 0 && (
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <span key={amenity} className="px-4 py-2 bg-neutral-100 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Scout Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-bold mb-4">Listed by</h3>
              <Link
                href={`/hunter/${property.scoutId}`}
                className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
                  <span className="text-lg font-medium">{property.hunterName[0]}</span>
                </div>
                <div>
                  <p className="font-medium">{property.hunterName}</p>
                  <p className="text-sm text-neutral-500">★ {property.hunterRating}</p>
                </div>
              </Link>
              <Button fullWidth>Contact Scout</Button>
            </div>

            {/* Book Viewing */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-bold mb-4">Interested?</h3>
              <Button fullWidth variant="primary" size="lg">
                Book a Viewing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
