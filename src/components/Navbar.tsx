/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  Badge,
  Clock,
  Globe,
  Heart,
  Mail,
  MapPin,
  Phone,
  Menu,
  Search,
  ShoppingCart,
  Star,
  LogOut,
  User,
  BookDashed,
  Divide,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { useGetMeQuery } from "../redux/api/getMeApi/getMeApi";
import { logout, selectCurrentUser } from "../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { data } = useGetMeQuery(undefined);
  console.log("data", data);
  const myself = data?.data;
  console.log("myself", myself);
  const products = useSelector((state: RootState) => state.cart.products);
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/allproduct?search=${encodeURIComponent(searchQuery)}`);
      setShowMobileSearch(false);
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product-page" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        scrolled
          ? "shadow-xl bg-white/95 backdrop-blur-md"
          : "bg-white shadow-lg"
      }`}
    >
      {/* Top Layer - Professional Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white border-b border-blue-800/30">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between items-center py-2.5 text-sm">
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <a
                  href="https://wa.me/00353838485737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 group cursor-pointer"
                >
                  <div className="py-1.5 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <span className="group-hover:text-blue-200 transition-colors">
                    +353838485737
                  </span>
                </a>
              </div>
              <a
                href="mailto:junayetshiblu0@gmail.com"
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <div className="p-1.5 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="group-hover:text-blue-200 transition-colors">
                  aziruddin83@gmail.com
                </span>
              </a>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="p-1.5 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span className="group-hover:text-blue-200 transition-colors">
                  Dublin, Ireland
                </span>
              </div>
            </div>

            <div className=" md:flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 rounded-full text-xs font-semibold text-white">
                <Star className="h-3 w-3" />
                <span>FREE SHIPPING ON ORDERS $500+</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-1 group cursor-pointer">
                <Clock className="h-3.5 w-3.5 group-hover:text-blue-200 transition-colors" />
                <span className="group-hover:text-blue-200 transition-colors">
                  24/7 Support
                </span>
              </div>

              <div className="hidden sm:flex  items-center space-x-1 group cursor-pointer">
                <Globe className="h-3.5 w-3.5 group-hover:text-blue-200 transition-colors" />
                <span className="group-hover:text-blue-200 transition-colors">
                  EN
                </span>
              </div>

              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative hover:bg-blue-500 rounded-xl p-2 transition-all duration-300"
                  onClick={() => navigate("/wishlist")}
                >
                  <Heart className="h-5 w-5 text-white hover:text-red-500 transition-colors" />

                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-500 hover:bg-red-600 animate-pulse">
                    4
                  </Badge>
                </Button>

                {/* Cart */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative hover:bg-blue-500 rounded-xl p-2 transition-all duration-300"
                  onClick={() => navigate("/cart")}
                >
                  <ShoppingCart className="h-5 w-5 text-white hover:text-blue-500 transition-colors" />
                  {products?.length > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-blue-600 hover:bg-blue-700 animate-pulse">
                      {products?.length}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation Layer */}
      <div className="bg-white border-b border-gray-100 border ">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between items-center h-20 ">
            <Link
              to="/"
              className="flex items-center justify-between space-x-4 group"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Fit-Gear
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold text-base group rounded-lg hover:bg-blue-50 ${
                    location.pathname === link.href
                      ? "text-blue-600 bg-blue-50"
                      : ""
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                      location.pathname === link.href
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></span>
                </Link>
              ))}
              <div className="hidden lg:block flex-1 max-w-[300px] mx-8">
                <form onSubmit={handleSearchSubmit} className="relative group">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search luxury cars, brands, models..."
                      value={searchQuery}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      onChange={(e: any) => setSearchQuery(e.target.value)}
                      className="pl-5 pr-14 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm hover:shadow-md"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="absolute right-2 top-2 bottom-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden hover:bg-blue-50 rounded-xl p-2"
                onClick={() => setShowMobileSearch(!showMobileSearch)}
              >
                <Search className="h-5 w-5 text-gray-600" />
              </Button>

              {/* data Menu */}
              <div className="hidden md:flex items-center gap-3">
                {user ? (
                  <div className="flex items-center gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full"
                        >
                          <Avatar className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-8 w-8 border-2 border-streetgrub-orange cursor-pointer">
                            <AvatarImage src={user?.image || ""} alt="User" />

                            <AvatarFallback>
                              <p>AU</p>
                              {myself?.name?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link
                            to="/profile"
                            className="flex items-center cursor-pointer"
                          >
                            <User className="mr-2 h-4 w-4" />
                            Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />

                        {myself?.role == "admin" && (
                          <div>
                            <DropdownMenuItem asChild>
                              <Link
                                to="/dashboard"
                                className="flex items-center cursor-pointer"
                              >
                                <BookDashed className="mr-2 h-4 w-4" />
                                Dashboard
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                          </div>
                        )}
                        <DropdownMenuItem>
                          <p
                            onClick={() => handleLogout()}
                            className="  text-[#333333] flex items-center gap-1 hover:text-[#FF6b35] transition-colors cursor-pointer"
                          >
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                          </p>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Link to={"login"}>
                      <Button
                        variant="ghost"
                        className="  text-[#333333]  transition-colors"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to={"/register"}>
                      <Button className="bg-[#FF6b35] text-white hover:bg-[#FF6b35]/90">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* <div className="border border-red-500">
                {user ? (
                  <p> {myself?.name} </p>
                ) : (
                  // <DropdownMenu>
                  //   <DropdownMenuTrigger asChild>
                  //     <Avatar className="cursor-pointer">
                  //       <AvatarImage
                  //         // src={data?.image || "/default-avatar.png"}
                  //         src={data?.image}
                  //       />
                  //       <p className=" text-slate-800">
                  //         <AvatarFallback>
                  //           {data?.name?.charAt(0)}
                  //         </AvatarFallback>
                  //       </p>
                  //     </Avatar>
                  //   </DropdownMenuTrigger>
                  //   <DropdownMenuContent align="end">
                  //     {data?.role == "admin" && (
                  //       <DropdownMenuItem>
                  //         <Link to={"/dashboard"}>dashboard</Link>
                  //       </DropdownMenuItem>
                  //     )}
                  //     <DropdownMenuItem>
                  //       <Link to={"/profile"}>Profile</Link>
                  //     </DropdownMenuItem>

                  //     <div onClick={handleLogout}>
                  //       <DropdownMenuItem>Logout</DropdownMenuItem>
                  //     </div>
                  //   </DropdownMenuContent>
                  // </DropdownMenu>
                  <div className="hidden lg:flex items-center space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-semibold hover:bg-gray-50 rounded-xl px-4"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-6 font-semibold"
                      onClick={() => navigate("/register")}
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </div> */}

              {/* Mobile Menu */}
              <Drawer>
                <DrawerTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden hover:bg-gray-50 rounded-xl p-2"
                  >
                    <Menu className="h-6 w-6 text-gray-600" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="max-h-[85vh] bg-white/95 backdrop-blur-md">
                  <DrawerHeader className="text-left border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                    <DrawerTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Fit-Gear
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="px-6 pb-8">
                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col space-y-2 mb-8 mt-4">
                      {navItems.map((link) => (
                        <DrawerClose key={link.href} asChild>
                          <Link
                            to={link.href}
                            className={`text-lg font-semibold py-4 px-4 rounded-xl transition-all duration-300 border-b border-gray-100 hover:bg-blue-50 hover:text-blue-600 ${
                              location.pathname === link.href
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-700"
                            }`}
                          >
                            {link.name}
                          </Link>
                        </DrawerClose>
                      ))}
                    </div>

                    {/* Mobile data Section */}
                    {token ? (
                      <div className="pt-6 border-t border-gray-200 space-y-3">
                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                          <Avatar className="h-12 w-12 ring-2 ring-white">
                            <AvatarImage src={data?.avatar} alt={data?.name} />
                            <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                              {data?.name?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {data?.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              email {data?.email}
                            </p>
                          </div>
                        </div>
                        <DrawerClose asChild>
                          <Button
                            variant="outline"
                            className="w-full py-3 rounded-xl font-semibold border-red-200 text-red-600 hover:bg-red-50"
                            onClick={handleLogout}
                          >
                            Logout
                          </Button>
                        </DrawerClose>
                      </div>
                    ) : (
                      <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                        <DrawerClose asChild>
                          <Button
                            variant="outline"
                            className="w-full py-3 rounded-xl font-semibold border-blue-200 hover:bg-blue-50"
                            onClick={() => navigate("/login")}
                          >
                            Login
                          </Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                          <Button
                            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                            onClick={() => navigate("/register")}
                          >
                            Sign Up
                          </Button>
                        </DrawerClose>
                      </div>
                    )}

                    {/* Mobile Contact Info */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Contact Us
                      </h4>
                      <div className="flex flex-col space-y-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                          <Phone className="h-4 w-4 text-blue-600" />
                          <span>+880 1640 011818</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                          <Mail className="h-4 w-4 text-blue-600" />
                          <span>junayetshiblu0@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <span>Dhaka Bangladesh</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {showMobileSearch && (
            <div className="lg:hidden py-4 border-t border-gray-100 bg-gray-50/50">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Input
                  type="text"
                  placeholder="Search cars, brands, models..."
                  value={searchQuery}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e: any) => setSearchQuery(e.target.value)}
                  className="pl-5 pr-14 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 bg-white shadow-sm"
                  autoFocus
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-2 top-2 bottom-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
