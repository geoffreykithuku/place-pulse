import { SEOHead } from "../hooks/useSEO";
import HowItWorksSection from "../components/home/HowItWorksSection";

const HowItWorksPage = () => {
  return (
    <div>
      <SEOHead
        title="How It Works"
        description="Step-by-step guide for renters and house hunters on how the Spot A Crib platform works."
        keywords={[
          "how it works",
          "house hunting process",
          "renters and hunters",
        ]}
      />

      <main className="min-h-screen">
        <HowItWorksSection />
      </main>
    </div>
  );
};

export default HowItWorksPage;
