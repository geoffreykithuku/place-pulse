import { SEOHead } from "../hooks/useSEO";
import HeroSection from "../components/home/HeroSection";
import TrustSection from "../components/home/TrustSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import FeaturedAreasSection from "../components/home/FeaturedAreasSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

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

const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Find Your Perfect Home in Kenya Faster"
        description="Connect with verified house hunters who know the best available rentals in your area. Skip the endless social media scrolling. Find bedsitters, apartments, and family homes across Kenya."
        keywords={[
          "house hunting Kenya",
          "rental houses Nairobi",
          "bedsitter Kenya",
          "apartment hunting Mombasa",
          "house scouts Kenya",
          "rental properties Kisumu",
          "Kenya housing platform",
          "verified house hunters",
        ]}
        jsonLd={defaultJsonLd}
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
};

export default HomePage;
