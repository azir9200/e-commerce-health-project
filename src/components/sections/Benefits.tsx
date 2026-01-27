import { Card, CardContent } from "../ui/card";
import {
  Truck,
  Shield,
  Headphones,
  RotateCcw,
  Award,
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
    description:
      "Free delivery on orders over $50. Fast and reliable shipping worldwide.",
    color: "text-blue-500",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description:
      "All products come with manufacturer warranty and quality assurance.",
    color: "text-green-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your fitness needs.",
    color: "text-purple-500",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free returns and exchanges on all products.",
    color: "text-orange-500",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Curated selection of top-rated fitness equipment from trusted brands.",
    color: "text-yellow-500",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Same-day processing and express delivery options available.",
    color: "text-red-500",
  },
];

export function Benefits() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-400 via-grey-400 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose FitGear Store?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We're committed to providing the best shopping experience with
            unmatched service and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-white/10 hover:border-blue-400/50 bg-white/5 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 shadow-xl mb-6 group-hover:scale-110 transition-all duration-300 ${benefit.color} group-hover:bg-white/20`}
                >
                  <benefit.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
