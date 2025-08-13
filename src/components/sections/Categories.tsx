/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllCategoryQuery } from "../../redux/api/categoryApi/categoryApi";
import CategoryCard from "../category/CategoryCard";
import HomeSlide from "../shareHome/Carousal";
import ImageGallery from "../shareHome/ImageGallery";
import ProductCardSkeleton from "../Skeleton/ProductCartSkeleton";

export function Categories() {
  const { data, isLoading } = useGetAllCategoryQuery(null);
  const categories = data?.data?.data;
  console.log("category", categories);
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find everything you need for your fitness journey in our carefully
            organized categories.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : Array.isArray(categories) &&
              categories
                .slice(0, 4)
                .map((category: any) => (
                  <CategoryCard key={category._id} category={category} />
                ))}
        </div>
      </div>
      <ImageGallery />
      <HomeSlide />
    </section>
  );
}
