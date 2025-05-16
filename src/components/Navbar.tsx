import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { useGetAllCartQuery } from "../redux/api/Cart/CartApi";
import { useGetMeQuery } from "../redux/api/getMeApi/getMeApi";
import { logout, selectCurrentUser } from "../redux/features/userSlice";
import { useAppSelector } from "../redux/hooks";

const Header = () => {
  const { data } = useGetMeQuery(undefined);
  const res = useGetAllCartQuery();
  const products = res.data.data;
  const myself = data?.data;
  console.log("object", myself?.name);

  const user = useAppSelector(selectCurrentUser);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className=" text-gray-800 text-lg">
      <nav className="fixed top-0 left-0 w-full bg-white z-50  border-b-[2px] ">
        <div>
          <div className="max-w-7xl mx-auto flex items-center justify-between space-x-10 py-2 md:px-0 px-4">
            <Link to={"/"} className=" ">
              <img src={logo} alt="logo" className="w-16  " />
            </Link>
            <div className="hidden md:flex items-center space-x-5 ">
              <ul className="flex items-center space-x-5">
                <li>
                  <Link
                    className="rounded-lg font-serif  backdrop-blur-[2px] p-1 inline-block  transition-transform transform hover:scale-105 hover:shadow-2xl    "
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-lg font-serif backdrop-blur-[2px] p-1 inline-block  transition-transform transform hover:scale-105 hover:shadow-2xl   "
                    to={"/product-page"}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <a
                    className="rounded-lg font-serif backdrop-blur-[2px] p-1 inline-block transition-transform transform hover:scale-105 hover:shadow-2xl    "
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-lg font-serif backdrop-blur-[2px] p-1 inline-block transition-transform transform hover:scale-105 hover:shadow-2xl    "
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
                {/* Authentication Buttons */}
                {user ? (
                  <>
                    <li>
                      <a
                        className="rounded-lg font-serif backdrop-blur-[2px] p-1 inline-block transition-transform transform hover:scale-105 hover:shadow-2xl    "
                        href="dashboard/user"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="relative">
                      <Link
                        className="rounded-lg font-serif backdrop-blur-[2px] p-1 inline-block transition-transform transform hover:scale-105 hover:shadow-2xl    "
                        to={"/cart"}
                      >
                        <ShoppingCart size={24} />
                      </Link>
                      <span className="rounded-full font-serif absolute top-[-10px] left-[20px] bg-emerald-400  text-center size-[25px]">
                        {products.length}
                      </span>
                    </li>
                  </>
                ) : (
                  " "
                )}

                {/* Authentication Buttons */}
                {user ? (
                  <div className=" flex gap-4">
                    <p className="rounded-md font-serif text-xl font-medium">
                      {" "}
                      {myself?.name} |
                    </p>
                    <button
                      onClick={handleLogout}
                      className="rounded-md font-serif text-xl font-medium hover:text-red  transition-transform transform hover:scale-105 hover:shadow-2xl    "
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <li>
                    <Link
                      className="rounded-lg font-serif backdrop-blur-[2px] inline-block    "
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
                className=" p-2 rounded-md   text-black  hover:bg-black hover:text-white focus:outline-none"
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
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden fixed  top-16 left-0 bg-blue-900 flex flex-col items-center py-4 w-full overflow-y-auto  z-50  transition-all duration-500 ease-in-out">
          <li className="">
            <Link
              className="rounded-lg font-serif backdrop-blur-[4px] p-1 inline-block   text-white  "
              to={"/product-page"}
              onClick={handleMenuToggle}
            >
              Products
            </Link>
          </li>
          <li>
            <a
              className="rounded-lg font-serif backdrop-blur-[4px] p-1 inline-block   text-white  "
              href="/about"
              onClick={handleMenuToggle}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="rounded-lg font-serif backdrop-blur-[4px] p-1 inline-block   text-white  "
              href="/contact"
              onClick={handleMenuToggle}
            >
              Contact
            </a>
          </li>
          <li className="relative">
            <Link
              className="rounded-lg font-serif backdrop-blur-[4px] p-1 inline-block   text-white  "
              to={"/cart"}
              onClick={handleMenuToggle}
            >
              <ShoppingCart size={24} />
            </Link>
            <span className="rounded-full font-serif absolute top-[-10px] left-[20px] bg-primary text-white text-center size-[25px]">
              {products.length}
            </span>
          </li>

          {/* Authentication Buttons */}
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="rounded-lg font-serif backdrop-blur-[4px] p-1 inline-block  text-white  "
              >
                Logout
              </button>
            </>
          ) : (
            <li>
              <Link
                className="rounded-lg font-serif backdrop-blur-[2px] p-1 inline-block  text-white  "
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
