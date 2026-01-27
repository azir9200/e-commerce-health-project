import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Search, SlidersHorizontal, RotateCcw, X } from "lucide-react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Slider } from "../../components/ui/slider";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

interface ProductFiltersProps {
  priceRange: number[];
  onPriceRangeChange: (value: number[]) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  categories: string[];
  onReset?: () => void;
}

const ProductFilters = ({
  priceRange,
  onPriceRangeChange,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  categories,
  onReset,
}: ProductFiltersProps) => {
  const activeFiltersCount =
    (searchQuery ? 1 : 0) +
    (selectedCategory !== "all" ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 1000 ? 1 : 0);

  return (
    <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6 lg:p-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-accent" />
          <h2 className="font-display text-lg font-semibold text-foreground">
            Filters
          </h2>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFiltersCount}
            </Badge>
          )}
        </div>
        {onReset && activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        )}
      </div>

      <div className="space-y-6">
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
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onSearchChange("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </Button>
            )}
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
            <span className="text-sm font-semibold text-foreground bg-secondary/50 px-3 py-1 rounded-lg">
              ${priceRange[0]} — ${priceRange[1]}
            </span>
          </div>
          <div className="pt-2">
            <Slider
              value={priceRange}
              max={1000}
              min={0}
              step={10}
              onValueChange={onPriceRangeChange}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {activeFiltersCount > 0 && (
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <Badge variant="outline" className="flex items-center gap-1">
                Search: "{searchQuery}"
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onSearchChange("")}
                  className="h-4 w-4 p-0 hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
            {selectedCategory !== "all" && (
              <Badge variant="outline" className="flex items-center gap-1">
                Category: {selectedCategory}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCategoryChange("all")}
                  className="h-4 w-4 p-0 hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
            {(priceRange[0] > 0 || priceRange[1] < 1000) && (
              <Badge variant="outline" className="flex items-center gap-1">
                Price: ${priceRange[0]} - ${priceRange[1]}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onPriceRangeChange([0, 1000])}
                  className="h-4 w-4 p-0 hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
