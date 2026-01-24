import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { Input } from "../ui/input";
import FooterSection from "./FooterSection";

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

const Footer = () => {
  return (
    <section className="bg-black text-white">
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center">
          {/* Brand + Subscribe */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                FitGear
              </span>
            </Link>

            <p className="text-sm text-gray-300">
              Subscribe & get <span className="text-white">10% off</span> your
              first order
            </p>

            <form className="relative w-full max-w-sm">
              <Input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full pr-10 bg-transparent border-gray-600
                           placeholder:text-gray-400 focus:ring-0"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition"
              >
                <FaPaperPlane size={18} />
              </button>
            </form>
          </div>

          {/* Support */}
          <FooterSection title="Support" data={Support} />

          {/* Quick Links */}
          <FooterSection title="Quick Links" data={QuickLinks} />

          {/* Accounts */}
          <FooterSection title="Accounts" data={Accounts} />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} FitGear. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

// const Footer = () => {
//   return (
//     <section className="text-white bg-black">
//       <footer
//         className="
//   max-w-7xl
//   px-2 md:px-0
//   mx-auto
//   grid
//   gap-5
//   py-10
//   grid-cols-1
//   md:grid-cols-2
//   lg:grid-cols-4
// "
//       >
//         <div>
//           <Link
//             to="/"
//             className="flex items-center justify-between space-x-4 group"
//           >
//             <div className="flex flex-col">
//                <Link to="/" className="flex items-center gap-3 group">
//                 {/* <MotionConfig.div
//                   whileHover={{ rotate: 15 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <Dumbbell className="w-8 h-8 text-primary" />
//                 </motion.div> */}
//                 <span className="text-3xl font-bold bg-gradient-to-r from-black via-green-600 to-blue-800 bg-clip-text text-transparent">
//                   FitGear
//                 </span>
//               </Link>
//             </div>
//           </Link>{" "}
//           <p className="my-4">Subscribe</p>
//           <p className="md:text-sm text-[12px] font-normal">
//             Get 10% of your first order
//           </p>
//           <form className="relative flex items-center my-2 w-[80%]">
//             <Input
//               className="flex-1 pr-8 z-10 bg-transparent placeholder:text-gray-200 border-slate-500 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-slate-500"
//               type="email"
//               required
//               name={"email"}
//               placeholder={"Enter Your Email"}
//             />
//             <button
//               type="submit"
//               className="absolute right-2.5 z-30 -translate-y-1/2 top-1/2"
//             >
//               <FaPaperPlane className={cn("text-slate-300", {})} size={20} />
//             </button>
//           </form>
//         </div>
//         <div>
//           <FooterSection data={Support} title="Support" />
//         </div>
//         <div>
//           <FooterSection data={QuickLinks} title="Quick Links" />
//         </div>
//         <div>
//           <FooterSection data={Accounts} title="Accounts" />
//         </div>
//       </footer>
//     </section>
//   );
// };

export default Footer;
