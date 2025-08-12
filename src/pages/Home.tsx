// import ProductCard from "./ProductCard";

import { AboutUs } from "../components/sections/AboutUs";
import { Benefits } from "../components/sections/Benefits";
import { BestSellers } from "../components/sections/BestSellers";
import { Categories } from "../components/sections/Categories";
import FeaturedProducts from "../components/sections/FeaturedProducts";

import { Hero } from "../components/sections/Hero";
import { NewsletterSignup } from "../components/sections/NewsletterSignup";
import { InstagramFeed } from "../components/sections/SocialPosts";
import { Testimonials } from "../components/sections/Testimonials";

import { useGetAllProductQuery } from "../redux/api/productApi/ProductApi";
import AwardSection from "./home/Award";
import BannerLayout from "./home/Bannar/BannerLayout";
import ChooseSection from "./home/ChooseSection";
import ContactSection from "./home/ContactSection";
import NewsLetter from "./home/NewsLetter";
import ProductSection from "./home/ProductSection";

const Home = () => {
  const { data } = useGetAllProductQuery(null);
  const products = data?.data;
  console.log(products);
  return (
    <div className="">
      {/* <HomeSlide /> */}
      {/* <Banner />
      <HomeProducts /> */}
      <BannerLayout />
      <ProductSection />
      <ChooseSection />
      {/* <Statistics /> */}
      <AwardSection />
      <ContactSection />
      <NewsLetter />
      {/* my data */}
      <Hero />
      <FeaturedProducts />
      <Categories />
      <BestSellers />
      <Benefits />
      <AboutUs />
      <Testimonials />
      <InstagramFeed />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
