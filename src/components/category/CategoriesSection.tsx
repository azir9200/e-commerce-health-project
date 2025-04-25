import React from "react";
import CategoryCard from "./CategoryCard";


const categories = [
  {
    name: "Cardio Equipment",
    image: "https://i.ibb.co/Dtg75FD/risen-wang-20j-X9b35r-M-unsplash.jpg",
  },
  {
    name: "Strength Training",
    image:
      "https://i.ibb.co/vmTr0Z6/anastase-maragos-i-Uzge-POo-Gko-unsplash.jpg",
  },
  {
    name: "Fitness Accessories",
    image: "https://i.ibb.co/mb9QhPZ/alexander-redl-d3b-Ymn-Z0ank-unsplash.jpg",
  },
  {
    name: "Wearables",
    image: "https://i.ibb.co/QHVsQDK/pexels-ivan-samkov-4162485.jpg",
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <div className="py-12 bg-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
