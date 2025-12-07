"use client";
import { motion } from "framer-motion";
import { Search, Calendar, Eye, Home, Users, DollarSign } from "lucide-react";

const HowItWorksSection = () => {
  const renterSteps = [
    {
      icon: Search,
      title: "Browse & Filter",
      description: "Search by location, budget, and preferences",
      details: "Use our advanced search to find houses in your preferred area",
    },
    {
      icon: Calendar,
      title: "Book a Viewing",
      description: "Pay a small fee to secure your house tour",
      details: "Choose your preferred viewing time and get hunter contact details",
    },
    {
      icon: Eye,
      title: "View the House",
      description: "Meet your hunter and tour the property",
      details: "Get detailed information and ask questions about the house",
    },
    {
      icon: Home,
      title: "Move In",
      description: "Get direct contact with landlords after viewing",
      details: "Your viewing fee goes toward first month's rent if you take the house",
    },
  ];

  const hunterSteps = [
    {
      icon: Users,
      title: "Get Verified",
      description: "Submit ID, references, pass background check",
      details: "Complete our verification process to build trust",
    },
    {
      icon: Home,
      title: "List Houses",
      description: "Add vacant properties with photos and details",
      details: "Upload quality photos and accurate descriptions",
    },
    {
      icon: Calendar,
      title: "Receive Bookings",
      description: "Get notifications when renters want viewings",
      details: "Manage your schedule and confirm appointments",
    },
    {
      icon: DollarSign,
      title: "Get Paid",
      description: "Earn money directly to your M-Pesa",
      details: "Earn KSh 500-2,000 per viewing plus bonuses",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const StepCard = ({
    step,
    index,
    isHunter = false,
  }: {
    step: any;
    index: number;
    isHunter?: boolean;
  }) => (
    <motion.div variants={itemVariants} className="relative h-full">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Icon at top */}
        <div className="text-center mb-4">
          <div
            className={`w-16 h-16 ${
              isHunter ? "bg-safari-100" : "bg-safari-100"
            } rounded-full flex items-center justify-center mx-auto mb-3`}
          >
            <step.icon className={`w-8 h-8 ${isHunter ? "text-safari-600" : "text-safari-600"}`} />
          </div>
          <span
            className={`text-sm font-bold ${
              isHunter ? "text-safari-600 bg-safari-100" : "text-safari-600 bg-safari-100"
            } px-3 py-1 rounded-full`}
          >
            Step {index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="text-center flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
          <p className="text-neutral-700 mb-4 font-medium leading-relaxed">{step.description}</p>
          <p className="text-sm text-neutral-600 leading-relaxed mt-auto">{step.details}</p>
        </div>
      </div>

      {/* Connector Line */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gradient-to-r from-safari-300 to-safari-500 transform -translate-y-1/2"></div>
      )}
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
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
            Simple, Safe, <span className="text-safari-600">Effective</span> House Hunting
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We've simplified the house hunting process for both renters and property scouts
          </p>
        </motion.div>

        {/* For Renters */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-4">
              For <span className="text-safari-600">House Hunters</span>
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find your perfect home in just 4 simple steps
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {renterSteps.map((step, index) => (
              <StepCard key={index} step={step} index={index} isHunter={false} />
            ))}
          </motion.div>
        </div>

        {/* For Hunters */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-4">
              For <span className="text-safari-600">Property Scouts</span>
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Turn your local knowledge into income with these simple steps
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {hunterSteps.map((step, index) => (
              <StepCard key={index} step={step} index={index} isHunter={true} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
