/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Modal from "../Modal";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CategoryHome = ({ category }: { category: any }) => {
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
        <h3 className="text-xl text-center italic font-bold w-full  mb-2">
          {category.name}
        </h3>
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-40 object-cover transition-opacity duration-300 hover:opacity-75"
        />
        <div className="p-4 flex flex-col flex-grow">
          <p className=" font-semibold text-lg mb-4 flex-grow">
            {category.description.split(" ").slice(0, 5).join(" ") +
              (category.description.split(" ").length > 5 ? "..." : "")}
          </p>

          <Link to="categories">
            <Button
              variant="outline"
              className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  group-hover:bg-primary hover:text-white text-white transition-colors"
            >
              View
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;
