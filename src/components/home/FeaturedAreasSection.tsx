"use client";
import { motion } from "framer-motion";
import { MapPin, TrendingUp, Home } from "lucide-react";
import Button from "../ui/Button";

const FeaturedAreasSection = () => {
  const areas = [
    {
      name: "Nairobi",
      properties: "8,500+ properties",
      averageRent: "KSh 15,000 - 80,000",
      image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80",
      popular: true,
      growth: "+15%",
      description: "Capital city with diverse housing options from Eastlands to Westlands",
      neighborhoods: ["Westlands", "Kilimani", "South B", "Eastleigh", "Karen"],
    },
    {
      name: "Mombasa",
      properties: "3,200+ properties",
      averageRent: "KSh 12,000 - 45,000",
      image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80",
      popular: false,
      growth: "+8%",
      description: "Coastal city with beachfront and urban housing options",
      neighborhoods: ["Nyali", "Bamburi", "Likoni", "Tudor", "Mtwapa"],
    },
    {
      name: "Kisumu",
      properties: "1,800+ properties",
      averageRent: "KSh 8,000 - 35,000",
      image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&q=80",
      popular: false,
      growth: "+12%",
      description: "Lakeside city with affordable housing near Lake Victoria",
      neighborhoods: ["Milimani", "Kondele", "Mamboleo", "Nyalenda", "Tom Mboya"],
    },
    {
      name: "Nakuru",
      properties: "2,100+ properties",
      averageRent: "KSh 10,000 - 40,000",
      image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800&q=80",
      popular: false,
      growth: "+10%",
      description: "Growing city with modern amenities and great connectivity",
      neighborhoods: ["Milimani", "Section 58", "Flamingo", "Pipeline", "London"],
    },
    {
      name: "Eldoret",
      properties: "1,500+ properties",
      averageRent: "KSh 7,000 - 30,000",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
      popular: false,
      growth: "+9%",
      description: "Athletic hub with university housing and family-friendly areas",
      neighborhoods: ["Pioneer", "Langas", "West Indies", "Kapseret", "Kimumu"],
    },
    {
      name: "Thika",
      properties: "1,200+ properties",
      averageRent: "KSh 6,000 - 25,000",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
      popular: false,
      growth: "+14%",
      description: "Industrial town with affordable housing close to Nairobi",
      neighborhoods: ["Makongeni", "Kenyatta Road", "Section 7", "Stadium", "Kiganjo"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
            Popular <span className="text-primary-600">Areas</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover available houses in Kenya's most sought-after locations
          </p>
        </motion.div>

        {/* Areas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {areas.map((area) => (
            <motion.div
              key={area.name}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={`Houses in ${area.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {area.popular && (
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </span>
                  )}
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{area.growth}</span>
                  </span>
                </div>

                {/* Property Count */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    <Home className="w-4 h-4" />
                    <span className="text-sm font-medium">{area.properties}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-neutral-900">{area.name}</h3>
                  <div className="flex items-center text-neutral-500">
                    <MapPin className="w-4 h-4 mr-1" />
                  </div>
                </div>

                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{area.description}</p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-neutral-700 mb-2">
                    Average Rent:{" "}
                    <span className="text-primary-600 font-bold">{area.averageRent}</span>
                  </div>

                  <div className="text-xs text-neutral-500">
                    Popular areas: {area.neighborhoods.slice(0, 3).join(", ")}
                    {area.neighborhoods.length > 3 && ` +${area.neighborhoods.length - 3} more`}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600"
                >
                  View Houses in {area.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button size="lg" className="px-8">
            View All Locations
          </Button>
          <p className="mt-4 text-sm text-neutral-500">
            Can't find your area? We're expanding to new locations every month.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-bold text-primary-600 mb-2">47</div>
            <div className="text-sm text-neutral-600">Counties Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-bold text-secondary-600 mb-2">200+</div>
            <div className="text-sm text-neutral-600">Cities & Towns</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-bold text-accent-600 mb-2">95%</div>
            <div className="text-sm text-neutral-600">Area Coverage</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedAreasSection;
