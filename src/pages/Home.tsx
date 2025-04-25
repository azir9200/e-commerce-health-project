import Banner from "../components/Banner";
import Products from "../components/Products";
import HomeSlide from "../components/shareHome/Carousal";

const Home = () => {
  return (
    <div className="bg-slate-500 w-full">
      <HomeSlide />
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
