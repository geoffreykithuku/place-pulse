'use client';

import Link from 'next/link';
import Button from '../src/components/ui/Button';
import HunterCTA from '../src/components/ui/HunterCTA';

export default function ForHuntersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <h1 className="text-3xl font-display font-bold mb-4">
        Turn Your Local Knowledge Into Income
      </h1>
      <p className="text-neutral-600 mb-6">
        You know your neighborhood better than anyone. Help house seekers
        while earning extra income as a verified house hunter.
      </p>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 mb-8">
        <h2 className="text-xl font-semibold mb-4">Earning Potential</h2>
        <ul className="space-y-2 text-neutral-600">
          <li>
            <strong>Per Viewing:</strong> KSh 500-1,500 depending on house
            price
          </li>
          <li>
            <strong>Bonus:</strong> Extra KSh 500 when renter takes the house
          </li>
          <li>
            <strong>Top Hunters:</strong> Earn KSh 15,000+ monthly
          </li>
          <li>
            <strong>Flexible:</strong> Work when you want, where you want
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 mb-8">
        <h2 className="text-xl font-semibold mb-4">Requirements</h2>
        <ul className="list-disc pl-6 text-neutral-600 space-y-2">
          <li>Live in or know a specific area very well</li>
          <li>Own a smartphone with camera</li>
          <li>Available for house viewings during weekdays/weekends</li>
          <li>Good communication skills</li>
          <li>Pass our verification process</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          How It Works for Hunters
        </h2>
        <ol className="list-decimal pl-6 text-neutral-600 space-y-2">
          <li>
            <strong>Get Verified</strong> - Submit ID, references, pass
            background check
          </li>
          <li>
            <strong>List Houses</strong> - Add vacant properties with photos
            and details
          </li>
          <li>
            <strong>Receive Bookings</strong> - Get notifications when renters
            want viewings
          </li>
          <li>
            <strong>Conduct Tours</strong> - Meet renters, show houses
            professionally
          </li>
          <li>
            <strong>Get Paid</strong> - Earn money directly to your M-Pesa
          </li>
        </ol>
      </div>

      <div className="text-center mb-12">
        <Link href="/hunter-signup">
          <Button variant="gradient" size="xl" modern glow className="px-12">
            Apply to Become a Hunter
          </Button>
        </Link>
      </div>

      {/* Enhanced CTA Section */}
      <HunterCTA variant="banner" className="mb-8" />
    </main>
  );
}
