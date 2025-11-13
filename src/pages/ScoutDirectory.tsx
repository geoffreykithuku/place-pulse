import React from "react";
import Link from "next/link";
import { mockScouts } from "../data/mockData";
import Card from "../components/ui/Card";
import { Star, MapPin } from "lucide-react";

const ScoutDirectory: React.FC = () => {
  return (
    <div className="min-h-screen bg-safari-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-safari-800 mb-4">
            Meet Our House Scouts
          </h1>
          <p className="text-lg text-safari-600 max-w-2xl mx-auto">
            Our verified scouts are local experts who help you find the perfect
            home. Click on any scout to view their profile and property
            listings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockScouts.map((scout) => (
            <Link key={scout.id} href={`/scout/${scout.id}`}>
              <Card hover className="text-center p-6">
                <div className="w-20 h-20 bg-safari-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-safari-800">
                  {scout.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <h3 className="text-xl font-semibold text-safari-800 mb-2">
                  {scout.name}
                </h3>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{scout.rating}</span>
                  <span className="text-safari-600">
                    ({scout.successfulMatches}+ matches)
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 mb-4 text-safari-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">
                    {scout.areas.slice(0, 2).join(", ")}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {scout.specializations.slice(0, 2).map((spec) => (
                    <span
                      key={spec}
                      className="px-2 py-1 bg-safari-100 text-safari-700 rounded-full text-xs"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-safari-600 line-clamp-2">
                  {scout.bio}
                </p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-safari-600 mb-4">
            Want to become a verified scout?
          </p>
          <Link
            to="/for-hunters"
            className="text-safari-600 hover:text-safari-800 font-semibold underline"
          >
            Join Our Scout Network →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScoutDirectory;
