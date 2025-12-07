"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, User, CreditCard } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    hunterName: string;
  };
  onBookingConfirm: (bookingData: BookingData) => void;
}

interface BookingData {
  propertyId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const BookingModal = ({ isOpen, onClose, property, onBookingConfirm }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  // Generate available dates (next 14 days, excluding past dates)
  const getAvailableDates = () => {
    const dates: Array<{ value: string; label: string; dayName: string }> = [];
    const today = new Date();

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Skip Sundays (day 0)
      if (date.getDay() !== 0) {
        const isoDate = date.toISOString().split("T")[0];
        if (!isoDate) continue;

        dates.push({
          value: isoDate,
          label: date.toLocaleDateString("en-KE", {
            weekday: "long",
            month: "short",
            day: "numeric",
          }),
          dayName: date.toLocaleDateString("en-KE", { weekday: "short" }),
        });
      }
    }
    return dates;
  };

  // Available time slots
  const timeSlots = [
    { value: "09:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
    { value: "17:00", label: "5:00 PM" },
  ];

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedDate("");
      setSelectedTime("");
      setName("");
      setPhone("");
      setEmail("");
      setNotes("");
      setCurrentStep(1);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData: BookingData = {
      propertyId: property.id,
      date: selectedDate,
      time: selectedTime,
      name,
      phone,
      email,
      notes,
    };

    onBookingConfirm(bookingData);
    onClose();
  };

  const canProceedToStep2 = selectedDate && selectedTime;
  const canSubmit = canProceedToStep2 && name && phone && email;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        data-test="booking-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          <Card className="p-0">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">Book Property Viewing</h2>
                <p className="text-neutral-600 mt-1">{property.title}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Steps */}
            <div className="px-6 py-4 bg-neutral-50">
              <div className="flex items-center space-x-4">
                <div
                  className={`flex items-center space-x-2 ${
                    currentStep >= 1 ? "text-safari-600" : "text-neutral-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= 1
                        ? "bg-safari-600 text-white"
                        : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    1
                  </div>
                  <span className="font-medium">Select Date & Time</span>
                </div>
                <div className="flex-1 h-0.5 bg-neutral-200">
                  <div
                    className={`h-full transition-all duration-300 ${
                      currentStep >= 2 ? "bg-safari-600 w-full" : "bg-neutral-200 w-0"
                    }`}
                  />
                </div>
                <div
                  className={`flex items-center space-x-2 ${
                    currentStep >= 2 ? "text-safari-600" : "text-neutral-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= 2
                        ? "bg-safari-600 text-white"
                        : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    2
                  </div>
                  <span className="font-medium">Your Details</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-6">
                {/* Property Info */}
                <div className="bg-safari-50 p-4 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{property.title}</h3>
                      <div className="flex items-center text-neutral-600 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {property.location}
                      </div>
                      <div className="flex items-center text-neutral-600 text-sm">
                        <User className="w-4 h-4 mr-1" />
                        Hunter: {property.hunterName}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-safari-600">KSh 200</div>
                      <div className="text-sm text-neutral-500">Viewing Fee</div>
                    </div>
                  </div>
                </div>

                {/* Step 1: Date & Time Selection */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-3">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Select Date
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {getAvailableDates().map((date) => (
                          <button
                            data-test="booking-date"
                            key={date.value}
                            type="button"
                            onClick={() => setSelectedDate(date.value)}
                            className={`p-3 text-center rounded-lg border-2 transition-all ${
                              selectedDate === date.value
                                ? "border-safari-500 bg-safari-50 text-safari-700"
                                : "border-neutral-200 hover:border-safari-300 hover:bg-safari-50"
                            }`}
                          >
                            <div className="text-xs text-neutral-500 mb-1">{date.dayName}</div>
                            <div className="font-medium">
                              {date.label.split(" ").slice(1).join(" ")}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-3">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Select Time
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            data-test="booking-time"
                            key={time.value}
                            type="button"
                            onClick={() => setSelectedTime(time.value)}
                            className={`p-3 text-center rounded-lg border-2 transition-all ${
                              selectedTime === time.value
                                ? "border-safari-500 bg-safari-50 text-safari-700"
                                : "border-neutral-200 hover:border-safari-300 hover:bg-safari-50"
                            }`}
                          >
                            <div className="font-medium">{time.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Contact Details */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          data-test="booking-name"
                          type="text"
                          id="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                          placeholder="John Doe"
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
                          data-test="booking-phone"
                          type="tel"
                          id="phone"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                          placeholder="+254 7XX XXX XXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        data-test="booking-email"
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                      >
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-safari-500 transition-colors"
                        placeholder="Any specific requirements or questions..."
                      />
                    </div>

                    {/* Booking Summary */}
                    <Card variant="outlined" className="bg-neutral-50">
                      <h4 className="font-semibold text-neutral-900 mb-3">Booking Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Date:</span>
                          <span className="font-medium">
                            {selectedDate &&
                              new Date(selectedDate).toLocaleDateString("en-KE", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Time:</span>
                          <span className="font-medium">
                            {timeSlots.find((t) => t.value === selectedTime)?.label}
                          </span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-neutral-600">Viewing Fee:</span>
                          <span className="font-bold text-safari-600">KSh 200</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-6 border-t border-neutral-200 bg-neutral-50">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-neutral-500" />
                  <span className="text-sm text-neutral-600">
                    Payment via M-Pesa after confirmation
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  {currentStep === 2 && (
                    <Button type="button" variant="ghost" onClick={() => setCurrentStep(1)}>
                      Back
                    </Button>
                  )}

                  {currentStep === 1 ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      disabled={!canProceedToStep2}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button data-test="confirm-booking" type="submit" disabled={!canSubmit}>
                      Confirm Booking
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
