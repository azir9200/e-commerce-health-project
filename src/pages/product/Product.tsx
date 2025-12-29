/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from "react";
import { useGetAllProductQuery } from "../../redux/api/productApi/ProductApi";
import ProductCardSkeleton from "../../components/Skeleton/ProductCartSkeleton";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";
import { Button } from "../../components/ui/button";
import { PackageSearch } from "lucide-react";

const Products = () => {
  const { data, isLoading } = useGetAllProductQuery(null);
  const products = data?.data;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceRange([0, 500]);
  };
  // Extract unique categories from products
  const categories: string[] = useMemo(() => {
    if (!products) return [];

    return Array.from(
      new Set(products.map((product: any) => product.category))
    );
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((product: any) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" ||
        product.category.toLowerCase() === selectedCategory;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, searchQuery, selectedCategory, priceRange]);

  return (
    <div className="min-h-screen bg-background mt-16">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        {/* Filters */}
        <div className="mb-10">
          <ProductFilters
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            categories={categories}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : filteredProducts.map((product: any) => (
                <ProductCard key={product._id} product={product} />
              ))}
        </div>

        {/* No Results */}
        {!isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <PackageSearch className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              No products found
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We couldn't find any products matching your current filters. Try
              adjusting your search criteria.
            </p>
            <Button onClick={handleResetFilters}>Reset Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
