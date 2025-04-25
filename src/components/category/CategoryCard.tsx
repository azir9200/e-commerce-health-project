import React from "react";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/product`);
  };

  return (
    <div
      onClick={() => handleCategoryClick()}
      className="cursor-pointer bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 transition transform hover:scale-105"
    >
      <img
        src={image}
        alt={name}
        className="h-32 w-32 mx-auto object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-center">{name}</h3>
    </div>
  );
};

export default CategoryCard;
