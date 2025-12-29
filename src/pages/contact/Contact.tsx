// import { useForm } from "react-hook-form";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardTitle,
//   CardDescription,
// } from "../../components/ui/card";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";
// import { Button } from "../../components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../../components/ui/form";
// import { Facebook, Instagram, Twitter } from "lucide-react";
// import toast from "react-hot-toast";
// import NewsLetter from "../home/NewsLetter";

// type ContactFormValues = {
//   name: string;
//   email: string;
//   message: string;
// };

// const Contact = () => {
//   const form = useForm<ContactFormValues>({
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   const onSubmit = (data: ContactFormValues) => {
//     console.log(data);
//     toast.success(
//       "Your message has been sent. We'll respond as soon as possible. Thank you!"
//     );
//     form.reset();
//   };

//   return (
//     <div>
//       <div className="min-h-screen flex flex-col items-center md:mt-0 mt-16 justify-center py-10 px-4 bg-white">
//         <h1 className="text-4xl font-bold mb-8 text-gradient">Contact Us</h1>

//         <Card className="max-w-4xl w-full shadow-xl border border-gray-200 bg-white">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
//             {/* Contact Information */}
//             <div className="bg-gradient-to-br from-purple-500 to-[#2453DF] p-8 rounded-l-lg text-white">
//               <CardHeader className="p-0 pb-6">
//                 <CardTitle className="text-2xl font-semibold mb-2">
//                   Get in Touch
//                 </CardTitle>
//                 <CardDescription className="text-white/90 text-base">
//                   Have questions or want to reach out? We'd love to hear from
//                   you!
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="p-0 space-y-6">
//                 <div>
//                   <h3 className="text-lg font-medium">Address:</h3>
//                   <p className="opacity-90">
//                     123 Fitness Street, Lisbon, Portugal
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-medium">Phone:</h3>
//                   <p className="opacity-90">+351 123 456 789</p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-medium">Email:</h3>
//                   <p className="opacity-90">info@fitgear.com</p>
//                 </div>

//                 <div className="pt-4">
//                   <p className="mb-4 font-medium">Connect with us:</p>
//                   <div className="flex space-x-4">
//                     <a
//                       href="#"
//                       className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
//                       aria-label="Facebook"
//                     >
//                       <Facebook size={20} />
//                     </a>
//                     <a
//                       href="#"
//                       className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
//                       aria-label="Twitter"
//                     >
//                       <Twitter size={20} />
//                     </a>
//                     <a
//                       href="#"
//                       className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
//                       aria-label="Instagram"
//                     >
//                       <Instagram size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </div>

//             {/* Contact Form */}
//             <div className="p-8">
//               <CardHeader className="p-0 pb-6">
//                 <CardTitle className="text-2xl font-semibold text-gray-800">
//                   Send a Message
//                 </CardTitle>
//                 <CardDescription>
//                   Fill out the form below and we'll get back to you soon
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="p-0">
//                 <Form {...form}>
//                   <form
//                     onSubmit={form.handleSubmit(onSubmit)}
//                     className="space-y-4"
//                   >
//                     <FormField
//                       control={form.control}
//                       name="name"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Name</FormLabel>
//                           <FormControl>
//                             <Input placeholder="Your Name" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="email"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Email</FormLabel>
//                           <FormControl>
//                             <Input
//                               type="email"
//                               placeholder="Your Email"
//                               {...field}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="message"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Message</FormLabel>
//                           <FormControl>
//                             <Textarea
//                               placeholder="Your Message"
//                               className="resize-none"
//                               {...field}
//                               rows={4}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <Button
//                       type="submit"
//                       className="w-full bg-gradient-to-r from-purple-500 to-[#2453DF] text-white hover:from-purple-600 hover:to-[#2453DF]"
//                     >
//                       Submit
//                     </Button>
//                   </form>
//                 </Form>
//               </CardContent>
//             </div>
//           </div>
//         </Card>
//       </div>
//       <NewsLetter />
//     </div>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import { useState } from "react";
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
} from "lucide-react";
import toast from "react-hot-toast";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link
    const mailtoLink = `mailto:aziruddin83@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contact from IronForge"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      toast("Complete sending your message in your email app.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "aziruddin83@gmail.com",
      description: "We respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Fitness Street",
      description: "New York, NY 10001",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "9:00 AM - 6:00 PM",
      description: "Monday to Friday",
    },
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Quick Response",
      description:
        "We pride ourselves on responding to all inquiries within 24 hours, ensuring you never wait long for answers.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our support team consists of fitness enthusiasts who understand your needs and can provide tailored recommendations.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Premium customers enjoy round-the-clock support for urgent matters and technical assistance.",
    },
  ];

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day money-back guarantee on all products. Items must be in original condition with packaging.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes! We ship to over 50 countries worldwide. Shipping times and costs vary by location.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Absolutely! Once your order ships, you will receive a tracking number via email.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "We partner with local professionals in major cities to offer installation for larger equipment.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-card to-background relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6"
            >
              GET IN TOUCH
            </motion.span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
              LET'S <span className="gradient-text">CONNECT</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our products or want to discuss a
              partnership? We'd love to hear from you. Reach out and let's start
              a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-glass rounded-2xl p-6 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors"
                >
                  <info.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-display text-xl mb-2">{info.title}</h3>
                <p className="font-medium text-foreground mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact Form & Map Section */}
      <AnimatedSection className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <span className="text-primary font-medium text-sm tracking-wider">
                SEND A MESSAGE
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 mb-8">
                DROP US A LINE
              </h2>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-secondary border-border h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
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
                      className="bg-secondary border-border h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="bg-secondary border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
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
                    className="bg-secondary border-border resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-primary text-primary-foreground font-display text-lg tracking-wide hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        SEND MESSAGE
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </div>

            {/* Map / Location Visual */}
            <div>
              <span className="text-primary font-medium text-sm tracking-wider">
                OUR LOCATION
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 mb-8">
                FIND US HERE
              </h2>

              <div className="relative rounded-2xl overflow-hidden h-[400px] bg-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
                    >
                      <MapPin className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="font-display text-2xl mb-2">
                      NEW YORK HEADQUARTERS
                    </h3>
                    <p className="text-muted-foreground">
                      123 Fitness Street, NY 10001
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
              </div>

              <div className="mt-8 p-6 card-glass rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">
                      Open Now
                    </span>{" "}
                    — We're available to answer your questions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Support Features */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider">
              WHY CONTACT US?
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">
              WORLD-CLASS SUPPORT
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">
              COMMON QUESTIONS
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.question}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-secondary/30 border border-border/50"
              >
                <h4 className="font-display text-xl mb-2 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {faq.question}
                </h4>
                <p className="text-muted-foreground pl-8">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-6">
                READY TO START YOUR FITNESS JOURNEY?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Don't wait any longer. Get in touch with us today and let us
                help you find the perfect equipment for your goals.
              </p>
              <motion.a
                href="mailto:aziruddin83@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-display text-lg tracking-wide"
              >
                <Mail className="w-5 h-5" />
                EMAIL US NOW
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default Contact;
