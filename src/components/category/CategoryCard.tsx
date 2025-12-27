/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../redux/hooks";
import Modal from "../Modal";
import { addToCart } from "../../redux/features/cartSlice";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CategoryCard = ({ category }: { category: any }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleShowModal = (category: any) => {
    setSelectedProduct(category);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleAddToCart = async (category: any) => {
    dispatch(addToCart(category));
    toast.success(<div> You Product added to cart successfully! </div>);
  };
  console.log(handleAddToCart);

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
        onClick={() => handleShowModal(category)}
        className="border rounded-lg shadow-lg bg-base-100 transition-transform transform flex flex-col h-full"
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-40 object-cover transition-opacity duration-300 hover:opacity-75"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold  mb-2">{category.name}</h3>
          <p className=" font-semibold text-lg mb-4 flex-grow">
            {category.description.split(" ").slice(0, 5).join(" ") +
              (category.description.split(" ").length > 5 ? "..." : "")}
          </p>
          <p className="text-lg font-bold text-[#2453DF]  mb-4">
            {" "}
            Stock in Total: {category.stock}
          </p>
          <Link to="/product-page">
            <Button
              variant="outline"
              className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  group-hover:bg-primary hover:text-white text-white transition-colors"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
