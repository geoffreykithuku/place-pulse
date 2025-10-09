"use client";

import { motion } from "framer-motion";
import { Users, Home, Clock, Star } from "lucide-react";

const TrustSection = () => {
  const stats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Trusted Kenyans",
      description: "Happy customers across the country",
    },
    {
      icon: Users,
      number: "5,000+",
      label: "Verified House Hunters",
      description: "Professional scouts ready to help",
    },
    {
      icon: Home,
      number: "25,000+",
      label: "Houses Listed Monthly",
      description: "Fresh listings every day",
    },
    {
      icon: Clock,
      number: "7 Days",
      label: "Average Time to Find Home",
      description: "Quick and efficient service",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
            Trusted by <span className="text-primary-600">15,000+</span> Kenyans
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect home
            through our platform
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-neutral-50 to-primary-50/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-neutral-800 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-neutral-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-neutral-700 font-medium">
              98% Customer Satisfaction
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">✓</span>
            </div>
            <span className="text-neutral-700 font-medium">
              All Hunters Verified
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">🛡</span>
            </div>
            <span className="text-neutral-700 font-medium">
              Secure Payments
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
