/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetAllProductQuery } from "../../redux/api/productApi/ProductApi";
import ProductCardSkeleton from "../../components/Skeleton/ProductCartSkeleton";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";
import { Button } from "../../components/ui/button";
import { PackageSearch, Grid, List, ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const Products = () => {
  const { data, isLoading } = useGetAllProductQuery(null);
  const products = data?.data;
  const [searchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceRange([0, 500]);
    setSortBy("name");
  };

  // Extract unique categories from products
  const categories: string[] = useMemo(() => {
    if (!products) return [];
    return Array.from(
      new Set(products.map((product: any) => product.category)),
    );
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let filtered = products.filter((product: any) => {
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

    // Sort products
    filtered.sort((a: any, b: any) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-background mt-16 relative">
      {/* Hero Background - Matching Navbar Top Bar */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 opacity-5"></div>

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

      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/5 via-blue-900/5 to-slate-900/5 rounded-3xl -z-10"></div>
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-4">
            <span className="text-5xl lg:text-6xl font-bold">🏋️‍♂️</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of fitness equipment and
            supplements. Find the perfect gear to elevate your training and
            achieve your goals.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
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

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-6 bg-gradient-to-r from-slate-900/5 via-blue-900/5 to-slate-900/5 rounded-2xl border border-border/30">
          <div className="flex items-center gap-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              {isLoading
                ? "Loading products..."
                : `${filteredProducts.length} Product${filteredProducts.length !== 1 ? "s" : ""} Found`}
            </h2>
            {!isLoading && filteredProducts.length > 0 && (
              <span className="text-sm text-muted-foreground">
                {searchQuery && `for "${searchQuery}"`}
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 h-9 bg-card border-border/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-border/50 rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-7 w-7 p-0"
              >
                <Grid className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-7 w-7 p-0"
              >
                <List className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
              : "space-y-6"
          }
        >
          {isLoading
            ? Array.from({ length: viewMode === "grid" ? 8 : 4 }).map(
                (_, index) => <ProductCardSkeleton key={index} />,
              )
            : filteredProducts.map((product: any) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
        </div>

        {/* No Results */}
        {!isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-20 animate-fade-in relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/5 via-blue-900/5 to-slate-900/5 rounded-3xl -z-10"></div>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-slate-900/10 via-blue-900/10 to-slate-900/10 mb-8">
              <PackageSearch className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="font-display text-3xl font-semibold text-foreground mb-3">
              No products found
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg">
              We couldn't find any products matching your current filters. Try
              adjusting your search criteria or browse our full collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={handleResetFilters}
                size="lg"
                className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 hover:from-slate-800 hover:via-blue-800 hover:to-slate-800 text-white"
              >
                Reset All Filters
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="border-slate-900/20 hover:bg-slate-900/5"
              >
                Browse All Products
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
