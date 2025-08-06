import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
 import { Badge } from "../ui/badge";
import { Star, ShoppingCart } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Professional Dumbbells Set",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 124,
    image: "🏋️",
    badge: "Best Seller",
    category: "Weight Training",
  },
  {
    id: 2,
    name: "Premium Yoga Mat",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviews: 89,
    image: "🧘‍♀️",
    badge: "New",
    category: "Yoga & Pilates",
  },
  {
    id: 3,
    name: "Resistance Bands Kit",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.7,
    reviews: 156,
    image: "🏃‍♂️",
    badge: "Sale",
    category: "Resistance Training",
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 203,
    image: "⌚",
    badge: "Featured",
    category: "Wearables",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium fitness equipment
            designed to elevate your workout experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-square bg-muted/20 flex items-center justify-center text-6xl">
                    {product.image}
                  </div>
                  <Badge
                    className="absolute top-3 left-3"
                    variant={
                      product.badge === "Sale" ? "destructive" : "default"
                    }
                  >
                    {product.badge}
                  </Badge>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>

                <div className="p-4 space-y-3">
                  <div className="text-sm text-primary font-medium">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-bold text-lg text-foreground">
                        ${product.price}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </div>
                      )}
                    </div>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
