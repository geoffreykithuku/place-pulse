'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const popularLocations = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika'
  ];


  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-safari-50 pt-20 pb-16 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-safari-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-maasai-400/10 to-kenyan-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Kenyan flag inspired accent */}
      <div className="absolute top-0 left-0 w-full h-2 kenyan-gradient opacity-60"></div>
      
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
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-safari-100 to-secondary-100 rounded-full text-safari-800 text-sm font-medium border border-safari-200/50">
                <span className="font-swahili mr-2">🏠 Karibu nyumbani</span>
                <span className="text-neutral-600">• Welcome home</span>
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-neutral-900 leading-tight mb-6">
              Find Your Perfect Home in{' '}
              <span className="gradient-text-safari">Kenya</span>, 
              <span className="block mt-2 gradient-text">Faster</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl">
              Connect with verified house hunters who know the best available rentals in your area. 
              Skip the endless social media scrolling.
            </p>

            <p className="mt-4 text-base text-neutral-500 max-w-2xl">
              Join thousands of Kenyans who've found their dream homes through our trusted network 
              of local house scouts. From bedsitters in Eastlands to family homes in Karen, we've got you covered.
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
              className="mt-8 glass p-6 rounded-3xl shadow-hard border border-white/30"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Bedsitter, 2BR, family home..."
                    className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="sm:w-56 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <select 
                    className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 appearance-none bg-white/80 backdrop-blur-sm text-lg transition-all duration-200"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="">Select Location</option>
                    {popularLocations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                <Button variant="gradient" size="lg" modern glow className="sm:w-auto px-8">
                  <Search className="w-5 h-5 mr-2" />
                  Search Houses
                </Button>
              </div>
            </motion.div>

            {/* Popular Searches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 text-sm text-neutral-500"
            >
              <span className="font-medium">Popular searches: </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Bedsitter Nairobi', '2BR Mombasa', 'Family home Karen', '1BR Westlands'].map((term) => (
                  <button
                    key={term}
                    className="px-4 py-2 bg-gradient-to-r from-neutral-100 to-neutral-50 hover:from-primary-50 hover:to-secondary-50 rounded-full text-xs transition-all duration-200 border border-neutral-200/50 hover:border-primary-200 hover:text-primary-700"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Enhanced CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link to="/browse">
                <Button variant="primary" size="lg" modern glow className="sm:w-auto">
                  Browse Available Houses
                </Button>
              </Link>
              <Link to="/hunter-signup">
                <Button variant="glass" size="lg" className="sm:w-auto">
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
              <span className="font-swahili">"Nyumba ni mahali pa moyo"</span> - Home is where the heart is
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <img
                src="/hero-house.jpg"
                alt="Beautiful home in Kenya"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                loading="eager"
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-neutral-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-neutral-900">Verified Hunter</p>
                    <p className="text-xs text-neutral-500">Professional service guaranteed</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-neutral-200"
              >
                <div className="text-center">
                  <p className="font-bold text-2xl text-primary-600">KSh 12,000</p>
                  <p className="text-xs text-neutral-500">Per month</p>
                  <p className="text-xs font-medium text-neutral-700 mt-1">2BR in Westlands</p>
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