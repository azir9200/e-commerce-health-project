/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "./ProductCard";
import { useGetAllProductQuery } from "../redux/api/productApi/ProductApi";
import ProductCardSkeleton from "./Skeleton/ProductCartSkeleton";

const Products = () => {
  const { data, isLoading } = useGetAllProductQuery(1);
  const products = data?.data;
  // console.log("data=object", products);

  return (
    <div className="max-w-7xl mx-auto mb-5">
      <h1 className="text-4xl font-bold my-6">Our All Products</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : products?.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;
