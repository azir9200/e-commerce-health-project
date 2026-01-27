import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  MessageCircle,
  Video,
  Star,
  Award,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Target,
  Zap,
} from "lucide-react";
import Design from "./Design";
import Equipment from "./Equipment";
import Resource from "./Resources";

// Modal Components
const ConsultationModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Book Your Free Consultation
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Facility Type
                </label>
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100">
                  <option>Select facility type</option>
                  <option>Corporate Wellness Center</option>
                  <option>University Gym</option>
                  <option>Boutique Training Studio</option>
                  <option>Fire Department</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none"
                  placeholder="Describe your space, goals, and any specific requirements..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const HealthModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Health & Wellness Resources
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Fitness Assessment
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Get a comprehensive fitness evaluation to understand your
                    current health status and set realistic goals.
                  </p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Start Assessment
                  </button>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Nutrition Guide
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Learn about proper nutrition to fuel your workouts and
                    support your fitness journey.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Guide
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Workout Plans
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Access professionally designed workout plans tailored to
                    different fitness levels and goals.
                  </p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Browse Plans
                  </button>
                </div>

                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      Progress Tracking
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Monitor your fitness progress with our comprehensive
                    tracking tools and analytics.
                  </p>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                    Track Progress
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const AppointmentModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Book Your Appointment
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Appointment Type
                </label>
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100">
                  <option>Select appointment type</option>
                  <option>Facility Tour</option>
                  <option>Equipment Consultation</option>
                  <option>Design Consultation</option>
                  <option>Installation Planning</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none"
                  placeholder="Any specific questions or requirements..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Commercial = () => {
  const [showConsultation, setShowConsultation] = useState(false);
  const [showHealth, setShowHealth] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <div className="pt-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-20"
        >
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                COMMERCIAL SOLUTIONS
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-gray-800 leading-tight">
                WORKING WITH{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  FITGEAR
                </span>
              </h1>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At FitGear, we specialize in creating high-performance, highly
                functional training environments tailored to your unique space
                and goals. Whether you're outfitting a corporate wellness
                center, university gym, or boutique training facility, we design
                every inch to deliver maximum efficiency and versatility.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Our process starts with a deep understanding of your vision.
                You'll work directly with a dedicated account manager and our
                expert outfitting team to explore layout concepts that unlock
                your space's full potential. From there, we turn your ideas into
                reality with collaborative planning sessions—either in person or
                virtual— featuring immersive 3D digital renderings of your
                facility.
              </p>

              <h3 className="text-blue-600 font-bold text-xl tracking-wide mb-6">
                WE'RE WITH YOU EVERY STEP OF THE WAY
              </h3>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "/contact")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                CONTACT US
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowConsultation(true)}
                className="bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold hover:from-green-700 hover:to-teal-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Video className="w-5 h-5" />
                BOOK CONSULT
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowHealth(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Star className="w-5 h-5" />
                HEALTH INFO
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAppointment(true)}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-700 hover:to-red-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                BOOK APPT
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/DHLcnFTf/Designs-05.jpg"
                alt="Commercial Gym Equipment"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Modals */}
        <ConsultationModal
          isOpen={showConsultation}
          onClose={() => setShowConsultation(false)}
        />
        <HealthModal isOpen={showHealth} onClose={() => setShowHealth(false)} />
        <AppointmentModal
          isOpen={showAppointment}
          onClose={() => setShowAppointment(false)}
        />

        {/* Other Components */}
        <Design />
        <Equipment />
        <Resource />
      </div>
    </div>
  );
};

export default Commercial;
