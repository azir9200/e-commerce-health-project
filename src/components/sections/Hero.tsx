import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative mt-20 min-h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Welcome to <span className="text-primary">FitGear Store</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Your gateway to quality fitness products and excellent service.
              Transform your workout with premium gym equipment and accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/product-page">
                <Button size="lg" className="text-lg px-8">
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-muted/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-6xl">
                  {" "}
                  <img
                    src="https://i.ibb.co/FbgSDvdD/jimi-a-a-EW9-W-rd-P5-U-unsplash.jpg"
                    alt="Banner Image 1"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold">
              NEW
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full w-20 h-20 flex items-center justify-center text-sm font-semibold">
              Free Shipping
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
