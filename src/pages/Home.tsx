// import ProductCard from "./ProductCard";
import Banner from "../components/Banner";
import HomeSlide from "../components/shareHome/Carousal";
import HomeProducts from "../components/shareHome/HomeProduct";
import { useGetAllProductQuery } from "../redux/api/productApi/ProductApi";

const Home = () => {
  const { data } = useGetAllProductQuery(null);
  const products = data?.data;
  console.log(products);
  return (
    <div className="">
      <HomeSlide />
      <Banner />
      <HomeProducts />
    </div>
  );
};

export default Home;
