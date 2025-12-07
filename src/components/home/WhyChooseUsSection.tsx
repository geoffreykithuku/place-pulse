"use client";
import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle, Users, CreditCard, MapPin } from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Verified Listings",
      description: "Every house is confirmed by our hunters",
      details:
        'No more "house taken" disappointments. All our listings are verified and up-to-date.',
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Clock,
      title: "Up-to-Date",
      description: 'No more "house taken" disappointments',
      details: "Real-time updates ensure you only see available properties.",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: CreditCard,
      title: "Safe Payments",
      description: "Secure booking system, no cash risks",
      details: "M-Pesa integration and secure payment processing for your peace of mind.",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: Users,
      title: "Professional Service",
      description: "Trained hunters, not random posts",
      details: "All our hunters are verified, trained, and committed to professional service.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: MapPin,
      title: "Time-Saving",
      description: "Organized search, not endless scrolling",
      details: "Smart filters and organized listings save you hours of browsing social media.",
      gradient: "from-teal-500 to-green-600",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Background-checked hunters",
      details: "Every hunter goes through our rigorous verification and background check process.",
      gradient: "from-indigo-500 to-purple-600",
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
    <section className="py-20 bg-white">
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
            Stop Wasting Time on <span className="text-primary-600">Facebook & TikTok</span> House
            Groups
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Why settle for unreliable social media posts when you can have a professional, verified
            house hunting experience?
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200 hover:shadow-2xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${benefit.gradient} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 font-medium mb-4">{benefit.description}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{benefit.details}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-neutral-50 to-primary-50/30 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-center text-neutral-900 mb-8">
              Social Media Groups vs. Spot A Crib
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Social Media Problems */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-red-600 mb-4">❌ Social Media Groups</h4>
                <div className="space-y-3">
                  {[
                    "Houses already taken when you call",
                    "Fake or misleading photos",
                    "No verification of landlords",
                    "Endless scrolling through irrelevant posts",
                    "Scammers and fraudulent listings",
                    "No professional service standards",
                  ].map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs font-bold">✗</span>
                      </div>
                      <span className="text-neutral-700">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Solutions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-600 mb-4">✅ Spot A Crib</h4>
                <div className="space-y-3">
                  {[
                    "Real-time verified availability",
                    "Professional quality photos",
                    "Background-checked hunters",
                    "Smart search and filtering",
                    "Secure payment system",
                    "Professional service guarantee",
                  ].map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs font-bold">✓</span>
                      </div>
                      <span className="text-neutral-700">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
