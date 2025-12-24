/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star, TrendingUp } from "lucide-react";
import toast from "react-hot-toast";
import { useGetAllProductQuery } from "../../redux/api/productApi/ProductApi";
import { addToCart } from "../../redux/features/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import ProductCardSkeleton from "../Skeleton/ProductCartSkeleton";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

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
      <div className="max-w-7xl mx-auto">
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
              Our most popular products loved by thousands of fitness
              enthusiasts worldwide.
            </p>
          </div>
        </div>

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Column 1 - Large card */}
            {products[0] && (
              <Card
                key={products[0].id}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 relative overflow-hidden md:row-span-2 flex flex-col"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        #1 Best Seller
                      </Badge>
                    </div>
                    <div className="text-center mb-6">
                      <img
                        src={products[0].image}
                        alt={products[0].name}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {products[0].name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </div>
                      <div className="text-sm text-primary font-semibold mb-4">
                        2.5k+ sold
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">
                        ${products[0].price}
                      </div>
                      <div className="text-sm text-muted-foreground line-through">
                        ${(products[0].price / (1 - 20 / 100)).toFixed(2)}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(products);
                      }}
                      className=" bg-primary  text-white w-full  font-semibold py-2 px-4 rounded-lg  transition duration-300 shadow-md hover:shadow-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Column 2 - Two stacked cards */}
            <div className="flex flex-col gap-4">
              {products.slice(1, 3).map((product: any, index: number) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="text-xs mb-2">
                      #{index + 2} Best Seller
                    </Badge>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                    <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ${product.price}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className=" bg-primary w-full  text-white   font-semibold py-2 px-4 rounded-lg  transition duration-300 shadow-md hover:shadow-lg"
                    >
                      Add to Cart
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Column 3 - Two stacked cards */}
            <div className="flex flex-col gap-4">
              {products.slice(3, 5).map((product: any, index: number) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="text-xs mb-2">
                      #{index + 4} Best Seller
                    </Badge>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                    <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ${product.price}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className=" bg-primary w-full  text-white   font-semibold py-2 px-4 rounded-lg  transition duration-300 shadow-md hover:shadow-lg"
                    >
                      Add to Cart
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
