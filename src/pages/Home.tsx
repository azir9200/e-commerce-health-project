import Products from "../components/Products";
import HomeSlide from "../components/shareHome/Carousal";

const Home = () => {
  return (
    <div className=" border border-red-600">
      <HomeSlide />
      {/* <Banner /> */}
      <Products />
      <div className="bg-green-600 m-4">
        <div className=" bg-red-400 h-20 ">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
