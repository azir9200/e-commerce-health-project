/* eslint-disable @typescript-eslint/no-explicit-any */

import { Heart } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartSlice";
import { toggleWishlistItem } from "../../redux/features/wishlistSlice";


const ProductCard = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state?.wishlist?.items);

  const isInWishlist = wishlistItems?.some((item) => item._id === product._id);

  const handleToggleWishlist = () => {
    dispatch(toggleWishlistItem(product));
    toast.success(isInWishlist ? "Removed from Wishlist" : "Added to Wishlist");
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success(<div> You Product added to cart successfully! </div>);
  };

  return (
    <div className="relative">
      <div className="border rounded-lg shadow-lg bg-base-100 transition-transform transform flex flex-col h-full">
        <div className="absolute z-50 top-5 right-5 flex items-center gap-2 bg-primary/60 shadow-sm rounded-full px-2 py-0.5 border border-gray-200">
          <button onClick={handleToggleWishlist} aria-label="Toggle Wishlist">
            {isInWishlist ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                stroke="none"
                className="h-5 w-5"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <Heart className="h-5 w-5 text-white hover:text-red-500" />
            )}
          </button>
        </div>
        <Link to={`/allproduct/${product._id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover transition-opacity duration-300 hover:opacity-75"
          />
        </Link>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold  mb-2">{product.name}</h3>
          <p className=" font-semibold text-lg mb-4 flex-grow">
            {product.description.split(" ").slice(0, 5).join(" ") +
              (product.description.split(" ").length > 5 ? "..." : "")}
          </p>
          <p className="text-lg font-bold text-[#2453DF]  mb-4">
            {" "}
            Price: ${product.price}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
            className="bg-slate-700  text-white   font-semibold py-2 px-4 rounded-lg  transition duration-300 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
