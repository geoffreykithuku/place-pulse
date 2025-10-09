import { SEOHead } from "../hooks/useSEO";

const AboutPage = () => {
  return (
    <div>
      <SEOHead
        title="About Us"
        description="Spot A Crib is building Kenya's most trusted house hunting platform—connecting renters with verified local hunters."
        keywords={[
          "about spot a crib",
          "company mission",
          "house hunting Kenya",
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl font-display font-bold mb-4">
          Making House Hunting Easy for Every Kenyan
        </h1>
        <p className="text-neutral-600 mb-6">
          Founded in 2024, Spot A Crib exists to simplify house hunting across
          Kenya by connecting renters with trusted local scouts and verified
          listings.
        </p>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 mb-8">
          <h2 className="text-xl font-semibold mb-4">Mission & Vision</h2>
          <p className="text-neutral-600 mb-2">
            <strong>Mission:</strong> To simplify house hunting in Kenya by
            connecting renters with trusted local scouts.
          </p>
          <p className="text-neutral-600 mb-2">
            <strong>Vision:</strong> Every Kenyan finds their perfect home
            quickly, safely, and affordably.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>
              <strong>Trust:</strong> Every hunter is verified and rated
            </li>
            <li>
              <strong>Transparency:</strong> Clear pricing and no hidden fees
            </li>
            <li>
              <strong>Community:</strong> Supporting local neighborhoods and
              scouts
            </li>
            <li>
              <strong>Innovation:</strong> Using technology to solve real
              problems
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
          <h2 className="text-xl font-semibold mb-4">Team</h2>
          <p className="text-neutral-600 mb-4">
            Our team is small, dispersed across Kenya, and passionate about
            solving the rental pain points. We'll add detailed team bios soon.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
