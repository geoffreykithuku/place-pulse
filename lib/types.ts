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

export interface Area {
  name: string;
  region: string;
  propertyCount: number;
}

export type PropertyType = "bedsitter" | "1br" | "2br" | "3br" | "4br+";

export type SortOption = "recent" | "price-low" | "price-high" | "popular";
