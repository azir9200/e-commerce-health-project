/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from "react";
import { useGetAllProductQuery } from "../../redux/api/productApi/ProductApi";
import ProductCardSkeleton from "../../components/Skeleton/ProductCartSkeleton";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data, isLoading } = useGetAllProductQuery(null);
  const products = data?.data;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);

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
    <div className=" mt-20 py-8 pt-20">
     
      {/* Filters sidebar */}
      <div className="">
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : filteredProducts.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>

      {/* No results message */}
      {!isLoading && filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">
            No products found matching your criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
