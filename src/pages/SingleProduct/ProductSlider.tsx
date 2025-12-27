"use client";
import React from "react";
import "swiper/css"; // Modern Swiper uses individual CSS imports
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ProductSliderProps {
  image: string; // Changed from images: string[] to a single string
}

const ProductSlider: React.FC<ProductSliderProps> = ({ images }) => {
  console.log(images, "fdsfd");
  // If there is only one image, we don't need thumbsSwiper or complex Swiper logic
  if (!images) return <p>No image available.</p>;

  return (
    <div className="block">
      <div className="mySwiper2 sm:h-[280px] h-[350px] max-w-[610px] sm:max-w-[580px] rounded-lg overflow-hidden relative">
        <div className="relative w-full h-full overflow-hidden transition-transform duration-1000 ease-in-out rounded-lg group hover:scale-105">
          <img
            src={images}
            className="absolute object-cover object-center w-full h-full"
            alt="Product Image"
          />
        </div>
      </div>

      {/* Optional: Simple "Thumbnail" look for consistency */}
      <div className="mt-4 max-w-[120px]">
        <div className="rounded-lg overflow-hidden h-[80px] border flex items-center justify-center border-blue-500">
          <img
            src={images}
            className="object-cover object-center w-full h-full"
            alt="Thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
