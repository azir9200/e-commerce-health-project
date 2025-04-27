
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Search } from "lucide-react";
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
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md  border">
      <div className="space-y-2">
        <Label>Search Products</Label>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e:any) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Category</Label>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category.toLowerCase()}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <Label>Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
        <Slider
          value={priceRange}
          max={1000}
          step={10}
          onValueChange={onPriceRangeChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ProductFilters;