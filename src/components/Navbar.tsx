import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, selectCurrentUser } from "../redux/features/userSlice";
import { useGetMeQuery } from "../redux/api/getMeApi/getMeApi";

const Header = () => {
  const { data } = useGetMeQuery(undefined);
  const myself = data?.data;
  console.log("object", myself);
  const location = useLocation();

  const navLink = [
    {
      name: "Home",
      pathName: "/",
    },
    {
      name: "Product",
      pathName: "/product-page",
    },
    {
      name: "About",
      pathName: "/about",
    },
    {
      name: "Contact",
      pathName: "/contact",
    },
  ];

  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.cart.products);

  const user = useAppSelector(selectCurrentUser);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className=" border border-red-700 mx-auto text-white text-lg p-2">
      <nav className="px-20  fixed top-0 left-0 w-full z-50 flex items-center justify-between space-x-10 py-2 bg-slate-700">
        <Link to={"/"} className="  hover:bg-emerald-700 rounded ">
          <img src={logo} alt="logo" className="w-16  " />
        </Link>

        <div className="hidden md:flex items-center space-x-5 ">
          <ul className="flex items-center space-x-5">
            {/* // navLink */}

            {navLink.map((item) => (
              <li key={item.pathName}>
                <Link
                  className={`rounded-lg ${
                    location.pathname == item.pathName ? "bg-emerald-700" : ""
                  } backdrop-blur-[2px] p-1 inline-block  transition-transform transform hover:scale-105 hover:shadow-2xl  text-white  hover:bg-emerald-500 hover:text-slate-800`}
                  to={item.pathName}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Authentication Buttons */}
            {user ? (
              <>
                <li>
                  <a
                    className="rounded-lg backdrop-blur-[2px] p-1 inline-block transition-transform transform hover:scale-105 hover:shadow-2xl  text-white  hover:bg-emerald-500 hover:text-slate-800"
                    href="dashboard/user"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="relative">
                  <Link
                    className="rounded-lg backdrop-blur-[2px] p-1 inline-block transition-transform transform hover:scale-105 hover:shadow-2xl  text-white  hover:bg-emerald-500 hover:text-slate-800"
                    to={"/cart"}
                  >
                    <ShoppingCart size={24} />
                  </Link>
                  <span className="rounded-full absolute top-[-10px] left-[20px] bg-emerald-400 text-white text-center size-[25px]">
                    {products.length}
                  </span>
                </li>
              </>
            ) : (
              " "
            )}

            {/* Authentication Buttons */}
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="rounded-md text-xl font-medium hover:text-red  transition-transform transform hover:scale-105 hover:shadow-2xl  text-white  hover:bg-emerald-500 hover:text-slate-800"
                >
                  {myself?.name} Logout
                </button>
              </>
            ) : (
              <li>
                <Link
                  className="rounded-lg backdrop-blur-[2px] p-4 inline-block  text-white  hover:bg-emerald-500 hover:text-slate-800"
                  to={"/login"}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden bg-slate-300 flex items-center">
          <button
            onClick={handleMenuToggle}
            className=" p-2 rounded-md bg-white  text-black  hover:bg-black hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-blue-900 flex flex-col items-center mt-8 py-4 w-full ">
          <li className="">
            <Link
              className="rounded-lg backdrop-blur-[4px] p-1 inline-block   text-white  hover:bg-emerald-500 hover:text-slate-800"
              to={"/product-page"}
              onClick={handleMenuToggle}
            >
              Products
            </Link>
          </li>
          <li>
            <a
              className="rounded-lg backdrop-blur-[4px] p-1 inline-block   text-white  hover:bg-emerald-500 hover:text-slate-800"
              href="/about"
              onClick={handleMenuToggle}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="rounded-lg backdrop-blur-[4px] p-1 inline-block   text-white  hover:bg-emerald-500 hover:text-slate-800"
              href="/contact"
              onClick={handleMenuToggle}
            >
              Contact
            </a>
          </li>
          <li className="relative">
            <Link
              className="rounded-lg backdrop-blur-[4px] p-1 inline-block   text-white  hover:bg-emerald-500 hover:text-slate-800"
              to={"/cart"}
              onClick={handleMenuToggle}
            >
              <ShoppingCart size={24} />
            </Link>
            <span className="rounded-full absolute top-[-10px] left-[20px] bg-primary text-white text-center size-[25px]">
              {products.length}
            </span>
          </li>

          {/* Authentication Buttons */}
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="rounded-lg backdrop-blur-[4px] p-1 inline-block  text-white  hover:bg-emerald-500 hover:text-slate-800"
              >
                Logout
              </button>
            </>
          ) : (
            <li>
              <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block  text-white  hover:bg-emerald-500 hover:text-slate-800"
                to={"/login"}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Header;
