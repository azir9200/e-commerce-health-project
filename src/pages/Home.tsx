// import ProductCard from "./ProductCard";

import { AboutUs } from "../components/sections/AboutUs";
import { Benefits } from "../components/sections/Benefits";
import { BestSellers } from "../components/sections/BestSellers";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import { Hero } from "../components/sections/Hero";
import { NewsletterSignup } from "../components/sections/NewsletterSignup";
import { InstagramFeed } from "../components/sections/SocialPosts";
import { Testimonials } from "../components/sections/Testimonials";

import BannerLayout from "./home/Bannar/BannerLayout";
import Floating from "./home/Floating";

const Home = () => {
  return (
    <div className="">
      <Floating />
      <BannerLayout />

      <Hero />
      <BestSellers />
      <FeaturedProducts />

      <Benefits />
      <AboutUs />
      <Testimonials />
      <InstagramFeed />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
