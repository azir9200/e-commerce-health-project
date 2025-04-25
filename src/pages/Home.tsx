// import ProductCard from "./ProductCard";
import ProductCart from "../components/ProductCard";
import Products from "../components/Products";
import HomeSlide from "../components/shareHome/Carousal";
import ProductCardSkeleton from "../components/Skeleton/ProductCartSkeleton";
import { useGetAllProductQuery } from "../redux/api/productApi/ProductApi";

const Home = () => {
  const { data, isLoading } = useGetAllProductQuery(null);
  const products = data?.data;
  return (
    <div className=" border border-red-600">
      <HomeSlide />
      {/* <Banner /> */}
      <Products />
      <div className="bg-green-600 m-4">
        <div className=" bg-red-400 h-20 ">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))
              : products?.map.slice(
                  0,
                  8
                )((product: any) => (
                  <ProductCart key={product._id} product={product} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
