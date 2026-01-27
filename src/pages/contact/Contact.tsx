import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Headphones,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import toast from "react-hot-toast";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:aziruddin83@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contact from IronForge",
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! Check your email app to complete sending.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "aziruddin83@gmail.com",
      description: "We respond within 24 hours",
      action: () => (window.location.href = "mailto:aziruddin83@gmail.com"),
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm EST",
      action: () => (window.location.href = "tel:+15551234567"),
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Fitness Street",
      description: "New York, NY 10001",
      action: () =>
        window.open(
          "https://maps.google.com/?q=123+Fitness+Street+New+York",
          "_blank",
        ),
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "9:00 AM - 6:00 PM",
      description: "Monday to Friday",
      action: () => toast("We are open Mon-Fri, 9am-6pm EST"),
    },
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Quick Response",
      description:
        "We pride ourselves on responding to all inquiries within 24 hours, ensuring you never wait long for answers.",
      link: "/",
      linkText: "Get Started",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our support team consists of fitness enthusiasts who understand your needs and can provide tailored recommendations.",
      link: "/about",
      linkText: "Meet Our Team",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Premium customers enjoy round-the-clock support for urgent matters and technical assistance.",
      link: "/product-page",
      linkText: "Explore Products",
    },
  ];

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day money-back guarantee on all products. Items must be in original condition with packaging.",
      action: () => navigate("/about"),
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes! We ship to over 50 countries worldwide. Shipping times and costs vary by location.",
      action: () => navigate("/product-page"),
    },
    {
      question: "Can I track my order?",
      answer:
        "Absolutely! Once your order ships, you will receive a tracking number via email.",
      action: () => navigate("/"),
    },
    {
      question: "Do you offer installation services?",
      answer:
        "We partner with local professionals in major cities to offer installation for larger equipment.",
      action: () => navigate("/commercial"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardHoverVariants = {
    whileHover: {
      y: -12,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const iconFloatVariants = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const backgroundElements = [
    { delay: 0, size: 200, opacity: 0.08, top: "10%", left: "-5%" },
    { delay: 0.2, size: 150, opacity: 0.06, top: "60%", right: "-8%" },
    { delay: 0.4, size: 250, opacity: 0.07, top: "50%", left: "50%" },
    { delay: 0.6, size: 180, opacity: 0.05, bottom: "-10%", right: "10%" },
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-90" />
        {backgroundElements.map((element, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: element.opacity,
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: element.delay,
            }}
            className="absolute rounded-full blur-3xl"
            style={{
              width: element.size,
              height: element.size,
              top: element.top,
              left: element.left,
              right: element.right,
              bottom: element.bottom,
              background:
                "linear-gradient(135deg, var(--primary), var(--primary)/50))",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/15 border border-primary/30 mb-8 backdrop-blur-md"
            >
              <Star className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary text-sm font-semibold tracking-wider">
                GET IN TOUCH
              </span>
              <Star className="w-4 h-4 text-primary animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-foreground"
            >
              LET'S{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                CONNECT
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Have questions about our premium fitness products or want to
              discuss a partnership? We're here to help! Reach out and let's
              create something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .querySelector("form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/")}
                className="px-8 py-4 rounded-full border-2 border-primary/30 text-foreground font-semibold text-lg hover:border-primary hover:bg-primary/5 transition-all"
              >
                Back to Home
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <AnimatedSection className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info) => (
              <motion.button
                key={info.title}
                variants={itemVariants}
                {...cardHoverVariants}
                onClick={info.action}
                className="group text-left p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md border border-primary/10 hover:border-primary/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-5 group-hover:from-primary/40 group-hover:to-primary/20 transition-all"
                >
                  <info.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-bold text-xl mb-3 text-foreground">
                  {info.title}
                </h3>
                <p className="font-semibold text-foreground mb-2">
                  {info.value}
                </p>
                <p className="text-sm text-muted-foreground group-hover:text-primary/60 transition-colors">
                  {info.description}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact Form & Map Section */}
      <AnimatedSection className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-primary font-bold text-sm tracking-widest uppercase flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  SEND A MESSAGE
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
                  DROP US A LINE
                </h2>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ y: -2 }} className="space-y-3">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-foreground block"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-card/40 border-primary/20 h-12 rounded-xl focus:border-primary/60 focus:bg-card/60 backdrop-blur-sm transition-all"
                    />
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} className="space-y-3">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-foreground block"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-card/40 border-primary/20 h-12 rounded-xl focus:border-primary/60 focus:bg-card/60 backdrop-blur-sm transition-all"
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ y: -2 }} className="space-y-3">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-foreground block"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="bg-card/40 border-primary/20 h-12 rounded-xl focus:border-primary/60 focus:bg-card/60 backdrop-blur-sm transition-all"
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="space-y-3">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-foreground block"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry..."
                    required
                    rows={6}
                    className="bg-card/40 border-primary/20 rounded-xl focus:border-primary/60 focus:bg-card/60 backdrop-blur-sm transition-all resize-none"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-lg rounded-xl hover:shadow-lg transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-6 h-6 border-3 border-primary-foreground border-t-transparent rounded-full"
                      />
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        SEND MESSAGE
                      </span>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Map / Location Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-primary font-bold text-sm tracking-widest uppercase flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  OUR LOCATION
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">
                  FIND US HERE
                </h2>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden h-[450px] bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 mb-6 cursor-pointer group shadow-lg hover:shadow-2xl transition-all"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=123+Fitness+Street+New+York",
                    "_blank",
                  )
                }
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:from-primary/50 group-hover:to-primary/30 transition-all"
                    >
                      <MapPin className="w-12 h-12 text-primary" />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-3 text-foreground">
                      NEW YORK HEADQUARTERS
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      123 Fitness Street, NY 10001
                    </p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-center gap-2 text-primary mt-4 font-semibold"
                    >
                      View on Maps <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent pointer-events-none" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-6 rounded-2xl bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-primary flex-shrink-0"
                  />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">
                      Open Now
                    </span>{" "}
                    — We're available to answer your questions and assist you
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Support Features */}
      <AnimatedSection className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold text-sm tracking-widest uppercase"
            >
              WHY CONTACT US?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mt-4 text-foreground"
            >
              WORLD-CLASS SUPPORT
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                {...cardHoverVariants}
                onClick={() => navigate(feature.link)}
                className="p-8 rounded-3xl bg-gradient-to-br from-card/60 to-card/30 border border-primary/15 hover:border-primary/40 transition-all cursor-pointer group backdrop-blur-sm shadow-sm hover:shadow-xl"
              >
                <motion.div
                  variants={iconFloatVariants}
                  animate="animate"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6 group-hover:from-primary/40 group-hover:to-primary/20 transition-all"
                >
                  <feature.icon className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary font-semibold group-hover:text-primary/80 transition-colors"
                >
                  {feature.linkText} <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold text-sm tracking-widest uppercase"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mt-4 text-foreground"
            >
              COMMON QUESTIONS
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq) => (
              <motion.button
                key={faq.question}
                variants={itemVariants}
                onClick={faq.action}
                className="w-full p-8 rounded-2xl bg-gradient-to-r from-card/50 to-card/30 border border-primary/15 hover:border-primary/40 text-left transition-all hover:shadow-lg backdrop-blur-sm group"
              >
                <h4 className="text-xl font-bold mb-4 flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h4>
                <p className="text-muted-foreground pl-9 leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {faq.answer}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <div className="flex items-center justify-center  bg-slate-400 p-4 mb-8 mx-4 md:mx-6 lg:mx-8 rounded-lg hover:bg-slate-500 cursor-pointer transition-colors duration-300 font-semibold text-lg text-white">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/product-page")}
          className="px-8 py-4 rounded-full border-2 border-white font-bold text-lg hover:bg-white/10 transition-all"
        >
          <span className=" flex items-center justify-center gap-2">
            EXPLORE PRODUCTS <ArrowRight className="w-5 h-5" />
          </span>
        </motion.button>
      </div>

      {/* Footer CTA */}
      <AnimatedSection className="py-16 px-4 md:px-6 lg:px-8 border-t border-primary/10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <motion.div variants={itemVariants} className="p-6">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
              >
                <Phone className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-bold text-lg mb-2">Quick Call</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
              >
                <Mail className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-bold text-lg mb-2">Email Support</h3>
              <p className="text-muted-foreground">aziruddin83@gmail.com</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
              >
                <Clock className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-bold text-lg mb-2">Business Hours</h3>
              <p className="text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default Contact;
