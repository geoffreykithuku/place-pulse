import Link from "next/link";
import Button from "@/src/components/ui/Button";
import { CheckCircle, UserCheck, Bell, Users, MapPin, Home } from "lucide-react";

export default function ForHuntersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* HERO SECTION */}
      <section className="relative rounded-3xl overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=60"
          alt="House viewing"
          className="w-full h-[380px] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Turn Local Knowledge Into Income
          </h1>
          <p className="text-lg text-neutral-200 max-w-2xl mt-3">
            Help renters find the perfect homes while earning flexible income.
          </p>
          <Link href="/hunter-signup">
            <Button
              variant="outline"
              size="xl"
              modern
              className="mt-6 px-12 py-4 bg-safari-600 text-white border-transparent hover:bg-safari-700"
            >
              Apply as a Hunter
            </Button>
          </Link>
        </div>
      </section>

      {/* SECTION: WHY BECOME A HUNTER (Photo + Text Split) */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Why Become a Hunter?</h2>
          <p className="text-neutral-700 mb-6">
            Hunters earn money by helping renters explore available homes in areas they know well.
            If you enjoy meeting people, know your neighborhood, or like flexible side income, this
            role fits perfectly.
          </p>
          <ul className="space-y-3 text-neutral-700">
            {[
              "Earn per viewing",
              "Flexible hours",
              "Know your neighborhood = income",
              "Instant M-Pesa payouts",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-safari-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=60"
          alt="Why become a hunter"
          className="rounded-2xl shadow-md object-cover h-[350px]"
        />
      </section>

      {/* SECTION: HOW IT WORKS (Illustration + Steps Grid) */}
      <section>
        <h2 className="text-3xl font-bold text-neutral-900 text-center mb-2">How It Works</h2>
        <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
          A simple and transparent process designed to help you succeed.
        </p>

        <div className="grid md:grid-cols-5 gap-8 text-center">
          {[
            { icon: UserCheck, label: "Get Verified", img: "/illustrations/verify.svg" },
            { icon: Home, label: "Add Houses", img: "/illustrations/house.svg" },
            { icon: Bell, label: "Receive Requests", img: "/illustrations/bell.svg" },
            { icon: Users, label: "Do Viewings", img: "/illustrations/people.svg" },
            { icon: MapPin, label: "Get Paid", img: "/illustrations/money.svg" },
          ].map(({ label, icon: Icon, img }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mx-auto w-20 h-20 mb-4 flex items-center justify-center">
                {/* Illustration placeholder */}
                <img src={img} alt={label} className="w-full h-full object-contain opacity-90" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{label}</h3>
              <Icon className="w-6 h-6 text-safari-600 mx-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: REQUIREMENTS (Image + Text) */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=900&q=60"
          alt="Requirements"
          className="rounded-2xl shadow-md object-cover h-[350px]"
        />

        <div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Requirements</h2>
          <ul className="space-y-3 text-neutral-700">
            {[
              "Know your area well",
              "Have a smartphone",
              "Be reliable & presentable",
              "Available for viewings",
              "Pass verification",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-safari-600 font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Banner (no gradients) */}
      <section className="mt-12 bg-safari-600 rounded-2xl p-8 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Turn Local Knowledge Into Income</h3>
            <p className="text-neutral-100 max-w-2xl">
              Join our community of verified house hunters and start earning by helping renters find
              their perfect homes.
            </p>
          </div>

          <div className="flex gap-4">
            <Link href="/hunter-signup">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-safari-700 px-6 py-3 rounded-lg"
              >
                Join as a Scout
              </Button>
            </Link>
            <Link href="/scouts">
              <Button
                variant="outline"
                size="lg"
                className="border-white/50 text-white px-6 py-3 rounded-lg hover:bg-white/10"
              >
                View Scouts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
