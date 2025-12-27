import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useAppSelector } from "../../redux/hooks";
import ProductCard from "../product/ProductCard";

const Wishlist = () => {
  const wishlistItems = useAppSelector((state) => state?.wishlist?.items);
  const navigate = useNavigate();
  if (wishlistItems?.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your Wishlist is empty</h2>
          <p className="text-gray-600 mb-6">Save items you love for later!</p>
          <Button onClick={() => navigate("/product-page")}>
            Browse Products
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="  min-h-[70vh] pt-5">
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-2">
        {wishlistItems.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
