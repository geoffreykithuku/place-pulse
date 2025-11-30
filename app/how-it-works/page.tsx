import type { Metadata } from "next";
import {
  Search,
  Calendar,
  Home,
  Star,
  Shield,
  UserCheck,
  Upload,
  Bell,
  Users,
  Wallet,
  CheckCircle,
  Lock,
  Headphones,
  Award,
  MapPin,
  Filter,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Spot A Crib connects renters with verified house hunters. Simple, safe, and effective house hunting in Kenya.",
  openGraph: {
    title: "How It Works | Spot A Crib",
    description: "Step-by-step guide for renters and house hunters",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Find a House with Spot A Crib",
  description: "Step-by-step guide to finding houses through verified local scouts",
  step: [
    {
      "@type": "HowToStep",
      name: "Search and Filter",
      text: "Browse properties by location, budget, and amenities",
    },
    {
      "@type": "HowToStep",
      name: "Book a Viewing",
      text: "Schedule a property tour with a verified house hunter",
    },
    {
      "@type": "HowToStep",
      name: "View the House",
      text: "Meet the hunter and tour the property",
    },
    {
      "@type": "HowToStep",
      name: "Move In",
      text: "Negotiate with landlord and move into your new home",
    },
  ],
};

const renterSteps = [
  {
    number: "01",
    title: "Search & Filter",
    description:
      "Browse thousands of properties across Kenya. Filter by location, budget, house type, and amenities to find your perfect match.",
    icon: Search,
    tips: [
      "Use specific location filters for better results",
      "Set price range to match your budget",
      "Save favorites to compare later",
    ],
  },
  {
    number: "02",
    title: "Book a Viewing",
    description:
      "Found something you like? Book a viewing securely through the platform. Pay a small viewing fee to confirm your slot.",
    icon: Calendar,
    tips: [
      "Viewing fees are typically KSh 200-500",
      "Choose a time that works for you",
      "Receive instant confirmation via SMS",
    ],
  },
  {
    number: "03",
    title: "View the House",
    description:
      "Meet your verified house hunter at the property. Ask questions, check amenities, and get honest insights about the neighborhood.",
    icon: Home,
    tips: [
      "Verify hunter's ID badge on arrival",
      "Take photos and videos for reference",
      "Ask about utilities and nearby facilities",
    ],
  },
  {
    number: "04",
    title: "Move In",
    description:
      "Love the place? Negotiate directly with the landlord. Once settled, rate your hunter to help future renters.",
    icon: Star,
    tips: [
      "Get everything in writing",
      "Check lease terms carefully",
      "Leave honest feedback for the hunter",
    ],
  },
];

const hunterSteps = [
  {
    number: "01",
    title: "Get Verified",
    description:
      "Submit your ID, references, and undergo a background check. We ensure all hunters are trustworthy and professional.",
    icon: UserCheck,
    highlights: ["24-48 hour verification", "ID & references required", "Background check"],
  },
  {
    number: "02",
    title: "Add Listings",
    description:
      "Upload property photos, add details, amenities, and pricing. The more complete your listings, the more bookings you get.",
    icon: Upload,
    highlights: ["Free to list properties", "Unlimited photos per listing", "Instant publishing"],
  },
  {
    number: "03",
    title: "Receive Bookings",
    description:
      "Get instant notifications when clients book viewings. Manage your schedule and confirm appointments through the app.",
    icon: Bell,
    highlights: ["Real-time SMS alerts", "Easy calendar management", "Client contact info"],
  },
  {
    number: "04",
    title: "Conduct Tours",
    description:
      "Meet clients at properties, showcase features, answer questions, and build your reputation with excellent service.",
    icon: Users,
    highlights: ["Earn viewing fees upfront", "Build client relationships", "Get 5-star ratings"],
  },
  {
    number: "05",
    title: "Get Paid",
    description:
      "Receive payments directly via M-Pesa or bank transfer. Track your earnings and commissions in your dashboard.",
    icon: Wallet,
    highlights: ["Instant M-Pesa payouts", "No hidden fees", "Commission on successful rentals"],
  },
];

const safetyFeatures = [
  {
    title: "Verified Hunters",
    description: "All house hunters undergo ID verification and background checks",
    icon: UserCheck,
  },
  {
    title: "Secure Payments",
    description: "All transactions processed through trusted payment partners",
    icon: Lock,
  },
  {
    title: "24/7 Support",
    description: "Customer support available anytime for renters and hunters",
    icon: Headphones,
  },
  {
    title: "Rating System",
    description: "Transparent reviews help you choose the best hunters",
    icon: Award,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Simple, Safe, and Effective House Hunting
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Whether you're a renter looking for your dream home or a local scout helping others find
            houses, Spot A Crib makes the process effortless.
          </p>

          {/* Dual Audience CTAs */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-safari-200 rounded-2xl p-8 hover:border-safari-400 transition-all">
              <div className="w-16 h-16 bg-safari-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-safari-700" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">For Renters</h3>
              <p className="text-neutral-600 mb-4">
                Find verified properties with trusted local guides
              </p>
              <Link
                href="/browse"
                className="inline-block bg-safari-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-safari-700 transition-colors"
              >
                Browse Houses
              </Link>
            </div>

            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-safari-400 transition-all">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-neutral-700" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">For House Hunters</h3>
              <p className="text-neutral-600 mb-4">
                Earn money by helping renters find their perfect home
              </p>
              <Link
                href="/hunter-signup"
                className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors"
              >
                Become a Hunter
              </Link>
            </div>
          </div>
        </div>

        {/* For Renters Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How It Works for Renters
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Find your perfect home in four simple steps
            </p>
          </div>

          <div className="space-y-12">
            {renterSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  {/* Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 bg-safari-600 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                    <p className="text-neutral-600 text-lg mb-4">{step.description}</p>

                    {/* Tips */}
                    <div className="bg-safari-50 border border-safari-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-safari-900 mb-2">💡 Pro Tips:</p>
                      <ul className="space-y-1">
                        {step.tips.map((tip, idx) => (
                          <li key={idx} className="text-sm text-safari-800 flex items-start">
                            <span className="text-safari-600 mr-2">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* For Hunters Section */}
        <div className="mb-24 bg-neutral-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How It Works for House Hunters
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Turn your local knowledge into income in five simple steps
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-neutral-200" />

              {hunterSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={step.number} className="relative mb-12 last:mb-0">
                    <div
                      className={`flex flex-col md:flex-row gap-8 items-center ${
                        isEven ? "" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content */}
                      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className={`w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center ${
                                isEven ? "md:order-2" : ""
                              }`}
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">{step.title}</h3>
                          </div>
                          <p className="text-neutral-600 mb-4">{step.description}</p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2">
                            {step.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center bg-safari-50 text-safari-700 px-3 py-1 rounded-full text-sm"
                              >
                                <CheckCircle className="w-3 h-3 mr-1.5" />
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Timeline Node */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-16 h-16 bg-safari-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                          <span className="text-white font-bold text-xl">{step.number}</span>
                        </div>
                      </div>

                      {/* Spacer for even layout */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Earning Potential Highlight */}
          <div className="max-w-3xl mx-auto mt-12 bg-safari-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">💰 Earning Potential</h3>
            <p className="text-safari-100 mb-4">
              Top hunters earn <span className="font-bold text-white">KSh 50,000+</span> per month
              by conducting viewings and earning commissions on successful rentals.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-white text-safari-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>

        {/* Safety & Verification Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-safari-50 text-safari-700 px-4 py-2 rounded-full mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Your Safety is Our Priority</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Safe & Verified Platform
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We take security seriously. Every hunter is verified and every transaction is
              protected.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white border border-neutral-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-safari-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-safari-700" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Common Questions</h2>
            <p className="text-neutral-600">Quick answers to help you get started</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How much does it cost to book a viewing?",
                a: "Viewing fees typically range from KSh 200-500 depending on the property and location. This fee goes directly to the house hunter for their time and expertise.",
              },
              {
                q: "Are all house hunters verified?",
                a: "Yes! Every house hunter must submit valid ID, references, and pass a background check before they can list properties or conduct viewings on our platform.",
              },
              {
                q: "What if I don't like any of the houses I view?",
                a: "No problem! You can book as many viewings as you need. We recommend browsing multiple options and reading hunter reviews before booking.",
              },
              {
                q: "How do hunters get paid?",
                a: "Hunters receive viewing fees upfront when bookings are confirmed. They also earn commissions when renters successfully move into properties they've shown.",
              },
              {
                q: "Can I become a hunter if I don't own properties?",
                a: "Absolutely! Many successful hunters work with landlords and property managers to list available rentals. You don't need to own property to be a hunter.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-white border border-neutral-200 rounded-lg p-6 group"
              >
                <summary className="font-semibold text-neutral-900 cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <MessageSquare className="w-5 h-5 text-neutral-400 group-open:text-safari-600 transition-colors" />
                </summary>
                <p className="text-neutral-600 mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-neutral-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join thousands of Kenyans finding and showing homes through Spot A Crib
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/browse"
              className="inline-flex items-center justify-center bg-safari-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-safari-700 transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Find a House
            </Link>
            <Link
              href="/hunter-signup"
              className="inline-flex items-center justify-center bg-neutral-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Become a Hunter
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
