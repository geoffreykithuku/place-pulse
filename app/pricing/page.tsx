import type { Metadata } from "next";
import { Check, X, Star, Zap, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing for House Hunters",
  description:
    "Flexible pricing plans for house hunters and scouts. Grow your client base, earn more commissions, and manage your property listings professionally.",
  openGraph: {
    title: "Pricing for House Hunters | Spot A Crib",
    description: "Plans designed to help house hunters attract more clients and earn more",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Offer",
      name: "Starter Plan",
      price: "0",
      priceCurrency: "KES",
      description: "Perfect for new house hunters getting started",
    },
    {
      "@type": "Offer",
      name: "Professional Plan",
      price: "1499",
      priceCurrency: "KES",
      description: "Best for growing your client base",
    },
    {
      "@type": "Offer",
      name: "Featured Plan",
      price: "3999",
      priceCurrency: "KES",
      description: "For established hunters who want maximum visibility",
    },
  ],
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for new house hunters getting started",
    features: [
      "Client request notifications (when no matches found)",
      "Up to 5 property listings/month",
      "Basic profile page",
      "Connect 1 social media account",
      "Basic client preference insights",
      "Community support",
      "Email notifications",
    ],
    notIncluded: [
      "Unlimited listings",
      "Custom mini-website",
      "Priority placement",
      "Phone number display",
      "Advanced analytics",
    ],
    cta: "Start Free",
    ctaLink: "/hunter-signup",
    popular: false,
    icon: Star,
  },
  {
    name: "Professional",
    price: "KSh 1,499",
    period: "/month",
    description: "Best for growing your client base",
    features: [
      "Everything in Starter",
      "Unlimited client request notifications",
      "Up to 25 property listings/month",
      "Custom mini-website profile",
      "Connect up to 5 social media accounts",
      "Client preference & booking analytics",
      "Trending areas dashboard",
      "Priority email support",
      "Verified Hunter badge",
    ],
    notIncluded: [
      "Priority search placement",
      "Public phone number display",
      "Premium analytics",
      "Personalized URL",
    ],
    cta: "Upgrade Now",
    ctaLink: "/hunter-signup",
    popular: true,
    icon: Zap,
    badge: "Most Popular",
  },
  {
    name: "Featured",
    price: "KSh 3,999",
    period: "/month",
    description: "Maximum visibility for established hunters",
    features: [
      "Everything in Professional",
      "Unlimited property listings",
      "Priority placement in search results",
      "Publicly displayed phone number",
      "Premium analytics (client demographics)",
      "Most requested areas insights",
      "Personalized branded URL",
      "Featured hunter badge",
      "24/7 priority support",
      "Lead generation tools",
      "Commission tracking dashboard",
    ],
    notIncluded: [],
    cta: "Go Premium",
    ctaLink: "/hunter-signup",
    popular: false,
    icon: Shield,
    badge: "Best Value",
  },
];

const faqs = [
  {
    question: "Is the Starter plan really free forever?",
    answer:
      "Yes! Our Starter plan is completely free with no hidden fees. You can start building your client base with up to 5 property listings per month at no cost.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Absolutely! You can upgrade, downgrade, or cancel your plan anytime. Upgrades take effect immediately, and downgrades apply at the next billing cycle. We'll prorate any charges when you upgrade mid-cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept M-Pesa, credit/debit cards, and bank transfers. All payments are processed securely through our trusted payment partners. M-Pesa is the most popular option for Kenyan hunters.",
  },
  {
    question: "How do client notifications work?",
    answer:
      "When a renter searches for properties that don't match existing listings, we notify hunters who can help. Starter plan gets limited notifications, while Professional and Featured plans receive unlimited notifications to maximize your client opportunities.",
  },
  {
    question: "What's the difference between a profile page and a mini-website?",
    answer:
      "Starter plan includes a basic profile page with your contact info and listings. Professional plan upgrades you to a custom mini-website with your branding, detailed bio, testimonials section, and connected social media feeds - perfect for building trust with clients.",
  },
  {
    question: "How does priority placement work?",
    answer:
      "Featured plan hunters appear at the top of search results when clients browse for house hunters in their area. This significantly increases your visibility and helps you get more client inquiries.",
  },
];

const comparisonFeatures = [
  {
    name: "Client request notifications",
    basic: "Limited",
    premium: "Unlimited",
    pro: "Unlimited",
  },
  { name: "Property listings/month", basic: "5", premium: "25", pro: "Unlimited" },
  { name: "Profile type", basic: "Basic page", premium: "Mini-website", pro: "Mini-website" },
  { name: "Social media connections", basic: "1", premium: "5", pro: "Unlimited" },
  { name: "Client preference insights", basic: true, premium: true, pro: true },
  { name: "Booking analytics", basic: false, premium: true, pro: true },
  { name: "Trending areas dashboard", basic: false, premium: true, pro: true },
  { name: "Verified hunter badge", basic: false, premium: true, pro: true },
  { name: "Priority search placement", basic: false, premium: false, pro: true },
  { name: "Public phone display", basic: false, premium: false, pro: true },
  { name: "Premium analytics", basic: false, premium: false, pro: true },
  { name: "Personalized URL", basic: false, premium: false, pro: true },
  { name: "Featured hunter badge", basic: false, premium: false, pro: true },
  { name: "Support level", basic: "Community", premium: "Priority", pro: "24/7 Priority" },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-safari-50 text-safari-700 rounded-full text-sm font-medium border border-safari-200">
            🎉 Start free forever • Upgrade anytime to grow your business
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Pricing Plans for House Hunters
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Choose the plan that helps you attract more clients, earn more commissions, and grow
            your house hunting business.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? "border-safari-500 scale-105"
                    : "border-neutral-200 hover:border-safari-300"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-safari-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-safari-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="w-5 h-5 text-safari-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">{plan.name}</h3>
                  </div>

                  <p className="text-neutral-600 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-neutral-900">{plan.price}</span>
                      <span className="text-neutral-600 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={plan.ctaLink}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 mb-6 ${
                      plan.popular
                        ? "bg-safari-600 text-white hover:bg-safari-700"
                        : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  {/* Features */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-neutral-700 mb-3">What's included:</p>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-safari-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.length > 0 && (
                      <>
                        {plan.notIncluded.map((feature) => (
                          <div key={feature} className="flex items-start opacity-50">
                            <X className="w-5 h-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-neutral-500">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-neutral-200">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-4 px-6 font-semibold text-neutral-900">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-neutral-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-neutral-900 bg-safari-50">
                    Professional
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-neutral-900">Featured</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={feature.name} className={idx % 2 === 0 ? "bg-neutral-50" : "bg-white"}>
                    <td className="py-4 px-6 text-neutral-700">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.basic === "boolean" ? (
                        feature.basic ? (
                          <Check className="w-5 h-5 text-safari-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-neutral-700">{feature.basic}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-safari-50/50">
                      {typeof feature.premium === "boolean" ? (
                        feature.premium ? (
                          <Check className="w-5 h-5 text-safari-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-neutral-700">{feature.premium}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <Check className="w-5 h-5 text-safari-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-neutral-700">{feature.pro}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Elements */}
        <div className="mb-20">
          <h3 className="text-center text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-8">
            Trusted by House Hunters Across Kenya
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Verified Hunters", value: "500+" },
              { label: "Active Clients", value: "10,000+" },
              { label: "Properties Listed", value: "15,000+" },
              { label: "Successful Matches", value: "8,000+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-safari-700 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-safari-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Grow Your House Hunting Business?
          </h2>
          <p className="text-safari-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of successful house hunters who earn more by connecting with clients
            through Spot A Crib. Start free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hunter-signup"
              className="bg-white text-safari-700 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
            >
              Start Free
            </Link>
            <Link
              href="/scouts"
              className="bg-safari-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-safari-800 transition-colors border-2 border-white"
            >
              View Hunter Directory
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
