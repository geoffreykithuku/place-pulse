import { SEOHead } from "../hooks/useSEO";
import Button from "../components/ui/Button";

const PricingPage = () => {
  return (
    <div>
      <SEOHead
        title="Pricing"
        description="Transparent pricing for renters and house hunters. View fees, guarantees and value."
        keywords={["pricing", "viewing fees", "hunter fees"]}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl font-display font-bold mb-4">Pricing</h1>
        <p className="text-neutral-600 mb-8">
          Transparent, fair pricing for both renters and house hunters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Renters */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
            <h2 className="text-xl font-semibold mb-4">For Renters</h2>
            <p className="text-neutral-600 mb-4">
              Viewing fees based on rent price to ensure quality bookings.
            </p>
            <ul className="space-y-2 text-neutral-600 mb-4">
              <li>
                Houses under KSh 15,000: <strong>KSh 200</strong> per viewing
              </li>
              <li>
                Houses KSh 15,001-30,000: <strong>KSh 350</strong> per viewing
              </li>
              <li>
                Houses above KSh 30,000: <strong>KSh 500</strong> per viewing
              </li>
            </ul>
            <p className="text-sm text-neutral-500 mb-4">
              Money-back guarantee if the house isn't as described.
            </p>
            <Button>Browse Houses</Button>
          </div>

          {/* Hunters */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
            <h2 className="text-xl font-semibold mb-4">For Hunters</h2>
            <p className="text-neutral-600 mb-4">
              Earn money for each viewing and keep most of your earnings.
            </p>
            <ul className="space-y-2 text-neutral-600 mb-4">
              <li>
                Keep <strong>80%</strong> of all viewing fees
              </li>
              <li>Bonus payments for successful placements</li>
              <li>Weekly payments to M-Pesa</li>
            </ul>
            <Button variant="outline">Apply to be a Hunter</Button>
          </div>
        </div>

        <div className="bg-neutral-50 p-6 rounded-2xl shadow-sm border border-neutral-100">
          <h3 className="text-lg font-semibold mb-2">Value Proposition</h3>
          <p className="text-neutral-600">
            Paying a small viewing fee ensures serious viewers, reduces
            time-wasters, and guarantees verified listings.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;
