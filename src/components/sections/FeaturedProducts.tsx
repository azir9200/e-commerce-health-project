/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../ui/button";
import { useGetAllProductQuery } from "../../redux/api/productApi/ProductApi";
import ProductCardSkeleton from "../Skeleton/ProductCartSkeleton";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetAllProductQuery(null);
  const products = data?.data;
  return (
    <section className="py-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium fitness equipment
            designed to elevate your workout experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : products
                ?.slice(0, 4)
                ?.map((product: any) => (
                  <ProductCard key={product._id} product={product} />
                ))}
        </div>

        <div className="text-center mt-8">
          <Link to="product-page">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
