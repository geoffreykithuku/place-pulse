import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  Heart,
  MapPin,
  Bed,
  Bath,
  Calendar,
  Star,
  Shield,
  Eye,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Share2,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import BookingModal from "../components/ui/BookingModal";
import ShareModal from "../components/ui/ShareModal";
import { mockProperties } from "../data/mockData";

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Find the property by ID
  const property = mockProperties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">
            Property Not Found
          </h1>
          <p className="text-neutral-600 mb-6">
            The property you're looking for doesn't exist.
          </p>
          <Button onClick={() => router.push("/browse")}>Back to Browse</Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleBookViewing = () => {
    setIsBookingModalOpen(true);
  };

  const handleBookingConfirm = (bookingData: any) => {
    console.log("Booking confirmed:", bookingData);
    // TODO: Send booking data to backend
    // Show success message
    alert(
      `Booking confirmed for ${bookingData.date} at ${bookingData.time}. You will receive payment instructions via SMS.`
    );
  };

  const handleContactHunter = () => {
    console.log("Contact hunter for property:", id);
    // TODO: Open contact modal or navigate to contact page
  };

  return (
    <>
      <SEOHead
        title={`${property.title} - ${property.location} | Spot A Crib`}
        description={`${property.bedrooms} bedroom property in ${
          property.location
        } for KSh ${property.price.toLocaleString()}/month. Verified by ${
          property.hunterName
        }.`}
        keywords={[
          `${property.bedrooms} bedroom ${property.location}`,
          `rental ${property.location}`,
          `KSh ${property.price} rent`,
          property.location,
          "verified property kenya",
        ]}
      />

      <main className="min-h-screen pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-safari-600 hover:text-safari-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to results</span>
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <Card className="p-0 overflow-hidden">
                <div className="relative h-96 lg:h-[500px]">
                  <img
                    src={
                      property.images[currentImageIndex] ||
                      "/placeholder-house.jpg"
                    }
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Image Navigation */}
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {property.images.length}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={() => setIsShareModalOpen(true)}
                      className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                    >
                      <Share2 className="w-5 h-5 text-neutral-600" />
                    </button>
                    <button
                      onClick={() => setIsFavorited(!isFavorited)}
                      className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isFavorited
                            ? "fill-red-500 text-red-500"
                            : "text-neutral-600"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </Card>

              {/* Property Details */}
              <Card>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-neutral-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl lg:text-3xl font-bold text-safari-600">
                      KSh {property.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-neutral-500">per month</div>
                  </div>
                </div>

                {/* Property Features */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="w-5 h-5 text-safari-600" />
                    <span className="text-neutral-700">
                      {property.bedrooms} Bedroom
                      {property.bedrooms !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-5 h-5 text-safari-600" />
                    <span className="text-neutral-700">
                      {property.bathrooms} Bathroom
                      {property.bathrooms !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-safari-600" />
                    <span className="text-neutral-700">
                      {property.viewsToday} views today
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-safari-600" />
                    <span className="text-neutral-700">
                      {property.postedDays} days ago
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    Description
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {property.description ||
                      `Beautiful ${
                        property.bedrooms
                      } bedroom property located in ${
                        property.location
                      }. This well-maintained home offers comfortable living spaces and modern amenities. Perfect for ${
                        property.bedrooms === 1
                          ? "a single person or couple"
                          : "a family"
                      } looking for quality accommodation in a great location.`}
                  </p>
                </div>
              </Card>

              {/* Amenities */}
              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(
                    property.amenities || [
                      "Parking",
                      "Security",
                      "Water Supply",
                      "Electricity",
                      "Internet Ready",
                      "Spacious Rooms",
                    ]
                  ).map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-safari-600 rounded-full"></div>
                      <span className="text-neutral-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Hunter Info */}
              <Card>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-safari-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-safari-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Property Hunter
                  </h3>
                  <p className="text-safari-600 font-medium">
                    {property.hunterName}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">
                        {property.hunterRating}/5.0
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Status</span>
                    <div className="flex items-center space-x-1">
                      {property.isVerified && (
                        <>
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-green-600 font-medium">
                            Verified
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button onClick={handleBookViewing} fullWidth size="lg">
                    Book Viewing - KSh 200
                  </Button>
                  <Button
                    onClick={handleContactHunter}
                    variant="outline"
                    fullWidth
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Hunter
                  </Button>
                </div>
              </Card>

              {/* Quick Info */}
              <Card>
                <h3 className="font-semibold text-neutral-900 mb-4">
                  Quick Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Property Type</span>
                    <span className="font-medium">
                      {property.type || "Apartment"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Deposit</span>
                    <span className="font-medium">
                      KSh {property.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Availability</span>
                    <span className="font-medium text-green-600">
                      Available Now
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Viewing Fee</span>
                    <span className="font-medium">KSh 200</span>
                  </div>
                </div>
              </Card>

              {/* Contact Info */}
              <Card>
                <h3 className="font-semibold text-neutral-900 mb-4">
                  Need Help?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-safari-600" />
                    <div>
                      <p className="font-medium">Call Support</p>
                      <p className="text-sm text-neutral-600">
                        +254 XXX XXX XXX
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-safari-600" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-neutral-600">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        property={{
          id: property.id,
          title: property.title,
          location: property.location,
          price: property.price,
          hunterName: property.hunterName,
        }}
        onBookingConfirm={handleBookingConfirm}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        property={{
          id: property.id,
          title: property.title,
          location: property.location,
          price: property.price,
          image: property.images[0] || "/placeholder-house.jpg",
        }}
      />
    </>
  );
};

export default PropertyDetailsPage;
