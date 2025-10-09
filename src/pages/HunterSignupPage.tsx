import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEOHead } from "../hooks/useSEO";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Eye, EyeOff, MapPin, Star, Shield, DollarSign } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Join Spot A Crib - House Hunter Platform",
  url: "https://spotacrib.co.ke/hunter-signup",
  description:
    "Join Spot A Crib as a verified house hunter or sign in to your account. Help Kenyans find their perfect homes while earning money. Apply now to become part of our trusted network.",
  provider: {
    "@type": "Organization",
    name: "Spot A Crib",
    url: "https://spotacrib.co.ke",
  },
  offers: {
    "@type": "JobPosting",
    title: "House Hunter",
    description: "Help people find rental properties in Kenya",
    hiringOrganization: {
      "@type": "Organization",
      name: "Spot A Crib",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KE",
      },
    },
    employmentType: "CONTRACTOR",
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "KES",
      value: {
        "@type": "QuantitativeValue",
        minValue: 2000,
        maxValue: 15000,
        unitText: "per successful match",
      },
    },
  },
};

const HunterSignupPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(isSignUp ? "Sign up" : "Sign in", formData);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn KSh 2,000-15,000",
      description: "Per successful match",
    },
    {
      icon: MapPin,
      title: "Work in Your Area",
      description: "Find properties near you",
    },
    {
      icon: Shield,
      title: "Verified Platform",
      description: "Trusted by thousands",
    },
    {
      icon: Star,
      title: "Build Your Reputation",
      description: "Get rated by clients",
    },
  ];

  return (
    <>
      <SEOHead
        title={
          isSignUp
            ? "Become a House Hunter - Earn Money Helping People Find Homes"
            : "Sign In to Your Hunter Account - Spot A Crib"
        }
        description={
          isSignUp
            ? "Join Spot A Crib as a verified house hunter. Help Kenyans find their perfect homes while earning KSh 2,000-15,000 per successful match. Apply now to become part of our trusted network of local scouts."
            : "Sign in to your house hunter account on Spot A Crib. Access your dashboard, manage your listings, and continue helping people find their perfect homes."
        }
        keywords={[
          "house hunter kenya",
          "property scout jobs",
          "real estate jobs nairobi",
          "part time jobs kenya",
          "property finder jobs",
          "house hunting services",
          isSignUp ? "house hunter signup" : "hunter login",
          "property scout registration",
          "real estate agent kenya",
        ]}
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-gradient-to-br from-safari-50 via-white to-neutral-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Benefits */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                      {isSignUp ? "Become a House Hunter" : "Welcome Back"}
                    </h1>
                    <p className="text-xl text-neutral-600 leading-relaxed">
                      {isSignUp
                        ? "Join Kenya's most trusted property platform. Help people find their perfect homes while earning money in your spare time."
                        : "Sign in to your hunter account and continue helping people find their dream homes."}
                    </p>
                  </motion.div>

                  {isSignUp && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="grid sm:grid-cols-2 gap-6"
                    >
                      {benefits.map((benefit, index) => (
                        <Card key={index} variant="elevated" className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-safari-100 rounded-lg">
                              <benefit.icon className="h-6 w-6 text-safari-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-neutral-900 mb-1">
                                {benefit.title}
                              </h3>
                              <p className="text-sm text-neutral-600">
                                {benefit.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </motion.div>
                  )}
                </div>

                {isSignUp && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-r from-safari-600 to-safari-700 rounded-2xl p-8 text-white"
                  >
                    <h3 className="text-2xl font-bold mb-4">
                      Why Choose Spot A Crib?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-safari-300 rounded-full"></div>
                        <span>Over 10,000 successful matches made</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-safari-300 rounded-full"></div>
                        <span>Flexible working hours</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-safari-300 rounded-full"></div>
                        <span>Complete training provided</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-safari-300 rounded-full"></div>
                        <span>Instant payment on completion</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Right Column - Form */}
              <div className="lg:max-w-md mx-auto w-full">
                <Card variant="elevated" className="p-8">
                  {/* Toggle Buttons */}
                  <div className="flex bg-neutral-100 rounded-lg p-1 mb-8">
                    <button
                      onClick={() => setIsSignUp(true)}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                        isSignUp
                          ? "bg-white text-safari-600 shadow-sm"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      Sign Up
                    </button>
                    <button
                      onClick={() => setIsSignUp(false)}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                        !isSignUp
                          ? "bg-white text-safari-600 shadow-sm"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      Sign In
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <AnimatePresence mode="wait">
                      {isSignUp ? (
                        <motion.div
                          key="signup"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <div>
                            <label
                              htmlFor="fullName"
                              className="block text-sm font-medium text-neutral-700 mb-2"
                            >
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                              placeholder="John Doe"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-neutral-700 mb-2"
                            >
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-neutral-700 mb-2"
                            >
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                              placeholder="+254 7XX XXX XXX"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="location"
                              className="block text-sm font-medium text-neutral-700 mb-2"
                            >
                              Location *
                            </label>
                            <select
                              id="location"
                              name="location"
                              required
                              value={formData.location}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                            >
                              <option value="">Select your area</option>
                              <option value="nairobi-cbd">Nairobi CBD</option>
                              <option value="westlands">Westlands</option>
                              <option value="kilimani">Kilimani</option>
                              <option value="karen">Karen</option>
                              <option value="kileleshwa">Kileleshwa</option>
                              <option value="lavington">Lavington</option>
                              <option value="runda">Runda</option>
                              <option value="gigiri">Gigiri</option>
                              <option value="spring-valley">
                                Spring Valley
                              </option>
                              <option value="muthaiga">Muthaiga</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div>
                            <label
                              htmlFor="experience"
                              className="block text-sm font-medium text-neutral-700 mb-2"
                            >
                              Real Estate Experience
                            </label>
                            <select
                              id="experience"
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                            >
                              <option value="">Select experience level</option>
                              <option value="none">No experience</option>
                              <option value="some">Some experience</option>
                              <option value="experienced">Experienced</option>
                              <option value="professional">
                                Real estate professional
                              </option>
                            </select>
                          </div>

                          <div>
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium text-neutral-700 mb-2"
                            >
                              Password *
                            </label>
                            <div className="relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 pr-12 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                                placeholder="Create a strong password"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                              >
                                {showPassword ? (
                                  <EyeOff className="h-5 w-5" />
                                ) : (
                                  <Eye className="h-5 w-5" />
                                )}
                              </button>
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="confirmPassword"
                              className="block text-sm font-medium text-neutral-700 mb-2"
                            >
                              Confirm Password *
                            </label>
                            <div className="relative">
                              <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 pr-12 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                                placeholder="Confirm your password"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                              >
                                {showConfirmPassword ? (
                                  <EyeOff className="h-5 w-5" />
                                ) : (
                                  <Eye className="h-5 w-5" />
                                )}
                              </button>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <input
                              type="checkbox"
                              id="agreeToTerms"
                              name="agreeToTerms"
                              required
                              checked={formData.agreeToTerms}
                              onChange={handleInputChange}
                              className="mt-1 h-4 w-4 text-safari-600 focus:ring-safari-500 border-neutral-300 rounded"
                            />
                            <label
                              htmlFor="agreeToTerms"
                              className="text-sm text-neutral-600"
                            >
                              I agree to the{" "}
                              <a
                                href="#"
                                className="text-safari-600 hover:text-safari-700 underline"
                              >
                                Terms of Service
                              </a>{" "}
                              and{" "}
                              <a
                                href="#"
                                className="text-safari-600 hover:text-safari-700 underline"
                              >
                                Privacy Policy
                              </a>
                            </label>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="signin"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-neutral-700 mb-2"
                            >
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium text-neutral-700 mb-2"
                            >
                              Password *
                            </label>
                            <div className="relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 pr-12 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                                placeholder="Enter your password"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                              >
                                {showPassword ? (
                                  <EyeOff className="h-5 w-5" />
                                ) : (
                                  <Eye className="h-5 w-5" />
                                )}
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-safari-600 focus:ring-safari-500 border-neutral-300 rounded"
                              />
                              <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-neutral-700"
                              >
                                Remember me
                              </label>
                            </div>

                            <div className="text-sm">
                              <a
                                href="#"
                                className="text-safari-600 hover:text-safari-700 underline"
                              >
                                Forgot your password?
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button type="submit" fullWidth size="lg">
                      {isSignUp
                        ? "Create Hunter Account"
                        : "Sign In to Account"}
                    </Button>
                  </form>

                  <div className="mt-6 text-center text-sm text-neutral-600">
                    {isSignUp ? (
                      <>
                        Already have an account?{" "}
                        <button
                          onClick={() => setIsSignUp(false)}
                          className="text-safari-600 hover:text-safari-700 font-medium underline"
                        >
                          Sign in here
                        </button>
                      </>
                    ) : (
                      <>
                        Don't have an account?{" "}
                        <button
                          onClick={() => setIsSignUp(true)}
                          className="text-safari-600 hover:text-safari-700 font-medium underline"
                        >
                          Sign up here
                        </button>
                      </>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HunterSignupPage;
