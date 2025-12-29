import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Slider } from "../../components/ui/slider";

interface ProductFiltersProps {
  priceRange: number[];
  onPriceRangeChange: (value: number[]) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  categories: string[];
}

const ProductFilters = ({
  priceRange,
  onPriceRangeChange,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  categories,
}: ProductFiltersProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6 lg:p-8 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal className="h-5 w-5 text-accent" />
        <h2 className="font-display text-lg font-semibold text-foreground">
          Filters
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Search */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Search Products
          </Label>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-accent" />
            <Input
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-11 h-12 bg-secondary/50 border-border/50 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300"
            />
          </div>
        </div>

        {/* Category */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Category
          </Label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="h-12 bg-secondary/50 border-border/50 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-border/50 shadow-hover">
              <SelectItem value="all" className="rounded-lg">
                All Categories
              </SelectItem>
              {categories.map((category) => (
                <SelectItem
                  key={category}
                  value={category.toLowerCase()}
                  className="rounded-lg"
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Price Range
            </Label>
            <span className="text-sm font-semibold text-foreground">
              ${priceRange[0]} — ${priceRange[1]}
            </span>
          </div>
          <div className="pt-2">
            <Slider
              value={priceRange}
              max={500}
              min={0}
              step={10}
              onValueChange={onPriceRangeChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
