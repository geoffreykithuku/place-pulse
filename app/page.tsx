'use client';

import HeroSection from "../src/components/home/HeroSection";
import TrustSection from "../src/components/home/TrustSection";
import HowItWorksSection from "../src/components/home/HowItWorksSection";
import WhyChooseUsSection from "../src/components/home/WhyChooseUsSection";
import FeaturedAreasSection from "../src/components/home/FeaturedAreasSection";
import TestimonialsSection from "../src/components/home/TestimonialsSection";
import CTASection from "../src/components/home/CTASection";

const defaultJsonLd = {
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
};

export default function HomePage() {
  const title = "Find Your Perfect Home in Kenya Faster | Spot A Crib";
  const description = "Connect with verified house hunters who know the best available rentals in your area. Skip the endless social media scrolling. Find bedsitters, apartments, and family homes across Kenya.";
  const ogImage = "https://spotacrib.co.ke/og-image.jpg";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultJsonLd) }}
      />

      <div className="min-h-screen">
        <HeroSection />
        <TrustSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <FeaturedAreasSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
}
