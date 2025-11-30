import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Lazy load heavy components for better performance
const HeroSection = dynamic(() => import("../src/components/home/HeroSection"));
const TrustSection = dynamic(() => import("../src/components/home/TrustSection"));
const HowItWorksSection = dynamic(() => import("../src/components/home/HowItWorksSection"));
const WhyChooseUsSection = dynamic(() => import("../src/components/home/WhyChooseUsSection"));
const FeaturedAreasSection = dynamic(() => import("../src/components/home/FeaturedAreasSection"));
const TestimonialsSection = dynamic(() => import("../src/components/home/TestimonialsSection"));
const CTASection = dynamic(() => import("../src/components/home/CTASection"));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Spot A Crib",
  url: "https://spotacrib.co.ke",
  logo: "https://spotacrib.co.ke/logo.png",
  description:
    "Find your perfect home in Kenya faster. Connect with verified house hunters who know the best available rentals in your area.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
    addressLocality: "Nairobi",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254-XXX-XXX-XXX",
    contactType: "customer service",
    availableLanguage: ["English", "Swahili"],
  },
  sameAs: [
    "https://facebook.com/spotacrib",
    "https://twitter.com/spotacrib",
    "https://instagram.com/spotacrib",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2500",
  },
};

export const metadata: Metadata = {
  title: "Find Your Perfect Home in Kenya Faster",
  description:
    "Connect with verified house hunters who know the best available rentals in your area. Skip the endless social media scrolling. Find bedsitters, apartments, and family homes across Kenya.",
  keywords: [
    "house hunting Kenya",
    "apartments Nairobi",
    "bedsitters Kenya",
    "rental homes Mombasa",
    "house scouts Kenya",
    "verified house hunters",
    "property search Kenya",
    "rental homes Nairobi",
  ],
  openGraph: {
    title: "Find Your Perfect Home in Kenya Faster",
    description:
      "Connect with verified house hunters who know the best available rentals in your area.",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Spot A Crib - House Hunting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Perfect Home in Kenya Faster",
    description: "Connect with verified house hunters who know the best available rentals.",
    images: ["/og-home.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />
      <TrustSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <FeaturedAreasSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
