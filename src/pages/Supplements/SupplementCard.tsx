import { useState } from "react";
import { ISupplement } from "./type.supplemrnt";
import { useAppDispatch  } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartSlice";
import toast from "react-hot-toast";

type SupplementCardProps = {
  supplement: ISupplement;
};

const SupplementCard = ({ supplement }: SupplementCardProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const handleAddToCart = (supplement: ISupplement) => {
    dispatch(addToCart(supplement));
    toast.success(<div> You Supplement added to cart successfully! </div>);
  };

  return (
    <div className=" py-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow grid grid-cols-1 md:grid-cols-2 py-4 gap-12">
        {/* LEFT: Image Gallery */}
        <div>
          <div className="bg-gray-50 rounded-xl flex items-center justify-center p-6">
            <img
              src={supplement.images?.[selectedImage]}
              alt={supplement.name}
              className="max-h-[420px] object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-6">
            {supplement.images?.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border rounded-lg p-1 ${
                  selectedImage === index
                    ? "border-blue-600"
                    : "border-gray-200"
                }`}
              >
                <img src={img} alt="thumb" className="w-16 h-16 object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-1">{supplement.name}®</h1>

          <p className="text-gray-600 mb-4">{supplement.description}</p>

          <p className="text-3xl font-semibold mb-2">${supplement.price}</p>

          <p className="text-sm text-gray-500 mb-6">
            FREE SHIPPING ON ORDERS OVER $75 OR SUBSCRIPTIONS
          </p>

          {/* Flavor Selector */}
          {supplement.flavor && (
            <div className="flex items-center gap-3 mb-6">
              <span className="font-semibold">This product is</span>
              <span className="font-semibold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                {supplement.flavor}
              </span>
            </div>
          )}

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg">
              <button
                className="px-4 py-2 text-xl"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className="px-6 font-medium">{quantity}</span>
              <button
                className="px-4 py-2 text-xl"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(supplement);
              }}
              className="bg-slate-700  text-white   font-semibold py-2 px-4 rounded-lg  transition duration-300 shadow-md hover:shadow-lg"
            >
              ADD TO CART
            </button>
          </div>

          {/* Info Section */}
          <div className="text-sm text-gray-700 space-y-3">
            <p>✔ Local pickup is available for this product</p>
            <p>
              Stock available: <strong>{supplement.stock ?? "N/A"}</strong>
            </p>
            <p>✔ HSA/FSA eligible — Save up to 30%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplementCard;
