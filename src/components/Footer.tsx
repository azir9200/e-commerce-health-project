import { Link } from "react-router-dom";

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
        { name: "All Products", href: "/product-page" },

        { name: "Categories", href: "/categories" },
        { name: "Sale Items", href: "/cart" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
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
      ],
    },
    {
      title: "Account",
      links: [
        { name: "My Account", href: "/dashboard/user" },
        { name: "Order History", href: "/orders" },
        { name: "Wishlist", href: "/wishlist" },
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
    <footer className="bg-zinc-50 border-t">
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
        <div className="bg-stone-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
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
              Your trusted partner to achieve your fitness goals.
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
