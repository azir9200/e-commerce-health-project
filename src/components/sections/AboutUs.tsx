import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Users, Target, Heart } from "lucide-react";

export function AboutUs() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About FitGear Store
            </h2>
            <p className="text-lg text-muted-foreground">
              Founded in 2015, FitGear Store has been at the forefront of the
              fitness revolution, providing premium quality equipment and
              accessories to fitness enthusiasts worldwide.
            </p>
            <p className="text-muted-foreground">
              Our mission is to make fitness accessible to everyone by offering
              high-quality products at competitive prices, backed by exceptional
              customer service and expert guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>

            <Button size="lg">Learn More About Us</Button>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Expert Team
                    </h3>
                    <p className="text-muted-foreground">
                      Our certified fitness professionals help you choose the
                      right equipment for your goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Quality Focus
                    </h3>
                    <p className="text-muted-foreground">
                      We carefully curate our products to ensure only the
                      highest quality equipment reaches you.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Customer First
                    </h3>
                    <p className="text-muted-foreground">
                      Your fitness journey is our priority. We're here to
                      support you every step of the way.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
