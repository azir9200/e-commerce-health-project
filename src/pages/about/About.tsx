import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Shield,
  Users,
  Zap,
  Heart,
  Brain,
  Target,
  TrendingUp,
  Dumbbell,
  Timer,
} from "lucide-react";

import AnimatedSection from "../contact/AnimatedSection";

const About = () => {
  const frontendTech = [
    {
      name: "React.js",
      description: "Component-based UI library for building dynamic interfaces",
    },
    { name: "TypeScript", description: "Type-safe JavaScript for robust code" },
    {
      name: "Redux Toolkit",
      description: "State management with predictable data flow",
    },
    {
      name: "Shadcn/UI",
      description: "Beautifully designed component library",
    },
    { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    { name: "Framer Motion", description: "Production-ready motion library" },
  ];

  const backendTech = [
    {
      name: "Node.js",
      description: "JavaScript runtime for server-side development",
    },
    { name: "Express.js", description: "Fast, minimalist web framework" },
    {
      name: "MongoDB",
      description: "NoSQL database for flexible data storage",
    },
    { name: "Mongoose", description: "Elegant MongoDB object modeling" },
    { name: "JWT", description: "Secure token-based authentication" },
    { name: "Bcrypt", description: "Password hashing for security" },
  ];

  const newsItems = [
    {
      title: "New Smart Treadmill Collection",
      date: "Dec 2024",
      description:
        "Experience our latest AI-powered treadmills with real-time coaching and adaptive workouts.",
      image: "https://i.ibb.co/S4sX6SzL/treadmill.jpg",
    },
    {
      title: "Premium Dumbbell Sets Launch",
      date: "Nov 2024",
      description:
        "Introducing ergonomic rubber-coated dumbbells designed for maximum grip and durability.",
      image: "https://i.ibb.co/k2FqgnNw/dumbbells.jpg",
    },
    {
      title: "Kettlebell Pro Series",
      date: "Oct 2024",
      description:
        "Competition-grade kettlebells now available in our exclusive pro series lineup.",
      image: "https://i.ibb.co/fwZn2fR/workout-action.jpg",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description:
        "Regular exercise with gym equipment strengthens your heart, improves blood circulation, and reduces the risk of heart disease significantly.",
    },
    {
      icon: Brain,
      title: "Mental Wellness",
      description:
        "Physical activity releases endorphins that combat stress, anxiety, and depression while improving cognitive function and memory.",
    },
    {
      icon: Target,
      title: "Strength Building",
      description:
        "Resistance training with weights builds lean muscle mass, increases bone density, and boosts your metabolic rate.",
    },
    {
      icon: TrendingUp,
      title: "Performance Enhancement",
      description:
        "Quality gym equipment enables progressive overload, helping you continuously improve your fitness levels and athletic performance.",
    },
    {
      icon: Timer,
      title: "Time Efficiency",
      description:
        "Home gym equipment allows you to workout anytime, eliminating commute time and gym membership constraints.",
    },
    {
      icon: Dumbbell,
      title: "Versatile Training",
      description:
        "Modern gym equipment supports diverse workout routines from HIIT to strength training, ensuring complete fitness coverage.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
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
              ABOUT OUR PROJECT
            </motion.span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
              BUILDING THE
              <br />
              <span className="gradient-text">FUTURE OF</span>
              <br />
              FITNESS
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              A full-stack e-commerce platform crafted with modern technologies,
              delivering premium gym equipment to fitness enthusiasts worldwide.
            </p>
          </motion.div>
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

      {/* Project Overview */}
      <AnimatedSection className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium text-sm tracking-wider">
                PROJECT OVERVIEW
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
                A COMPREHENSIVE E-COMMERCE SOLUTION
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  IronForge represents the culmination of modern web development
                  practices, combining a powerful React frontend with a robust
                  Node.js backend. This full-stack application demonstrates
                  enterprise-level architecture while maintaining clean,
                  maintainable code.
                </p>
                <p>
                  The platform features complete user authentication with
                  role-based access control, separating customer and
                  administrator experiences. Users can browse products, manage
                  their carts, and complete purchases, while administrators have
                  full control over inventory, orders, and user management.
                </p>
                <p>
                  Built with scalability in mind, the application utilizes
                  MongoDB for flexible data storage, Express.js for efficient
                  API routing, and Redux for predictable state management across
                  the application.
                </p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden glow-effect"
            >
              <img
                src="https://i.ibb.co/PZBzv7bS/tech-stack.jpg"
                alt="Development workspace"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tech Stack Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider">
              TECHNOLOGY
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">
              POWERED BY MODERN TECH
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Frontend */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card-glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl">FRONTEND STACK</h3>
                  <p className="text-muted-foreground">
                    Client-side technologies
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                {frontendTech.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Zap className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">{tech.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card-glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Server className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl">BACKEND STACK</h3>
                  <p className="text-muted-foreground">
                    Server-side technologies
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                {backendTech.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Database className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">{tech.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: Users,
                title: "User & Admin Roles",
                desc: "Complete RBAC implementation",
              },
              {
                icon: Shield,
                title: "Secure Auth",
                desc: "JWT + Bcrypt protection",
              },
              {
                icon: Database,
                title: "MongoDB Atlas",
                desc: "Cloud database hosting",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card-glass rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-xl mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider">
              WHY GYM EQUIPMENT?
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">
              TRANSFORM YOUR LIFE
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Discover the incredible benefits of incorporating quality gym
              equipment into your fitness journey.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-border/50 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors"
                >
                  <benefit.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-display text-2xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Featured Image */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <img
                src="https://i.ibb.co/fwZn2fR/workout-action.jpg"
                alt="Intense workout"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  PEAK PERFORMANCE
                </span>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-medium text-sm tracking-wider">
                OUR MISSION
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
                EMPOWERING ATHLETES WORLDWIDE
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At IronForge, we believe that everyone deserves access to
                  premium fitness equipment. Our mission is to break down
                  barriers to fitness by providing high-quality, durable, and
                  affordable gym equipment that helps you achieve your goals.
                </p>
                <p>
                  Whether you are a seasoned athlete or just starting your
                  fitness journey, our carefully curated selection of equipment
                  is designed to meet your needs and exceed your expectations.
                </p>
              </div>
              <motion.div
                className="flex gap-8 mt-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { value: "10K+", label: "Products Sold" },
                  { value: "50+", label: "Countries" },
                  { value: "99%", label: "Satisfaction" },
                ].map((stat) => (
                  <motion.div key={stat.label} variants={itemVariants}>
                    <div className="font-display text-3xl text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Latest News */}
      <AnimatedSection className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider">
              LATEST UPDATES
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">
              PRODUCT NEWS
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {newsItems.map((item) => (
              <motion.article
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group rounded-2xl overflow-hidden bg-secondary/30 border border-border/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    {item.date}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default About;
