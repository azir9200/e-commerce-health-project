import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";


const About: React.FC = () => {
  return (
    <div className="min-h-screen   mt-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent text-indigo-400 ">
            About FitGear
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-200"
          >
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="w-2 h-10 bg-indigo-500 rounded-full mr-3"></span>
              Welcome to FitGear Store
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              At{" "}
              <span className="font-semibold text-purple-700">
                FitGear Store
              </span>
              , we believe that fitness is not just a goal—it's a lifestyle. We
              are dedicated to providing top-quality fitness equipment and
              accessories to help you stay active, healthy, and strong. Whether
              you are a seasoned athlete or just beginning your fitness journey,
              we have everything you need to achieve your goals.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-200"
          >
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="w-2 h-10 bg-purple-500 rounded-full mr-3"></span>
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              Our mission is to empower individuals to live healthier lives by
              offering a wide range of high-quality fitness products that cater
              to all levels of fitness enthusiasts. We are passionate about
              helping our customers find the perfect gear to suit their needs,
              from weightlifting equipment to yoga accessories.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-200 lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="w-2 h-10 bg-pink-500 rounded-full mr-3"></span>
              Why Choose Us?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Quality Products",
                  description:
                    "We source the best fitness equipment to ensure durability and performance.",
                },
                {
                  title: "Wide Range of Selections",
                  description:
                    "From gym machines to small accessories, we offer a comprehensive selection for every fitness need.",
                },
                {
                  title: "Customer-Centered Experience",
                  description:
                    "Our platform is designed to make shopping for fitness gear effortless and enjoyable.",
                },
                {
                  title: "Expert Support",
                  description:
                    "Our customer support team is knowledgeable and always ready to help you find the right product.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-white p-4 rounded-lg border border-slate-200 shadow hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-200"
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
            <span className="w-2 h-10 bg-indigo-500 rounded-full mr-3"></span>
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Top Fitness Equipment",
                description:
                  "State-of-the-art machines, weights, and workout accessories.",
              },
              {
                title: "Curated Collections",
                description:
                  "Carefully selected fitness gear for strength training, cardio, yoga, and more.",
              },
              {
                title: "Product Details and Reviews",
                description:
                  "Detailed product descriptions and honest customer reviews to help you make informed decisions.",
              },
              {
                title: "Secure Checkout",
                description:
                  "With integrated payment solutions, we ensure a safe and smooth purchasing experience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-200"
          >
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="w-2 h-10 bg-purple-500 rounded-full mr-3"></span>
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              We envision a world where fitness is accessible and enjoyable for
              everyone. By constantly evolving our product offerings and
              enhancing our customer experience, we strive to be your go-to
              fitness partner.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-200"
          >
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="w-2 h-10 bg-pink-500 rounded-full mr-3"></span>
              Meet the Team
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              Our dedicated team is made up of fitness enthusiasts and experts
              who work tirelessly to bring you the best products and advice. We
              are passionate about fitness, and we bring that energy into
              everything we do—from product selection to customer service.
            </p>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 bg-gradient-to-r from-indigo-500/80 to-purple-500/80 p-8 rounded-2xl shadow-lg border border-indigo-400/20 text-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="text-lg leading-relaxed text-white max-w-3xl mx-auto">
            Have any questions or need help? Reach out to our support team at{" "}
            <a
              href="mailto:support@fitgearstore.com"
              className="text-indigo-100 hover:text-white hover:underline transition-colors duration-300 font-medium"
            >
              support@fitgearstore.com
            </a>{" "}
            or visit our FAQ page for quick answers.
          </p>
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-purple-700 font-medium rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center mx-auto"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </motion.section>
      </div>
     
    </div>
  );
};

export default About;
