export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  type: "bedsitter" | "1br" | "2br" | "3br" | "4br+";
  images: string[];
  hunterName: string;
  hunterRating: number;
  scoutId: string;
  isVerified: boolean;
  viewsToday: number;
  postedDays: number;
  amenities: string[];
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern 2BR Apartment - Westlands",
    price: 35000,
    location: "Westlands, Nairobi",
    area: "Westlands",
    bedrooms: 2,
    bathrooms: 2,
    type: "2br",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    ],
    hunterName: "Sarah Wanjiku",
    hunterRating: 4.8,
    isVerified: true,
    viewsToday: 12,
    postedDays: 2,
    scoutId: "scout-1",
    amenities: ["WiFi", "Parking", "Security", "Generator"],
    description: "Beautiful 2-bedroom apartment in the heart of Westlands with modern amenities.",
    coordinates: { lat: -1.2674, lng: 36.8108 },
  },
  {
    id: "2",
    title: "Cozy Bedsitter - Eastleigh",
    price: 8000,
    location: "Eastleigh, Nairobi",
    area: "Eastleigh",
    bedrooms: 1,
    bathrooms: 1,
    type: "bedsitter",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    ],
    hunterName: "Ahmed Hassan",
    hunterRating: 4.6,
    isVerified: true,
    viewsToday: 8,
    postedDays: 1,
    scoutId: "scout-3",
    amenities: ["WiFi", "Security"],
    description: "Affordable bedsitter perfect for students and young professionals.",
    coordinates: { lat: -1.2811, lng: 36.8442 },
  },
  {
    id: "3",
    title: "Spacious 3BR House - Karen",
    price: 85000,
    location: "Karen, Nairobi",
    area: "Karen",
    bedrooms: 3,
    bathrooms: 3,
    type: "3br",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
    hunterName: "Grace Muthoni",
    hunterRating: 4.9,
    isVerified: true,
    viewsToday: 15,
    postedDays: 3,
    scoutId: "scout-2",
    amenities: ["WiFi", "Parking", "Garden", "Security", "Gym"],
    description: "Luxurious family home in Karen with beautiful garden and modern amenities.",
    coordinates: { lat: -1.3196, lng: 36.6965 },
  },
  {
    id: "4",
    title: "1BR Apartment - Kilimani",
    price: 22000,
    location: "Kilimani, Nairobi",
    area: "Kilimani",
    bedrooms: 1,
    bathrooms: 1,
    type: "1br",
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&q=80",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80",
    ],
    hunterName: "David Kiprotich",
    hunterRating: 4.7,
    isVerified: true,
    viewsToday: 6,
    postedDays: 4,
    scoutId: "scout-1",
    amenities: ["WiFi", "Parking", "Security"],
    description: "Modern 1-bedroom apartment in vibrant Kilimani neighborhood.",
    coordinates: { lat: -1.2951, lng: 36.7857 },
  },
  {
    id: "5",
    title: "Family 4BR House - Runda",
    price: 120000,
    location: "Runda, Nairobi",
    area: "Runda",
    bedrooms: 4,
    bathrooms: 4,
    type: "4br+",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    ],
    hunterName: "Mary Njeri",
    hunterRating: 5.0,
    isVerified: true,
    viewsToday: 9,
    postedDays: 1,
    scoutId: "scout-2",
    amenities: ["WiFi", "Parking", "Garden", "Security", "Pool", "Gym"],
    description: "Elegant 4-bedroom house in exclusive Runda estate with premium amenities.",
    coordinates: { lat: -1.2167, lng: 36.7833 },
  },
  {
    id: "6",
    title: "Student Bedsitter - South B",
    price: 12000,
    location: "South B, Nairobi",
    area: "South B",
    bedrooms: 1,
    bathrooms: 1,
    type: "bedsitter",
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    ],
    hunterName: "John Mwangi",
    hunterRating: 4.5,
    isVerified: true,
    viewsToday: 11,
    postedDays: 2,
    scoutId: "scout-3",
    amenities: ["WiFi", "Security", "Near University"],
    description: "Perfect bedsitter for students, close to universities and transport.",
    coordinates: { lat: -1.3073, lng: 36.8344 },
  },
];

export const kenyanAreas = [
  "Nairobi CBD",
  "Westlands",
  "Kilimani",
  "Karen",
  "Runda",
  "Eastleigh",
  "South B",
  "South C",
  "Kileleshwa",
  "Lavington",
  "Parklands",
  "Kasarani",
  "Thika Road",
  "Ngong Road",
  "Mombasa Road",
];

export const propertyTypes = [
  { value: "bedsitter", label: "Bedsitter" },
  { value: "1br", label: "1 Bedroom" },
  { value: "2br", label: "2 Bedroom" },
  { value: "3br", label: "3 Bedroom" },
  { value: "4br+", label: "4+ Bedroom" },
];

export const amenitiesList = [
  "WiFi",
  "Parking",
  "Security",
  "Generator",
  "Garden",
  "Pool",
  "Gym",
  "Near University",
  "Shopping Mall",
  "Hospital Nearby",
];

export interface Scout {
  id: string;
  name: string;
  email: string;
  phone: string;
  profileImage: string;
  rating: number;
  totalProperties: number;
  successfulMatches: number;
  yearsExperience: number;
  specializations: string[];
  areas: string[];
  isVerified: boolean;
  joinedDate: string;
  bio: string;
  languages: string[];
  responseTime: string;
  availability: "active" | "busy" | "offline";
}

export const mockScouts: Scout[] = [
  {
    id: "scout-1",
    name: "Sarah Wanjiku",
    email: "sarah.wanjiku@example.com",
    phone: "+254 712 345 678",
    profileImage: "/scouts/sarah-profile.jpg",
    rating: 4.8,
    totalProperties: 45,
    successfulMatches: 28,
    yearsExperience: 3,
    specializations: ["Apartments", "Family Homes", "Student Housing"],
    areas: ["Westlands", "Kilimani", "Lavington"],
    isVerified: true,
    joinedDate: "2022-03-15",
    bio: "Experienced property scout specializing in premium apartments in Westlands and surrounding areas. I have deep knowledge of the local market and pride myself on finding the perfect match for every client.",
    languages: ["English", "Swahili", "Kikuyu"],
    responseTime: "Within 2 hours",
    availability: "active",
  },
  {
    id: "scout-2",
    name: "James Ochieng",
    email: "james.ochieng@example.com",
    phone: "+254 723 456 789",
    profileImage: "/scouts/james-profile.jpg",
    rating: 4.6,
    totalProperties: 32,
    successfulMatches: 19,
    yearsExperience: 2,
    specializations: ["Budget Housing", "Bedsitters", "Student Accommodation"],
    areas: ["Karen", "Runda", "Muthaiga"],
    isVerified: true,
    joinedDate: "2022-08-20",
    bio: "Passionate about helping young professionals and students find affordable, quality housing. I specialize in budget-friendly options without compromising on safety and comfort.",
    languages: ["English", "Swahili", "Luo"],
    responseTime: "Within 4 hours",
    availability: "active",
  },
  {
    id: "scout-3",
    name: "Grace Nyambura",
    email: "grace.nyambura@example.com",
    phone: "+254 734 567 890",
    profileImage: "/scouts/grace-profile.jpg",
    rating: 4.9,
    totalProperties: 67,
    successfulMatches: 43,
    yearsExperience: 5,
    specializations: ["Luxury Homes", "Executive Apartments", "Furnished Properties"],
    areas: ["Kileleshwa", "Spring Valley", "Gigiri"],
    isVerified: true,
    joinedDate: "2020-01-10",
    bio: "Senior property scout with extensive experience in luxury residential properties. I work with expatriates and executives to find premium accommodations that meet international standards.",
    languages: ["English", "Swahili", "French"],
    responseTime: "Within 1 hour",
    availability: "active",
  },
];
