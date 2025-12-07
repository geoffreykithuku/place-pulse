"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Shield,
  Upload,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Star,
} from "lucide-react";
import Button from "../ui/Button";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  idNumber: string;
  password: string;
  confirmPassword: string;
  profilePhoto: File | null;
  idDocument: File | null;
  agreeToTerms: boolean;
  agreeToBackground: boolean;
}

const HunterSignupForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "beginner",
    idNumber: "",
    password: "",
    confirmPassword: "",
    profilePhoto: null,
    idDocument: null,
    agreeToTerms: false,
    agreeToBackground: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const kenyanLocations = [
    "Nairobi",
    "Mombasa",
    "Kisumu",
    "Nakuru",
    "Eldoret",
    "Thika",
    "Machakos",
    "Meru",
    "Nyeri",
    "Kericho",
    "Kitale",
    "Garissa",
    "Kakamega",
    "Malindi",
  ];

  const experienceLevels = [
    { value: "beginner", label: "Beginner (0-1 years)", description: "New to house hunting" },
    {
      value: "intermediate",
      label: "Intermediate (1-3 years)",
      description: "Some experience helping people find homes",
    },
    {
      value: "experienced",
      label: "Experienced (3+ years)",
      description: "Seasoned house hunter with proven track record",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof FormData) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, [fieldName]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // TODO: Send formData to API endpoint
    // console.log('Form submitted:', formData);
    setIsSubmitting(false);
    // Handle success/error states here
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.fullName && formData.email && formData.phone && formData.location;
      case 2:
        return (
          formData.experience &&
          formData.idNumber &&
          formData.password &&
          formData.confirmPassword &&
          formData.password === formData.confirmPassword
        );
      case 3:
        return formData.agreeToTerms && formData.agreeToBackground;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-safari-50 py-12 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-400/10 to-safari-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-safari-100 to-secondary-100 rounded-full text-safari-800 text-sm font-medium border border-safari-200/50 mb-6">
            <Shield className="w-4 h-4 mr-2" />
            <span className="font-swahili mr-2">Jiunge nasi</span>
            <span className="text-neutral-600">• Join our team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-neutral-900 mb-4">
            Become a <span className="gradient-text-safari">Verified</span> House Hunter
          </h1>

          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Help Kenyans find their perfect homes while earning money. Join our trusted network of
            local house scouts.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300
                  ${
                    currentStep >= step
                      ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-glow"
                      : "bg-neutral-200 text-neutral-500"
                  }
                `}
                >
                  {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`
                    w-16 h-1 mx-2 rounded-full transition-all duration-300
                    ${currentStep > step ? "bg-gradient-to-r from-primary-600 to-secondary-600" : "bg-neutral-200"}
                  `}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-8 rounded-3xl shadow-hard border border-white/30"
        >
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Personal Information</h2>
                  <p className="text-neutral-600">Tell us about yourself</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-neutral-200/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-neutral-200/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-neutral-200/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="+254 7XX XXX XXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Primary Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-neutral-200/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm appearance-none"
                        required
                      >
                        <option value="">Select your location</option>
                        {kenyanLocations.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Professional Information */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Professional Details</h2>
                  <p className="text-neutral-600">Help us understand your experience</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-4">
                    Experience Level *
                  </label>
                  <div className="space-y-3">
                    {experienceLevels.map((level) => (
                      <label
                        key={level.value}
                        className="flex items-start p-4 border-2 border-neutral-200/50 rounded-xl cursor-pointer hover:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                      >
                        <input
                          type="radio"
                          name="experience"
                          value={level.value}
                          checked={formData.experience === level.value}
                          onChange={handleInputChange}
                          className="mt-1 text-primary-600 focus:ring-primary-500"
                        />
                        <div className="ml-3">
                          <div className="font-medium text-neutral-900">{level.label}</div>
                          <div className="text-sm text-neutral-600">{level.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    National ID Number *
                  </label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <input
                      type="text"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-neutral-200/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your ID number"
                      required
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Required for verification purposes
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-4 pr-10 py-3 border-2 border-neutral-200/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="Create a strong password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-4 pr-10 py-3 border-2 border-neutral-200/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <p className="text-xs text-kenyan-600 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Passwords do not match
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Documents & Agreement */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                    Documents & Agreement
                  </h2>
                  <p className="text-neutral-600">Final step to complete your application</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Profile Photo (Optional)
                    </label>
                    <div className="border-2 border-dashed border-neutral-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors">
                      <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "profilePhoto")}
                        className="hidden"
                        id="profilePhoto"
                      />
                      <label htmlFor="profilePhoto" className="cursor-pointer">
                        <span className="text-sm text-neutral-600">Click to upload photo</span>
                        <p className="text-xs text-neutral-500 mt-1">PNG, JPG up to 5MB</p>
                      </label>
                      {formData.profilePhoto && (
                        <p className="text-xs text-accent-600 mt-2 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {formData.profilePhoto.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      ID Document Copy *
                    </label>
                    <div className="border-2 border-dashed border-neutral-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors">
                      <Shield className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => handleFileChange(e, "idDocument")}
                        className="hidden"
                        id="idDocument"
                        required
                      />
                      <label htmlFor="idDocument" className="cursor-pointer">
                        <span className="text-sm text-neutral-600">Upload ID copy</span>
                        <p className="text-xs text-neutral-500 mt-1">PNG, JPG, PDF up to 10MB</p>
                      </label>
                      {formData.idDocument && (
                        <p className="text-xs text-accent-600 mt-2 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {formData.idDocument.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start p-4 border-2 border-neutral-200/50 rounded-xl cursor-pointer hover:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 text-primary-600 focus:ring-primary-500"
                      required
                    />
                    <div className="ml-3 text-sm">
                      <span className="text-neutral-900">I agree to the </span>
                      <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                        Terms of Service
                      </a>
                      <span className="text-neutral-900"> and </span>
                      <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                        Privacy Policy
                      </a>
                    </div>
                  </label>

                  <label className="flex items-start p-4 border-2 border-neutral-200/50 rounded-xl cursor-pointer hover:border-primary-300 transition-all duration-200 bg-white/80 backdrop-blur-sm">
                    <input
                      type="checkbox"
                      name="agreeToBackground"
                      checked={formData.agreeToBackground}
                      onChange={handleInputChange}
                      className="mt-1 text-primary-600 focus:ring-primary-500"
                      required
                    />
                    <div className="ml-3 text-sm text-neutral-900">
                      I consent to background verification checks for platform safety and trust
                    </div>
                  </label>
                </div>

                {/* Benefits Preview */}
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-200/50">
                  <h3 className="font-semibold text-neutral-900 mb-3 flex items-center">
                    <Star className="w-5 h-5 text-secondary-600 mr-2" />
                    What you'll get as a verified hunter:
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-600 mr-2" />
                      Earn KSh 2,000 - 15,000 per successful house match
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-600 mr-2" />
                      Access to exclusive client leads in your area
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-600 mr-2" />
                      Professional training and support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-600 mr-2" />
                      Verified badge and profile visibility
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-neutral-200">
              <div>
                {currentStep > 1 && (
                  <Button type="button" variant="ghost" onClick={prevStep} className="px-6">
                    Previous
                  </Button>
                )}
              </div>

              <div className="flex gap-3">
                {currentStep < 3 ? (
                  <Button
                    type="button"
                    variant="primary"
                    onClick={nextStep}
                    disabled={!isStepValid(currentStep)}
                    modern
                    className="px-8"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="gradient"
                    loading={isSubmitting}
                    disabled={!isStepValid(currentStep)}
                    modern
                    glow
                    className="px-8"
                  >
                    {isSubmitting ? "Submitting..." : "Complete Application"}
                  </Button>
                )}
              </div>
            </div>
          </form>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 text-sm text-neutral-500"
        >
          <p>
            <span className="font-swahili italic">"Kazi ya mkono, haina ubaya"</span> - Hard work
            pays off
          </p>
          <p className="mt-2">
            Applications are reviewed within 2-3 business days. You'll receive an email confirmation
            once approved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HunterSignupForm;
