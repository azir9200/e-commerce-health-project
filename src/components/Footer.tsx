// import { FaPaperPlane } from "react-icons/fa";
// import qrCode from "../../src/assets/assets/qrCode.png";
// import googlePlay from "../../src/assets/assets/googlePlay.png";
// import appStore from "../../src/assets/assets/appstore.png";

// import FooterSection from "./shareHome/FooterSection";

// const Footer = () => {
//   const Accounts = [
//     {
//       title: "My Profile",
//       href: "/my-profile",
//     },

//     {
//       title: "Login/Register",
//       href: "/login",
//     },

//     {
//       title: "Cart",
//       href: "/cart",
//     },
//     {
//       title: "All products",
//       href: "/allproduct",
//     },
//   ];
//   const QuickLinks = [
//     {
//       title: "Privacy Policy",
//       href: "/login",
//     },
//     {
//       title: "Terms of Use",
//       href: "/termsOfUse",
//     },
//     {
//       title: "FAQ",
//       href: "/FAQ",
//     },
//     {
//       title: "Contact",
//       href: "/contact",
//     },
//   ];
//   const Support = [
//     {
//       title: "Dhonia,Savar, Dhaka,  DH 1515, Bangladesh.",
//     },
//     {
//       title: "carbazaar@gmail.com",
//     },
//     {
//       title: "+8801640011818",
//     },
//   ];

//   return (
//     <section className="text-white bg-black">
//       <footer className=" max-w-7xl px-4 md:px-0 mx-auto grid grid-cols-1 gap-5 py-10 lg:grid-cols-5">
//         <div>
//           <p className="text-lg font-medium lg:text-xl">Fitness</p>
//           <p className="my-4">Subscribe</p>
//           <p className="md:text-sm text-[12px] font-normal">
//             Get 10% of your first order
//           </p>
//           <form className="relative flex items-center my-2 w-[80%]">
//             <input
//               className="flex-1 pr-8 z-10 bg-transparent placeholder:text-gray-200 border-slate-500 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-slate-500"
//               type="email"
//               required
//               name={"email"}
//               placeholder={"Enter Your Email"}
//             />
//             <button
//               type="submit"
//               className="absolute right-2.5 z-30 -translate-y-1/2 top-1/2"
//             >
//               <FaPaperPlane className="text-slate-300" size={20} />
//             </button>
//           </form>
//         </div>
//         <div>
//           <FooterSection data={Support} title="Support" />
//         </div>
//         <div>
//           <FooterSection data={QuickLinks} title="Quick Links" />
//         </div>
//         <div>
//           <FooterSection data={Accounts} title="Accounts" />
//         </div>
//         <div>
//           <p className="text-lg font-medium lg:text-xl">Download App</p>
//           <p className="md:text-sm text-[12px] font-normal mt-7">
//             Save $3 with app new user only
//           </p>
//           <div className="flex my-3">
//             <img alt="QR Code" src={qrCode} className="me-3" />
//             <div>
//               <img alt="Google Play Store" src={googlePlay} />
//               <img alt="App Store" src={appStore} />
//             </div>
//           </div>

//           <div className="flex gap-4 mt-3 ">
//             <a href="https://www.facebook.com/jsjunayet73">
//               <FacebookIcon className="w-4 h-4 sm:w-6 xsm:w-5 sm:h-6 xsm:h-5" />
//             </a>
//             <a href="#">
//               <TwitterIcon className="w-4 h-4 sm:w-6 xsm:w-5 sm:h-6 xsm:h-5" />
//             </a>
//             <a href="#">
//               <YoutubeIcon className="w-4 h-4 sm:w-6 xsm:w-5 sm:h-6 xsm:h-5" />
//             </a>
//             <a href="https://www.linkedin.com/in/jsjunayet">
//               <LinkedinIcon className="w-4 h-4 sm:w-6 xsm:w-5 sm:h-6 xsm:h-5" />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default Footer;

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// function FacebookIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//     </svg>
//   );
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// function LinkedinIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//       <rect width="4" height="12" x="2" y="9" />
//       <circle cx="4" cy="4" r="2" />
//     </svg>
//   );
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// function TwitterIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//     </svg>
//   );
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// function YoutubeIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
//       <path d="m10 15 5-3-5-3z" />
//     </svg>
//   );
// }

// jhfghfghgjhhkhk

import { Link } from "react-router-dom";

import { Separator } from "../ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "All Products", href: "/products" },
        { name: "Weight Training", href: "/categories/weight-training" },
        { name: "Cardio Equipment", href: "/categories/cardio" },
        { name: "Yoga & Pilates", href: "/categories/yoga" },
        { name: "Accessories", href: "/categories/accessories" },
        { name: "Sale Items", href: "/sale" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/story" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Reviews", href: "/reviews" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "Size Guide", href: "/size-guide" },
        { name: "Product Care", href: "/care" },
        { name: "Warranty", href: "/warranty" },
      ],
    },
    {
      title: "Account",
      links: [
        { name: "My Account", href: "/account" },
        { name: "Order History", href: "/orders" },
        { name: "Wishlist", href: "/wishlist" },
        { name: "Track Order", href: "/track" },
        { name: "Rewards", href: "/rewards" },
        { name: "Gift Cards", href: "/gift-cards" },
      ],
    },
  ];

  const features = [
    { icon: Truck, text: "Free Shipping" },
    { icon: RotateCcw, text: "Easy Returns" },
    { icon: Shield, text: "Secure Payment" },
    { icon: CreditCard, text: "Multiple Payment Options" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      {/* Features Bar */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  FG
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">
                FitGear Store
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Your trusted partner in fitness. We provide premium quality
              equipment and accessories to help you achieve your fitness goals.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>1-800-FITGEAR</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@fitgearstore.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>123 Fitness Ave, Gym City, FC 12345</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Stay Updated
              </h3>
              <p className="text-sm text-muted-foreground">
                Get the latest deals and fitness tips delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="md:w-64"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} FitGear Store. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link
                to="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
