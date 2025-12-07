"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Marketing Manager",
      location: "Nairobi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      rating: 5,
      text: "I found my perfect 2-bedroom apartment in Kilimani within 3 days! The hunter was professional, showed me 4 great options, and I didn't have to deal with any fake listings. Worth every shilling.",
      house: "2BR Apartment, Kilimani",
      savings: "Saved 2 weeks of searching",
    },
    {
      name: "David Kimani",
      role: "Software Developer",
      location: "Mombasa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      rating: 5,
      text: "As someone who relocated from Nairobi to Mombasa for work, I was worried about finding a good place remotely. The hunter did virtual tours for me and I secured my house before even arriving in Mombasa!",
      house: "1BR Apartment, Nyali",
      savings: "Found house remotely",
    },
    {
      name: "Grace Akinyi",
      role: "University Student",
      location: "Kisumu",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
      rating: 5,
      text: "Best decision ever! I was tired of scrolling through Facebook groups with fake houses. Found a clean bedsitter near my campus with all amenities. The hunter even helped me negotiate the rent!",
      house: "Bedsitter, Kondele",
      savings: "Negotiated rent down by 15%",
    },
    {
      name: "James Mwangi",
      role: "Hunter - Westlands",
      location: "Nairobi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      rating: 5,
      text: "Being a house hunter has changed my life. I earn KSh 18,000 monthly helping people find homes in Westlands. The platform is easy to use and payments are always on time via M-Pesa.",
      house: "Verified Hunter",
      savings: "Earns KSh 18k monthly",
      isHunter: true,
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
            What Our <span className="text-primary-600">Users</span> Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real stories from satisfied renters and successful house hunters
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              data-test="testimonial"
              key={index}
              variants={itemVariants}
              className={`relative bg-gradient-to-br ${
                testimonial.isHunter
                  ? "from-secondary-50 to-secondary-100/50"
                  : "from-primary-50 to-primary-100/50"
              } p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* Quote Icon */}
              <div
                className={`absolute top-6 right-6 w-8 h-8 ${
                  testimonial.isHunter ? "text-secondary-300" : "text-primary-300"
                }`}
              >
                <Quote className="w-full h-full" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-neutral-700 text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-neutral-300 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>

              {/* House Info */}
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-600">
                    {testimonial.isHunter ? "Status:" : "Found:"}
                  </span>
                  <span
                    className={`font-medium ${
                      testimonial.isHunter ? "text-secondary-600" : "text-primary-600"
                    }`}
                  >
                    {testimonial.house}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-neutral-600">
                    {testimonial.isHunter ? "Income:" : "Benefit:"}
                  </span>
                  <span className="font-medium text-accent-600">{testimonial.savings}</span>
                </div>
              </div>

              {/* Hunter Badge */}
              {testimonial.isHunter && (
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    House Hunter
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-neutral-900">4.9/5</div>
              <div className="text-sm text-neutral-600">Average Rating</div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <div className="text-2xl font-bold text-neutral-900">2,500+</div>
              <div className="text-sm text-neutral-600">Happy Reviews</div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="text-2xl font-bold text-neutral-900">98%</div>
              <div className="text-sm text-neutral-600">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
