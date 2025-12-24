import { useState } from "react";
import { useGetAllSupplementQuery } from "../../redux/api/supplementApi/SupplementApi";

const Supplement = () => {
  const { data, isLoading, isError } = useGetAllSupplementQuery(null);

  // backend returns a single object inside `data`
  const supplement = data?.data;
  console.log("supplem", supplement);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (isLoading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (isError || !supplement) {
    return <p className="text-center mt-20">Failed to load supplement</p>;
  }

  return (
    <div className="min-h-screen bg-slate-100 mt-36 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow">
        {/* LEFT: Images */}
        <div>
          <img
            src={supplement.images?.[selectedImage]}
            alt={supplement.name}
            className="w-full rounded-lg"
          />

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {supplement.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 object-cover border rounded cursor-pointer ${
                  selectedImage === index ? "border-blue-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-1">{supplement.brand}®</h1>

          <p className="text-lg text-gray-700 mb-4">{supplement?.data?.name}</p>

          <p className="text-lg text-gray-700 mb-4">{supplement.description}</p>

          <p className="text-2xl font-semibold mb-2">${supplement.price}</p>

          <p className="text-sm text-gray-500 mb-6">
            FREE SHIPPING ON ORDERS OVER $75 OR SUBSCRIPTIONS
          </p>

          {/* Flavor */}
          {supplement.flavor && (
            <div className="mb-6">
              <p className="font-semibold mb-2">FLAVOR</p>
              <button className="px-6 py-2 border rounded font-medium bg-blue-600 text-white">
                {supplement.flavor}
              </button>
            </div>
          )}

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-2"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-3 py-2"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded">
              ADD TO CART
            </button>
          </div>

          {/* Extra Info */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>✔ Local pickup is available for this product</p>
            <p>
              Stock available: <strong>{supplement.stock}</strong>
            </p>
            <p>✔ HSA/FSA eligible — Save up to 30%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplement;
