import { motion } from "framer-motion";
import {
  ArrowRight,
  Building,
  Dumbbell,
  Users,
  Flame,
  GraduationCap,
} from "lucide-react";

const Design = () => {
  const categories = [
    {
      title: "EDUCATION",
      subtitle: "School & University Gyms",
      image: "https://i.ibb.co/k2FqgnNw/dumbbells.jpg",
      icon: GraduationCap,
      description: "Complete gym solutions for educational institutions",
    },
    {
      title: "STRENGTH & CONDITIONING",
      subtitle: "Professional Training Facilities",
      image: "https://i.ibb.co/S4sX6SzL/treadmill.jpg",
      icon: Dumbbell,
      description: "High-performance equipment for serious athletes",
    },
    {
      title: "FRANCHISES",
      subtitle: "Chain Gym Networks",
      image: "https://i.ibb.co/fwZn2fR/workout-action.jpg",
      icon: Building,
      description: "Scalable solutions for growing fitness brands",
    },
    {
      title: "PERSONAL TRAINING",
      subtitle: "Private Studios",
      image: "https://i.ibb.co/k2FqgnNw/dumbbells.jpg",
      icon: Users,
      description: "Intimate spaces for personalized training",
    },
    {
      title: "FIRE DEPARTMENTS",
      subtitle: "Emergency Services",
      image: "https://i.ibb.co/S4sX6SzL/treadmill.jpg",
      icon: Flame,
      description: "Fitness programs for first responders",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 mt-40 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-purple-100/30" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-8"
        >
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              COMMERCIAL SOLUTIONS
            </motion.span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800">
              GYM DESIGN AND INSTALLATION FOR
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                SCHOOLS, FIRE DEPARTMENTS, STUDIOS AND MORE
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl">
              Transform spaces into high-performance fitness facilities with our
              comprehensive commercial gym design and installation services.
            </p>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2 group"
          >
            START BUILDING
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* IMAGE GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        >
          {categories.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Overlay */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                >
                  <item.icon className="w-6 h-6 text-blue-600" />
                </motion.div>
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-lg font-bold text-gray-800 mb-1"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "#1e40af",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your commercial gym project and create a custom
              solution that meets your specific needs and budget.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Design;
