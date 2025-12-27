/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllCategoryQuery } from "../../redux/api/categoryApi/categoryApi";
import CategoryCard from "../category/CategoryCard";
import ImageGallery from "../shareHome/ImageGallery";
import ProductCardSkeleton from "../Skeleton/ProductCartSkeleton";

export function Categories() {
  const { data, isLoading } = useGetAllCategoryQuery(null);
  const categories = data?.data?.data;

  return (
    <section className="py-16 mt-24 bg-muted/30">
      <div className="max-w-7xl mx-auto">
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
      
      <div className="grid grid-cols-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-12 rounded-md bg-muted animate-pulse" />
            ))
          : categories?.map((category: any) => (
              <div
                key={category._id}
                className="flex items-center justify-center h-12 rounded-lg border bg-background font-medium hover:bg-primary hover:text-white transition cursor-pointer"
              >
                {category.name}
              </div>
            ))}
      </div>

      <ImageGallery />
    </section>
  );
}
