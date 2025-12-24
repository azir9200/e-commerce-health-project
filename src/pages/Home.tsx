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

const Home = () => {
  return (
    <div className="">
      {/* <HomeSlide /> */}
      {/* <Banner />
      <HomeProducts /> */}
      <BannerLayout />
      {/* <ProductSection />
      <ChooseSection /> */}
      {/* <Statistics /> */}
      {/* <AwardSection /> */}
      {/* <ContactSection />
      */}

      <Hero />
      <BestSellers />
      <FeaturedProducts />
      {/* <Categories /> */}

      <Benefits />
      <AboutUs />
      <Testimonials />
      <InstagramFeed />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
