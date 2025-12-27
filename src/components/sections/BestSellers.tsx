/* eslint-disable @typescript-eslint/no-explicit-any */

import toast from "react-hot-toast";
import { useGetAllProductQuery } from "../../redux/api/productApi/ProductApi";
import { addToCart } from "../../redux/features/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import ProductCardSkeleton from "../Skeleton/ProductCartSkeleton";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { TrendingUp } from "lucide-react";

export function BestSellers() {
  const { data, isLoading } = useGetAllProductQuery(null);
  const products = data?.data || [];
  const dispatch = useAppDispatch();
  const handleAddToCart = async (product: any) => {
    dispatch(addToCart(product));
    toast.success(<div> You Product added to cart successfully! </div>);
  };
  return (
    <section className="py-16 bg-background">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Best Sellers
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our most popular products loved by thousands of fitness enthusiasts
            worldwide.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {isLoading ? (
          // Skeleton loader (5 cards in asymmetric layout)
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:row-span-2">
              <ProductCardSkeleton />
            </div>
            <div className="flex flex-col gap-4">
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </div>
            <div className="flex flex-col gap-4">
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            {products.slice(0, 3).map((product: any, index: number) => (
              <Card
                key={product.id}
                className="w-full md:w-1/3 group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>

                <CardContent className="p-4">
                  <Badge variant="secondary" className="text-xs mb-2">
                    #{index + 1} Best Seller
                  </Badge>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />

                  <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    ${product.price}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="bg-primary w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                  >
                    Add to Cart
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
