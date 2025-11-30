import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Award, CheckCircle, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Scouts - Verified House Hunters",
  description:
    "Browse verified house hunters across Kenya. Find trusted local scouts to help you discover your perfect home.",
  openGraph: {
    title: "Our Scouts | Spot A Crib",
    description: "Connect with verified house hunters in your area",
  },
};

// Mock data - replace with actual data fetching
const scouts = [
  {
    id: "1",
    slug: "john-kamau",
    name: "John Kamau",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    rating: 4.9,
    reviewCount: 127,
    tagline: "Expert in Nairobi Westlands & Parklands",
    location: "Nairobi",
    verified: true,
    featured: true,
    propertyCount: 24,
    successfulPlacements: 89,
    specialties: ["Apartments", "Family Homes", "Student Housing"],
  },
  {
    id: "2",
    slug: "mary-wanjiku",
    name: "Mary Wanjiku",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    rating: 5.0,
    reviewCount: 203,
    tagline: "Luxury Properties in Karen & Runda",
    location: "Nairobi",
    verified: true,
    featured: true,
    propertyCount: 18,
    successfulPlacements: 156,
    specialties: ["Luxury Homes", "Gated Communities"],
  },
  {
    id: "3",
    slug: "david-ochieng",
    name: "David Ochieng",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    rating: 4.8,
    reviewCount: 95,
    tagline: "Affordable Housing Specialist - Eastleigh & South B",
    location: "Nairobi",
    verified: true,
    featured: false,
    propertyCount: 32,
    successfulPlacements: 73,
    specialties: ["Budget-Friendly", "Bedsitters", "Studio Apartments"],
  },
  {
    id: "4",
    slug: "faith-akinyi",
    name: "Faith Akinyi",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    rating: 4.7,
    reviewCount: 68,
    tagline: "Kilimani & Lavington Property Expert",
    location: "Nairobi",
    verified: true,
    featured: false,
    propertyCount: 21,
    successfulPlacements: 54,
    specialties: ["Modern Apartments", "Co-working Spaces"],
  },
  {
    id: "5",
    slug: "peter-mwangi",
    name: "Peter Mwangi",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    rating: 4.9,
    reviewCount: 142,
    tagline: "Your Gateway to Thika & Ruiru",
    location: "Kiambu",
    verified: true,
    featured: false,
    propertyCount: 28,
    successfulPlacements: 98,
    specialties: ["Gated Communities", "Family Homes", "Townhouses"],
  },
  {
    id: "6",
    slug: "grace-njeri",
    name: "Grace Njeri",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    rating: 4.6,
    reviewCount: 51,
    tagline: "Kasarani & Roysambu Specialist",
    location: "Nairobi",
    verified: true,
    featured: false,
    propertyCount: 19,
    successfulPlacements: 42,
    specialties: ["Student Housing", "Shared Apartments"],
  },
];

export default function ScoutsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold text-neutral-900 mb-4">
          Meet Our Verified House Scouts
        </h1>
        <p className="text-xl text-neutral-600 max-w-3xl">
          Connect with trusted local experts who know the neighborhoods inside out. Every scout is
          verified and rated by real clients.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 bg-safari-50 rounded-xl p-6 border border-safari-200">
        <div className="text-center">
          <div className="text-3xl font-bold text-safari-700 mb-1">{scouts.length}+</div>
          <div className="text-sm text-neutral-600">Active Scouts</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-safari-700 mb-1">4.8</div>
          <div className="text-sm text-neutral-600">Average Rating</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-safari-700 mb-1">
            {scouts.reduce((sum, s) => sum + s.propertyCount, 0)}+
          </div>
          <div className="text-sm text-neutral-600">Active Listings</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-safari-700 mb-1">
            {scouts.reduce((sum, s) => sum + s.successfulPlacements, 0)}+
          </div>
          <div className="text-sm text-neutral-600">Successful Placements</div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="mb-8 bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search scouts by name or location..."
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-500 focus:border-transparent"
            />
          </div>

          {/* Location Filter */}
          <select className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-500 focus:border-transparent">
            <option>All Locations</option>
            <option>Nairobi</option>
            <option>Kiambu</option>
            <option>Mombasa</option>
            <option>Kisumu</option>
          </select>

          {/* Sort */}
          <select className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-500 focus:border-transparent">
            <option>Top Rated</option>
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Most Properties</option>
          </select>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-sm text-neutral-600">Filter by specialty:</span>
          <button className="px-3 py-1 bg-neutral-100 hover:bg-safari-100 hover:text-safari-700 rounded-full text-sm transition-colors">
            Luxury Homes
          </button>
          <button className="px-3 py-1 bg-neutral-100 hover:bg-safari-100 hover:text-safari-700 rounded-full text-sm transition-colors">
            Student Housing
          </button>
          <button className="px-3 py-1 bg-neutral-100 hover:bg-safari-100 hover:text-safari-700 rounded-full text-sm transition-colors">
            Budget-Friendly
          </button>
          <button className="px-3 py-1 bg-neutral-100 hover:bg-safari-100 hover:text-safari-700 rounded-full text-sm transition-colors">
            Family Homes
          </button>
        </div>
      </div>

      {/* Featured Scouts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
          <Award className="w-6 h-6 text-safari-600 mr-2" />
          Featured Scouts
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {scouts
            .filter((scout) => scout.featured)
            .map((scout) => (
              <div
                key={scout.id}
                className="bg-white rounded-xl shadow-sm border-2 border-safari-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Photo */}
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                    <Image src={scout.photo} alt={scout.name} fill className="object-cover" />
                    {scout.verified && (
                      <div className="absolute top-3 right-3 bg-safari-600 text-white p-2 rounded-full shadow-lg">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-neutral-900 mb-1">{scout.name}</h3>
                      <div className="flex items-center mb-3">
                        <Star className="w-4 h-4 text-safari-600 fill-safari-600 mr-1" />
                        <span className="text-sm font-semibold text-neutral-900">
                          {scout.rating}
                        </span>
                        <span className="text-sm text-neutral-500 ml-1">
                          ({scout.reviewCount} reviews)
                        </span>
                      </div>
                    </div>

                    <p className="text-neutral-600 mb-3 text-sm">{scout.tagline}</p>

                    <div className="flex items-center text-sm text-neutral-500 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {scout.location}
                      <span className="mx-2">•</span>
                      {scout.propertyCount} listings
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {scout.specialties.slice(0, 3).map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2 py-1 bg-safari-50 text-safari-700 text-xs rounded-full border border-safari-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Stats & CTA */}
                    <div className="mt-auto pt-4 border-t border-neutral-200 flex items-center justify-between">
                      <div className="text-xs text-neutral-600">
                        <span className="font-semibold text-neutral-900">
                          {scout.successfulPlacements}
                        </span>{" "}
                        placements
                      </div>
                      <Link
                        href={`/scouts/${scout.slug}`}
                        className="inline-flex items-center bg-safari-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-safari-700 transition-colors"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* All Scouts Grid */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">All Scouts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scouts.map((scout) => (
            <div
              key={scout.id}
              className="bg-white rounded-xl shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <Image src={scout.photo} alt={scout.name} fill className="object-cover" />
                {scout.verified && (
                  <div className="absolute top-3 right-3 bg-safari-600 text-white p-2 rounded-full shadow-lg">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                )}
                {scout.featured && (
                  <div className="absolute top-3 left-3 bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Award className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">{scout.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-safari-600 fill-safari-600 mr-1" />
                    <span className="text-sm font-semibold text-neutral-900">{scout.rating}</span>
                    <span className="text-xs text-neutral-500 ml-1">({scout.reviewCount})</span>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 mb-3 line-clamp-2">{scout.tagline}</p>

                <div className="flex items-center text-sm text-neutral-500 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {scout.location}
                  <span className="mx-2">•</span>
                  {scout.propertyCount} listings
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {scout.specialties.slice(0, 2).map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-safari-50 text-safari-700 text-xs rounded-full border border-safari-200"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Stats & CTA */}
                <div className="pt-4 border-t border-neutral-200">
                  <div className="flex justify-between items-center text-xs text-neutral-600 mb-3">
                    <span>{scout.reviewCount} reviews</span>
                    <span>{scout.successfulPlacements} placements</span>
                  </div>
                  <Link
                    href={`/scouts/${scout.slug}`}
                    className="block w-full text-center bg-safari-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-safari-700 transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-safari-600 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Want to Become a Scout?</h2>
        <p className="text-safari-100 text-lg mb-6 max-w-2xl mx-auto">
          Join our community of verified house hunters and start earning by helping renters find
          their perfect homes.
        </p>
        <Link
          href="/hunter-signup"
          className="inline-block bg-white text-safari-700 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
        >
          Join as a Scout
        </Link>
      </div>
    </main>
  );
}
