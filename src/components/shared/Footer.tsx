import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { Input } from "../ui/input";
import FooterSection from "./FooterSection";
import { cn } from "../../lib/utils";

const Footer = () => {
  const Accounts = [
    {
      title: "Products",
      href: "/service",
    },

    {
      title: "Login/Register",
      href: "/login",
    },

    {
      title: "Cart",
      href: "/cart",
    },
    {
      title: "All products",
      href: "/allproduct",
    },
  ];
  const QuickLinks = [
    {
      title: "Privacy Policy",
      href: "/login",
    },

    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ];
  const Support = [
    {
      title: "Dublin, Ireland.",
    },
    {
      title: "aziruddin83@gmail.com",
    },
    {
      title: "+353838485737",
    },
  ];

  return (
    <section className="text-white bg-black">
      <footer
        className="
  max-w-7xl
  px-2 md:px-0
  mx-auto
  grid
  gap-5
  py-10
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-4
"
      >
        <div>
          <Link
            to="/"
            className="flex items-center justify-between space-x-4 group"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                FitGear Store
              </span>
            </div>
          </Link>{" "}
          <p className="my-4">Subscribe</p>
          <p className="md:text-sm text-[12px] font-normal">
            Get 10% of your first order
          </p>
          <form className="relative flex items-center my-2 w-[80%]">
            <Input
              className="flex-1 pr-8 z-10 bg-transparent placeholder:text-gray-200 border-slate-500 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-slate-500"
              type="email"
              required
              name={"email"}
              placeholder={"Enter Your Email"}
            />
            <button
              type="submit"
              className="absolute right-2.5 z-30 -translate-y-1/2 top-1/2"
            >
              <FaPaperPlane className={cn("text-slate-300", {})} size={20} />
            </button>
          </form>
        </div>
        <div>
          <FooterSection data={Support} title="Support" />
        </div>
        <div>
          <FooterSection data={QuickLinks} title="Quick Links" />
        </div>
        <div>
          <FooterSection data={Accounts} title="Accounts" />
        </div>
      </footer>
    </section>
  );
};

export default Footer;
