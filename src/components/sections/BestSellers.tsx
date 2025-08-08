/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Star, TrendingUp } from "lucide-react";
import { useGetAllProductQuery } from "../../redux/api/productApi/ProductApi";
import ProductCardSkeleton from "../Skeleton/ProductCartSkeleton";

export function BestSellers() {
  const { data, isLoading } = useGetAllProductQuery(null);
  const products = data?.data;

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : Array.isArray(products) &&
              products.slice(6, 9).map((product: any, index: any) => (
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
                      {/* <Badge variant="destructive" className="text-xs">
                    {product?.discount}% OFF
                  </Badge> */}
                    </div>

                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">
                        {" "}
                        <img src={product.image} alt="product image" />{" "}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>

                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4  fill-yellow-400 text-yellow-400" />
                          <Star className="w-4 h-4  fill-yellow-400 text-yellow-400" />
                          <Star className="w-4 h-4  fill-yellow-400 text-yellow-400" />
                          <Star className="w-4 h-4  fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>

                      <div className="text-sm text-primary font-semibold mb-4">
                        2.5k+ sold
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">
                          ${product.price}
                        </div>
                        <div className="text-sm text-muted-foreground line-through">
                          ${(product.price / (1 - 20 / 100)).toFixed(2)}
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
