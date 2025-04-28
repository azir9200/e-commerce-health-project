import ProductCard from "../components/ProductCard";
import Products from "../components/Products";
import HomeSlide from "../components/shareHome/Carousal";

const Home = () => {
  // const { data, isLoading } = useGetAllProductQuery(1);
  // const products = data?.data;

  return (
    <div className=" border border-red-600">
      <HomeSlide />
      {/* <Banner /> */}
      <Products />
      <div className="grid lg:grid-cols-3 md:grid-cols-2  my-12 gap-8">
        {/* {products.slice(0, 6).map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </div>
    </div>
  );
};

export default Home;
