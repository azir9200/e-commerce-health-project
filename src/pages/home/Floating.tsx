import { motion } from "framer-motion";
import FitnessCube from "../../components/shared/FitnessCube";

const Floating = () => {
  return (
    <div className="w-full pt-16 mt-16">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/k2FqgnNw/dumbbells.jpg"
            alt="Modern gym interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>

        <div className="container-custom relative z-10 px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6"
              >
                Welcome to FitGear
              </motion.span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
                BUILDING THE
                <br />
                <span className="gradient-text">FUTURE OF</span>
                <br />
                FITNESS
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                A e-commerce platform crafted with modern technologies,
                delivering premium gym equipment to fitness enthusiasts
                worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <FitnessCube />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Floating;
