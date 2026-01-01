/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { Mail, Gift, Zap, Bell } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
    }
  };

  const benefits = [
    {
      icon: Gift,
      text: "Exclusive offers and discounts",
    },
    {
      icon: Zap,
      text: "First access to new products",
    },
    {
      icon: Bell,
      text: "Fitness tips and workout guides",
    },
  ];

  return (
    <section className="py-4 bg-slate-200">
      <div className="max-w-7xl mx-auto">
        <Card className="w-full mx-auto border-border/50 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join the FitGear Community
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Subscribe to our newsletter and get exclusive deals, fitness
                tips, and be the first to know about new products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">
                  What you'll get:
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      10% OFF
                    </div>
                    <div className="text-sm text-muted-foreground">
                      on your first order when you subscribe!
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {isSubscribed ? (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <div className="text-2xl">✅</div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Thank you for subscribing!
                    </h3>
                    <p className="text-muted-foreground">
                      Check your email for your 10% discount code and welcome
                      package.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubscribed(false)}
                    >
                      Subscribe Another Email
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        required
                        className="text-lg py-6"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  text-white hover:bg-blue-950 px-2  rounded w-full text-lg py-2"
                    >
                      Subscribe & Get 10% Off
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      By subscribing, you agree to our Privacy Policy and Terms
                      of Service. You can unsubscribe at any time.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
