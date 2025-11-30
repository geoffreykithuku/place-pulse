import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  CheckCircle,
  Award,
  TrendingUp,
  Users,
  Home,
  Calendar,
  Share2,
  Send,
} from "lucide-react";
import { notFound } from "next/navigation";

// Mock data - replace with actual data fetching
const scoutsData: Record<string, any> = {
  "john-kamau": {
    id: "1",
    slug: "john-kamau",
    name: "John Kamau",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    rating: 4.9,
    reviewCount: 127,
    tagline: "Expert in Nairobi Westlands & Parklands",
    location: "Nairobi",
    verified: true,
    featured: true,
    joinedDate: "January 2023",
    responseTime: "< 1 hour",
    languages: ["English", "Swahili", "Kikuyu"],
    bio: "With over 5 years of experience in the Nairobi real estate market, I specialize in finding the perfect homes for families, young professionals, and students in Westlands, Parklands, and surrounding areas. My deep knowledge of these neighborhoods, combined with a commitment to excellent service, has helped over 150 clients find their dream homes. I believe in transparency, punctuality, and going the extra mile to ensure my clients are completely satisfied.",
    specialties: ["Apartments", "Family Homes", "Student Housing", "Modern Living"],
    areasOfExpertise: [
      "Westlands",
      "Parklands",
      "Highridge",
      "Lavington",
      "Kilimani",
      "Kileleshwa",
    ],
    stats: {
      properties: 24,
      successfulPlacements: 89,
      activeClients: 12,
      responseRate: 98,
    },
    contact: {
      phone: "+254 712 345 678",
      email: "john.kamau@spotacrib.com",
      whatsapp: "+254712345678",
      instagram: "@johnkamau_properties",
    },
    reviews: [
      {
        id: 1,
        clientName: "Sarah Mwende",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "John was incredibly helpful and professional. He showed me several apartments in Westlands and was very patient with all my questions. Found my perfect 2-bedroom in just 3 days!",
        verified: true,
      },
      {
        id: 2,
        clientName: "Michael Otieno",
        rating: 5,
        date: "1 month ago",
        comment:
          "Outstanding service! John knows Parklands like the back of his hand. He understood exactly what I was looking for and found me a great deal. Highly recommend!",
        verified: true,
      },
      {
        id: 3,
        clientName: "Grace Wangari",
        rating: 4,
        date: "2 months ago",
        comment:
          "Very knowledgeable about the area and responsive to messages. Helped me find a nice studio apartment within my budget. Would definitely work with him again.",
        verified: true,
      },
    ],
    properties: [
      {
        id: "1",
        title: "Modern 2BR Apartment - Westlands",
        location: "Westlands, Nairobi",
        price: "KSh 45,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      },
      {
        id: "2",
        title: "Spacious 3BR Family Home - Parklands",
        location: "Parklands, Nairobi",
        price: "KSh 65,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      },
      {
        id: "3",
        title: "Cozy Bedsitter - Highridge",
        location: "Highridge, Nairobi",
        price: "KSh 18,000",
        bedrooms: 1,
        bathrooms: 1,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      },
      {
        id: "4",
        title: "Luxury 4BR Penthouse - Kilimani",
        location: "Kilimani, Nairobi",
        price: "KSh 120,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      },
    ],
  },
  "mary-wanjiku": {
    id: "2",
    slug: "mary-wanjiku",
    name: "Mary Wanjiku",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    rating: 5.0,
    reviewCount: 203,
    tagline: "Luxury Properties in Karen & Runda",
    location: "Nairobi",
    verified: true,
    featured: true,
    joinedDate: "March 2022",
    responseTime: "< 30 min",
    languages: ["English", "Swahili"],
    bio: "Luxury property specialist with a passion for connecting discerning clients with premium homes in Karen, Runda, and surrounding upscale neighborhoods. With a background in hospitality and real estate, I understand the importance of attention to detail and personalized service. I work exclusively with high-end properties and pride myself on discretion, professionalism, and delivering exceptional results.",
    specialties: ["Luxury Homes", "Gated Communities", "Executive Rentals"],
    areasOfExpertise: ["Karen", "Runda", "Kitisuru", "Muthaiga", "Spring Valley"],
    stats: {
      properties: 18,
      successfulPlacements: 156,
      activeClients: 8,
      responseRate: 100,
    },
    contact: {
      phone: "+254 722 456 789",
      email: "mary.wanjiku@spotacrib.com",
      whatsapp: "+254722456789",
      instagram: "@marywanjiku_luxury",
    },
    reviews: [
      {
        id: 1,
        clientName: "David Kimani",
        rating: 5,
        date: "1 week ago",
        comment:
          "Mary is exceptional! She found us a beautiful 5-bedroom home in Karen that exceeded our expectations. Very professional and knowledgeable about luxury properties.",
        verified: true,
      },
      {
        id: 2,
        clientName: "Jennifer Achieng",
        rating: 5,
        date: "3 weeks ago",
        comment:
          "Outstanding service from start to finish. Mary understood exactly what we needed and delivered. Her network in the luxury market is impressive.",
        verified: true,
      },
    ],
    properties: [
      {
        id: "5",
        title: "Stunning 5BR Villa - Karen",
        location: "Karen, Nairobi",
        price: "KSh 250,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      },
      {
        id: "6",
        title: "Executive 4BR Townhouse - Runda",
        location: "Runda, Nairobi",
        price: "KSh 180,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      },
    ],
  },
};

// Generate static params for all scouts
export async function generateStaticParams() {
  return Object.keys(scoutsData).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each scout
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const scout = scoutsData[params.slug];

  if (!scout) {
    return {
      title: "Scout Not Found",
    };
  }

  return {
    title: `${scout.name} - Verified House Hunter`,
    description: `${scout.tagline}. Verified scout with ${scout.rating} rating and ${scout.reviewCount} reviews. Contact for property viewings in ${scout.location}.`,
    openGraph: {
      title: `${scout.name} | Spot A Crib`,
      description: scout.tagline,
      images: [scout.photo],
    },
  };
}

export default function ScoutProfilePage({ params }: { params: { slug: string } }) {
  const scout = scoutsData[params.slug];

  if (!scout) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: scout.name,
    image: scout.photo,
    jobTitle: "House Hunter",
    description: scout.bio,
    telephone: scout.contact.phone,
    email: scout.contact.email,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: scout.rating,
      reviewCount: scout.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-safari-50 via-white to-neutral-50 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
            <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
              {/* Left Column - Profile Photo */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative w-64 h-64 lg:w-full lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white">
                  <Image
                    src={scout.photo}
                    alt={scout.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {scout.verified && (
                    <div className="absolute top-4 right-4 bg-safari-600 text-white p-2.5 rounded-full shadow-lg">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  )}
                </div>

                {/* Quick Stats - Mobile/Tablet */}
                <div className="lg:hidden mt-6 w-full grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-neutral-200">
                    <div className="text-2xl font-bold text-safari-700">
                      {scout.stats.properties}
                    </div>
                    <div className="text-xs text-neutral-600 mt-1">Active Listings</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-neutral-200">
                    <div className="text-2xl font-bold text-safari-700">
                      {scout.stats.successfulPlacements}
                    </div>
                    <div className="text-xs text-neutral-600 mt-1">Placements</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Scout Info */}
              <div className="flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {scout.verified && (
                        <span className="inline-flex items-center bg-safari-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                          Verified
                        </span>
                      )}
                      {scout.featured && (
                        <span className="inline-flex items-center bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          <Award className="w-3.5 h-3.5 mr-1.5" />
                          Featured
                        </span>
                      )}
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 leading-tight">
                      {scout.name}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 mb-4">{scout.tagline}</p>
                  </div>

                  <button className="p-2 hover:bg-white rounded-lg transition-colors ml-4">
                    <Share2 className="w-5 h-5 text-neutral-600" />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-neutral-200">
                  <div className="flex items-center bg-white px-5 py-3 rounded-xl shadow-sm border border-neutral-200">
                    <Star className="w-6 h-6 text-safari-600 fill-safari-600 mr-2" />
                    <div>
                      <div className="font-bold text-2xl text-neutral-900">{scout.rating}</div>
                      <div className="text-xs text-neutral-500">{scout.reviewCount} reviews</div>
                    </div>
                  </div>

                  <div className="hidden lg:grid grid-cols-2 gap-4 flex-1">
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-neutral-200">
                      <div className="text-xl font-bold text-safari-700">
                        {scout.stats.properties}
                      </div>
                      <div className="text-xs text-neutral-600">Listings</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-neutral-200">
                      <div className="text-xl font-bold text-safari-700">
                        {scout.stats.successfulPlacements}
                      </div>
                      <div className="text-xs text-neutral-600">Placements</div>
                    </div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1.5 text-neutral-400" />
                    <span className="font-medium">{scout.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5 text-neutral-400" />
                    Joined {scout.joinedDate}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1.5 text-neutral-400" />
                    <span className="text-safari-700 font-semibold">
                      Responds in {scout.responseTime}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${scout.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-safari-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-safari-700 transition-all shadow-sm hover:shadow-md"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Me
                  </a>
                  <a
                    href={`tel:${scout.contact.phone}`}
                    className="inline-flex items-center bg-neutral-900 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                  <a
                    href={`mailto:${scout.contact.email}`}
                    className="inline-flex items-center bg-white border-2 border-neutral-300 text-neutral-700 px-6 py-3.5 rounded-xl font-semibold hover:border-safari-400 hover:text-safari-700 transition-all shadow-sm"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Stats & Achievements</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-safari-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Home className="w-6 h-6 text-safari-700" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900">
                      {scout.stats.properties}
                    </div>
                    <div className="text-sm text-neutral-600">Active Listings</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-safari-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-6 h-6 text-safari-700" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900">
                      {scout.stats.successfulPlacements}
                    </div>
                    <div className="text-sm text-neutral-600">Successful Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-safari-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-safari-700" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900">
                      {scout.stats.activeClients}
                    </div>
                    <div className="text-sm text-neutral-600">Active Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-safari-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-6 h-6 text-safari-700" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900">
                      {scout.stats.responseRate}%
                    </div>
                    <div className="text-sm text-neutral-600">Response Rate</div>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">About Me</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">{scout.bio}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {scout.specialties.map((specialty: string) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 bg-safari-100 text-safari-700 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-3">Areas I Cover</h3>
                    <div className="flex flex-wrap gap-2">
                      {scout.areasOfExpertise.map((area: string) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-3">Languages</h3>
                    <p className="text-neutral-700">{scout.languages.join(", ")}</p>
                  </div>
                </div>
              </div>

              {/* Properties */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Current Listings ({scout.properties.length})
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {scout.properties.map((property: any) => (
                    <Link
                      key={property.id}
                      href={`/property/${property.id}`}
                      className="block group"
                    >
                      <div className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-48">
                          <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-neutral-900 mb-2">{property.title}</h3>
                          <div className="flex items-center text-sm text-neutral-600 mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            {property.location}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-safari-700">
                              {property.price}
                            </span>
                            <span className="text-sm text-neutral-600">
                              {property.bedrooms} bed • {property.bathrooms} bath
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Client Reviews ({scout.reviewCount})
                </h2>
                <div className="space-y-6">
                  {scout.reviews.map((review: any) => (
                    <div key={review.id} className="border-b border-neutral-200 pb-6 last:border-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-neutral-900">{review.clientName}</h4>
                            {review.verified && <CheckCircle className="w-4 h-4 text-safari-600" />}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-safari-600 fill-safari-600" />
                              ))}
                            </div>
                            <span className="text-sm text-neutral-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-700">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="#"
                  className="mt-6 inline-block text-safari-700 font-semibold hover:text-safari-800"
                >
                  View all {scout.reviewCount} reviews →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card (Sticky) */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 lg:sticky lg:top-20">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Contact {scout.name}</h3>

                <div className="space-y-4 mb-6">
                  <a
                    href={`tel:${scout.contact.phone}`}
                    className="flex items-center text-neutral-700 hover:text-safari-700 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-3 text-neutral-400" />
                    <span>{scout.contact.phone}</span>
                  </a>

                  <a
                    href={`mailto:${scout.contact.email}`}
                    className="flex items-center text-neutral-700 hover:text-safari-700 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3 text-neutral-400" />
                    <span className="break-all">{scout.contact.email}</span>
                  </a>
                </div>

                {/* Social Media */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">Connect</h4>
                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/${scout.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://instagram.com/${scout.contact.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-pink-500 text-white rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Message Form */}
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-500"
                  />
                  <textarea
                    rows={4}
                    placeholder="Message (e.g., I'm looking for a 2BR in Westlands...)"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-safari-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-safari-600 text-white py-3 rounded-lg font-semibold hover:bg-safari-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>

                <p className="text-xs text-neutral-500 mt-4 text-center">
                  Typically responds in {scout.responseTime}
                </p>
              </div>

              {/* Trust Badge */}
              <div className="bg-safari-50 rounded-xl border border-safari-200 p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-safari-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-2">Verified Scout</h4>
                  <p className="text-sm text-neutral-700">
                    This scout has been verified by Spot A Crib. ID checked, references verified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
