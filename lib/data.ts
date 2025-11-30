import type { Property } from "./types";

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
      "/properties/westlands-1.jpg",
      "/properties/westlands-2.jpg",
      "/properties/westlands-3.jpg",
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
    images: ["/properties/eastleigh-1.jpg", "/properties/eastleigh-2.jpg"],
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
      "/properties/karen-1.jpg",
      "/properties/karen-2.jpg",
      "/properties/karen-3.jpg",
      "/properties/karen-4.jpg",
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
    images: ["/properties/kilimani-1.jpg", "/properties/kilimani-2.jpg"],
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
    images: ["/properties/runda-1.jpg", "/properties/runda-2.jpg", "/properties/runda-3.jpg"],
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
    images: ["/properties/southb-1.jpg", "/properties/southb-2.jpg"],
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

export const kenyanAreas: string[] = [
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
  { value: "bedsitter" as const, label: "Bedsitter" },
  { value: "1br" as const, label: "1 Bedroom" },
  { value: "2br" as const, label: "2 Bedroom" },
  { value: "3br" as const, label: "3 Bedroom" },
  { value: "4br+" as const, label: "4+ Bedroom" },
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
] as const;

// Server-side data fetching functions
export async function getProperties(): Promise<Property[]> {
  // In production, this would fetch from your database
  return mockProperties;
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const property = mockProperties.find((p) => p.id === id);
  return property || null;
}

export async function getPropertiesByArea(area: string): Promise<Property[]> {
  return mockProperties.filter((p) => p.area === area);
}

export async function searchProperties(query: string): Promise<Property[]> {
  const lowerQuery = query.toLowerCase();
  return mockProperties.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.location.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  );
}
