/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import {
  Clock,
  Globe,
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
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion";
import { Dumbbell, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { useGetMeQuery } from "../../redux/api/getMeApi/getMeApi";
import { logout, selectCurrentUser } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { data } = useGetMeQuery(undefined);

  const myself = data?.data;

  const products = useSelector((state: RootState) => state.cart.products);

  const user = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    navigate(`/product-page?search=${encodeURIComponent(searchQuery)}`);

    setSearchQuery("");
    setShowMobileSearch(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product-page" },
    { name: "Categories", href: "/categories" },
    { name: "Supplement", href: "/supplement" },
    { name: "Commercial", href: "/commercial" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
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
              <div className="flex items-center space-x-8">
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
                  href="mailto:aziruddin83@gmail.com"
                  className="hidden items-center space-x-2 group cursor-pointer"
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

              <div className="hidden md:flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 rounded-full text-xs font-semibold text-white">
                  <Star className="h-3 w-3" />
                  <span>FREE SHIPPING ON ORDERS $500+</span>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className=" flex items-center space-x-1 group cursor-pointer">
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

                <div className="">
                  {/* Cart */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className=" relative"
                    onClick={() => navigate("/cart")}
                  >
                    <ShoppingCart className="h-5 w-5 text-white hover:text-blue-500 transition-colors" />
                    <p className="absolute rounded-full -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 animate-pulse">
                      {products.length}
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Navigation Layer */}

        <div className="bg-white border-b border-gray-100 border ">
          <div className="max-w-7xl mx-auto ">
            <div className="container-custom flex items-center justify-between h-20 px-4 md:px-8">
              <Link to="/" className="flex items-center gap-3 group">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Dumbbell className="w-8 h-8 text-primary" />
                </motion.div>
                <span className="text-3xl font-bold bg-gradient-to-r from-black via-green-600 to-blue-800 bg-clip-text text-transparent">
                  FitGear
                </span>
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
                  <form
                    onSubmit={handleSearchSubmit}
                    className="relative group"
                  >
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search ..."
                        value={searchQuery}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onChange={(e: any) => setSearchQuery(e.target.value)}
                        className="pl-5 pr-14 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm hover:shadow-md"
                      />
                      <Button
                        type="submit"
                        size="sm"
                        className="absolute right-2 top-2 bottom-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg"
                      >
                        <Search className="h-4 w-4 text-white" />
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
                  <Input
                    type="text"
                    placeholder="Search ..."
                    value={searchQuery}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(e: any) => setSearchQuery(e.target.value)}
                    className="pl-5 pr-14 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm hover:shadow-md"
                  />
                  {/* <Search className="h-5 w-5 text-gray-600" /> */}
                </Button>

                {/* data Menu */}
                <div className="md:flex items-center gap-3">
                  {user ? (
                    <div className="flex items-center gap-4">
                      <div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full"
                            >
                              <Avatar className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-8 w-8 border-2 border-blue-500 cursor-pointer">
                                <AvatarImage
                                  src={user?.image || ""}
                                  alt="User"
                                />

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

                            {user?.role == "admin" && (
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
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Link to={"login"}>
                        <Button
                          variant="ghost"
                          className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  text-white hover:bg-blue-950"
                        >
                          Login
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Menu */}
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="lg:hidden rounded-full hover:bg-gray-100"
                    >
                      <Menu className="h-6 w-6 text-gray-900" />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="h-[90vh] rounded-t-3xl bg-white">
                    <DrawerHeader className="px-6 py-4 border-b">
                      <div className="flex items-center justify-between">
                        <h2 className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-xl p-1 rounded text-white border-b border-blue-800/30">
                          FitGear
                        </h2>
                        <DrawerClose asChild>
                          <button className=" rounded-full hover:bg-gray-100">
                            <X className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  rounded w-10 h-10 text-white border-b border-blue-800/30" />
                          </button>
                        </DrawerClose>
                      </div>
                    </DrawerHeader>

                    <div className="px-6 pb-8">
                      {/* Mobile Navigation Links */}
                      <div className="px-6 mt-6 space-y-2">
                        {navItems.map((link) => (
                          <DrawerClose key={link.href} asChild>
                            <Link
                              to={link.href}
                              className={`flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium
        ${
          location.pathname === link.href
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
                            >
                              {link.name}
                              <span className="text-lg">›</span>
                            </Link>
                          </DrawerClose>
                        ))}
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.nav>
  );
};
export default Navbar;
