import { useState, useMemo } from "react";
import { useGetAllProductQuery } from "../../redux/api/productApi/ProductApi";
import ProductCardSkeleton from "../../components/Skeleton/ProductCartSkeleton";
import ProductCart from "../../components/ProductCard";
import ProductFilters from "./ProductFilters";



const ProductPage = () => {
  const { data, isLoading } = useGetAllProductQuery(null);
  const products = data?.data;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Extract unique categories from products
  const categories = useMemo(() => {
    if (!products) return [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Array.from(new Set(products.map((product: any) => product.category)));
  }, [products]);

  // Filter products based on search, category, and price
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div className="min-h-screen  py-8 pt-20">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters sidebar */}
          <div className="lg:col-span-1">
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

          {/* Products grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                  ))
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                : filteredProducts.map((product: any) => (
                    <ProductCart key={product._id} product={product} />
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
        </div>
      </div>
    </div>
  );
};

export default ProductPage;