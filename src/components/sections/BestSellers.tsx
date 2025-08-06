import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Star, TrendingUp } from "lucide-react";

const bestSellers = [
  {
    id: 1,
    name: "Adjustable Dumbbell Set",
    price: 449.99,
    rating: 4.9,
    reviews: 567,
    image: "🏋️",
    discount: 20,
    soldCount: "2.5k+ sold",
  },
  {
    id: 2,
    name: "Home Gym Multi-Station",
    price: 899.99,
    rating: 4.8,
    reviews: 234,
    image: "🏠",
    discount: 15,
    soldCount: "1.2k+ sold",
  },
  {
    id: 3,
    name: "Olympic Barbell Set",
    price: 599.99,
    rating: 4.7,
    reviews: 345,
    image: "🏋️‍♀️",
    discount: 25,
    soldCount: "3.1k+ sold",
  },
];

export function BestSellers() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Best Sellers
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Our most popular products loved by thousands of fitness
              enthusiasts worldwide.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    #{index + 1} Best Seller
                  </Badge>
                  <Badge variant="destructive" className="text-xs">
                    {product.discount}% OFF
                  </Badge>
                </div>

                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{product.image}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="text-sm text-primary font-semibold mb-4">
                    {product.soldCount}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      ${product.price}
                    </div>
                    <div className="text-sm text-muted-foreground line-through">
                      $
                      {(product.price / (1 - product.discount / 100)).toFixed(
                        2
                      )}
                    </div>
                  </div>

                  <Button className="w-full text-lg py-6 group-hover:scale-105 transition-transform">
                    Add to Cart
                  </Button>

                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
