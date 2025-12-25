/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";


import toast from "react-hot-toast";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartSlice";
import Modal from "../../components/Modal";

const ItemsCard = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleAddToCart = async (product: any) => {
    dispatch(addToCart(product));
    toast.success(<div> You Product added to cart successfully! </div>);
  };
  

  return (
    <div className="relative">
      {showModal && (
        <Modal
          product={selectedProduct}
          onClose={handleCloseModal}
          handleAddToCart={() => {}}
        />
      )}

      <div
        onClick={() => handleShowModal(product)}
        className="border rounded-lg shadow-lg bg-base-100 transition-transform transform flex flex-col h-full"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover transition-opacity duration-300 hover:opacity-75"
        />
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

export default ItemsCard;
