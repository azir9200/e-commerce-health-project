/* eslint-disable @typescript-eslint/no-explicit-any */

import { Heart, ShoppingBag, Star, TrendingUp, } from "lucide-react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartSlice";
import { toggleWishlistItem } from "../../redux/features/wishlistSlice";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  viewMode = "grid",
}: {
  product: any;
  viewMode?: "grid" | "list";
}) => {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const wishlistItems = useAppSelector((state) => state?.wishlist?.items);

  const isInWishlist = wishlistItems?.some((item) => item.id === product.id);

  const handleToggleWishlist = () => {
    dispatch(toggleWishlistItem(product));
    toast.success(isInWishlist ? "Removed from Wishlist" : "Added to Wishlist");
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success(<div>You Product added to cart successfully!</div>);
  };

  // Mock rating for demo (replace with actual rating data)
  const rating = Math.floor(Math.random() * 5) + 1;
  const isNew = Math.random() > 0.7;
  const isBestseller = Math.random() > 0.8;

  return viewMode === "list" ? (
    // List View
    <div
      className="group flex bg-card rounded-2xl overflow-hidden shadow-card border border-border/30 transition-all duration-500 hover:shadow-hover hover:border-accent/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden bg-secondary/30">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold">
              NEW
            </Badge>
          )}
          {isBestseller && (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              BESTSELLER
            </Badge>
          )}
          {product.stock == 0 && (
            <Badge variant="destructive" className="text-xs font-semibold">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 z-20 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
            isInWishlist
              ? "bg-destructive/90 text-destructive-foreground shadow-lg"
              : "bg-card/80 text-muted-foreground hover:bg-card hover:text-destructive"
          }`}
          aria-label="Toggle Wishlist"
        >
          <Heart
            className={`h-4 w-4 transition-transform duration-300 ${
              isInWishlist ? "fill-current scale-110" : ""
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-xs font-medium">
              {product.category}
            </Badge>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground ml-1">
                ({rating})
              </span>
            </div>
          </div>

          {/* Name */}
          <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2 hover:text-accent transition-colors">
            <Link to={`/allproduct/${product._id}`}>{product.name}</Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-display font-bold text-foreground">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              size="sm"
              disabled={product.stock == 0}
              className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white hover:bg-blue-950 disabled:opacity-50"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Link to={`/allproduct/${product._id}`}>
              <Button variant="outline" size="sm" className="hover:bg-accent/5">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    // Grid View
    <div
      className="group relative bg-card rounded-2xl overflow-hidden shadow-card border border-border/30 transition-all duration-500 hover:shadow-hover hover:-translate-y-1 hover:border-accent/20"
      style={{ animationDelay: `${100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        {isNew && (
          <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold shadow-lg">
            NEW
          </Badge>
        )}
        {isBestseller && (
          <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold flex items-center gap-1 shadow-lg">
            <TrendingUp className="h-3 w-3" />
            BESTSELLER
          </Badge>
        )}
        {product.stock == 0 && (
          <Badge
            variant="destructive"
            className="text-xs font-semibold shadow-lg"
          >
            Out of Stock
          </Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleToggleWishlist}
        className={`absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg ${
          isInWishlist
            ? "bg-destructive/90 text-destructive-foreground"
            : "bg-card/80 text-muted-foreground hover:bg-card hover:text-destructive"
        }`}
        aria-label="Toggle Wishlist"
      >
        <Heart
          className={`h-4 w-4 transition-transform duration-300 ${
            isInWishlist ? "fill-current scale-110" : ""
          }`}
        />
      </button>

      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Quick Add Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex items-end justify-center pb-6 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
            size="lg"
            disabled={product.stock == 0}
            className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 group-hover:bg-primary hover:text-white text-white transition-colors shadow-lg disabled:opacity-50"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs font-medium">
            {product.category}
          </Badge>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({rating})
            </span>
          </div>
        </div>

        {/* Name */}
        <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2 line-clamp-1 hover:text-accent transition-colors">
          <Link to={`/allproduct/${product._id}`}>{product.name}</Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div className="flex flex-col">
            <span className="text-2xl font-display font-bold text-foreground">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Link to={`/allproduct/${product._id}`}>
            <Button
              variant="ghost"
              size="sm"
              className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white hover:bg-blue-950 hover:text-white"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
