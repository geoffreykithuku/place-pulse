"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Star, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const popularLocations = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika"];

  return (
    <section className="relative min-h-screen bg-neutral-50 pt-20 pb-16 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Swahili greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-safari-50 rounded-full text-safari-800 text-sm font-medium border border-safari-200">
                <span className="font-swahili mr-2">🏠 Karibu nyumbani</span>
                <span className="text-neutral-600">• Welcome home</span>
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 leading-tight mb-6">
              Find Your Perfect Home in <span className="text-safari-700">Kenya</span>,{" "}
              <span className="text-neutral-900">Faster</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl">
              Connect with verified house hunters who know the best available rentals in your area.
              Skip the endless social media scrolling.
            </p>

            <p className="mt-4 text-base text-neutral-500 max-w-2xl">
              Join thousands of Kenyans who've found their dream homes through our trusted network
              of local house scouts. From bedsitters in Eastlands to family homes in Karen, we've
              got you covered.
            </p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center gap-6 text-sm text-neutral-600"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent-600" />
                <span>Verified Scouts</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary-600" />
                <span>10,000+ Happy Renters</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-secondary-600" />
                <span>4.8/5 Rating</span>
              </div>
            </motion.div>

            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 glass p-4 sm:p-6 rounded-2xl shadow-lg border border-white/30"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Bedsitter, 2BR, family home..."
                    className="w-full pl-3 pr-3 py-2.5 border-2 border-neutral-200/50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="sm:w-48 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                  <select
                    className="w-full pl-3 pr-8 py-2.5 border-2 border-neutral-200/50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-300 appearance-none bg-white/80 backdrop-blur-sm text-sm transition-all duration-200"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="">Select Location</option>
                    {popularLocations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <Button variant="safari" size="md" className="sm:w-auto">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </motion.div>

            {/* Popular Searches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 text-sm text-neutral-500"
            >
              <span className="font-medium">Popular: </span>
              <div className="inline-flex flex-wrap gap-2 mt-2">
                {["Bedsitter Nairobi", "2BR Mombasa", "Family home Karen", "1BR Westlands"].map(
                  (term) => (
                    <button
                      key={term}
                      className="px-3 py-1.5 bg-white/60 hover:bg-white rounded-full text-xs transition-all duration-200 border border-neutral-200/50 hover:border-primary-300 hover:text-primary-700"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </motion.div>

            {/* Enhanced CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/browse">
                <Button variant="safari" size="lg" className="w-full sm:w-auto">
                  Browse Available Houses
                </Button>
              </Link>
              <Link href="/hunter-signup">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Become a House Hunter
                </Button>
              </Link>
            </motion.div>

            {/* Swahili phrase */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-6 text-sm text-neutral-400 italic"
            >
              <span className="font-swahili">"Nyumba ni mahali pa moyo"</span> - Home is where the
              heart is
            </motion.div>
          </motion.div>

          {/* Hero Images - Honeycomb Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Main large image - top left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-0 left-0 w-64 h-64 rounded-3xl overflow-hidden shadow-lg border-4 border-white z-20 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Modern apartment"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Top right image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-20 right-0 w-56 h-56 rounded-3xl overflow-hidden shadow-lg border-4 border-white z-10 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                  alt="Cozy living room"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Middle left image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-56 left-16 w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white z-15 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
                  alt="Beautiful kitchen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Bottom center large */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-12 left-36 w-72 h-72 rounded-3xl overflow-hidden shadow-lg border-4 border-white z-20 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
                  alt="Spacious bedroom"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Bottom right small */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-0 right-4 w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white z-10 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
                  alt="Modern bathroom"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-32 left-4 bg-white p-4 rounded-2xl shadow-lg border border-neutral-200 z-30"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-safari-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-neutral-900">Verified Hunter</p>
                    <p className="text-xs text-neutral-500">Professional service</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Price Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute bottom-8 right-48 bg-white p-4 rounded-2xl shadow-lg border border-neutral-200 z-30"
              >
                <div className="text-center">
                  <p className="font-bold text-xl text-safari-700">KSh 12,000</p>
                  <p className="text-xs text-neutral-500 mt-1">Per month</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Star className="w-3 h-3 text-safari-600 fill-current" />
                    <span className="text-xs font-semibold text-neutral-700">4.8</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
