"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search, Users, Clock, Shield } from "lucide-react";
import Button from "../ui/Button";

const CTASection = () => {
  const features = [
    {
      icon: Search,
      text: "Smart search & filtering",
    },
    {
      icon: Shield,
      text: "Verified hunters & listings",
    },
    {
      icon: Clock,
      text: "Find home in 7 days average",
    },
    {
      icon: Users,
      text: "15,000+ satisfied customers",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-white.svg')] opacity-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-400/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Find Your <br />
              <span className="text-secondary-300">Next Home?</span>
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied tenants who found their perfect match.
              Start your house hunting journey today with Kenya's most trusted
              platform.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium text-sm">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button
              size="xl"
              className="bg-white text-primary-700 hover:bg-neutral-50 hover:text-primary-800 shadow-lg hover:shadow-xl px-8 py-4 font-bold"
            >
              Start Your Search Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="xl"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 font-bold"
            >
              Become a House Hunter
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
          >
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Trusted by 15,000+ Kenyans
            </span>
          </motion.div>
        </div>

        {/* Secondary CTA for Hunters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Earn Money as a House Hunter?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Turn your local knowledge into income. Our top hunters earn KSh
              15,000+ monthly helping people find homes in their area.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-300 mb-2">
                  KSh 500-2,000
                </div>
                <div className="text-sm text-primary-100">Per viewing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-300 mb-2">
                  KSh 15,000+
                </div>
                <div className="text-sm text-primary-100">Monthly earnings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-300 mb-2">
                  Flexible
                </div>
                <div className="text-sm text-primary-100">Work schedule</div>
              </div>
            </div>

            <Link to="/hunter-signup">
              <Button
                variant="safari"
                size="lg"
                modern
                className="shadow-lg px-8"
              >
                Apply to Become a Hunter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-primary-200 text-sm">
            Have questions? Contact us at{" "}
            <a
              href="tel:+254-XXX-XXX-XXX"
              className="text-white font-medium hover:text-secondary-300 transition-colors"
            >
              +254-XXX-XXX-XXX
            </a>{" "}
            or{" "}
            <a
              href="mailto:help@spotacrib.co.ke"
              className="text-white font-medium hover:text-secondary-300 transition-colors"
            >
              help@spotacrib.co.ke
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
