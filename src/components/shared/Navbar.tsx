/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useMemo, useRef } from "react";
import {
  Clock,
  Globe,
  MapPin,
  Phone,
  Menu,
  Search,
  ShoppingCart,
  Star,
  LogOut,
  User,
  BookDashed,
  Heart,
  Dumbbell,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion";
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
import { Product } from "../../lib/product";

const Navbar = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { data } = useGetMeQuery(undefined);
  const myself = data?.data;

  const products = useSelector((state: RootState) => state.cart.products);
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const user = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const query = searchInputRef.current?.value || "";
      console.log("Search submitted with query:", query);
      if (!query.trim()) return;
      navigate(`/product-page?search=${encodeURIComponent(query)}`);
      if (searchInputRef.current) {
        searchInputRef.current.value = "";
      }
    },
    [navigate],
  );

  const navItems = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Products", href: "/product-page" },
      { name: "Categories", href: "/categories" },
      { name: "Supplement", href: "/supplement" },
      { name: "Commercial", href: "/commercial" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    [],
  );

  // Sub-components for better organization
  const TopBar = () => (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2.5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <a
              href="https://wa.me/00353838485737"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 group cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Call us on WhatsApp"
            >
              <div className="p-1.5 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <span className="group-hover:text-blue-200 transition-colors">
                +353838485737
              </span>
            </a>
            <div className="flex items-center space-x-2 group cursor-pointer hover:opacity-80 transition-opacity">
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

          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center space-x-1 group cursor-pointer hover:opacity-80 transition-opacity">
              <Clock className="h-3.5 w-3.5 group-hover:text-blue-200 transition-colors" />
              <span className="group-hover:text-blue-200 transition-colors">
                24/7 Support
              </span>
            </div>

            <div className="hidden sm:flex items-center space-x-1 group cursor-pointer hover:opacity-80 transition-opacity">
              <Globe className="h-3.5 w-3.5 group-hover:text-blue-200 transition-colors" />
              <span className="group-hover:text-blue-200 transition-colors">
                EN
              </span>
            </div>

            {/* Wishlist Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative hover:bg-white/10"
                  aria-label="Wishlist"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      wishlistItems.length > 0
                        ? "text-red-400"
                        : "text-white hover:text-red-400"
                    }`}
                  />
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full text-xs font-bold bg-red-500">
                      {wishlistItems.length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>My Wishlist</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {wishlistItems.length === 0 ? (
                  <div className="p-4 text-center text-sm text-gray-500">
                    Your wishlist is empty ❤️
                  </div>
                ) : (
                  <>
                    {wishlistItems.slice(0, 3).map((item: Product) => (
                      <DropdownMenuItem
                        key={item.id}
                        className="flex gap-3 items-center cursor-pointer"
                        onClick={() => navigate(`/allproduct/${item.id}`)}
                      >
                        {/* <Link to={`/allproduct/${product._id}`}></Link> */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 rounded object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium line-clamp-1">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">€{item.price}</p>
                        </div>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="justify-center font-semibold text-blue-600 cursor-pointer"
                      onClick={() => navigate("/profile/wishlist")}
                    >
                      View All Wishlist →
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-white/10"
              onClick={() => navigate("/cart")}
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5 text-white hover:text-blue-400" />
              {products.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full text-xs font-bold bg-blue-600 animate-pulse">
                  {products.length}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const MainNav = () => (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Home"
        >
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Dumbbell className="w-8 h-8 text-primary" />
          </motion.div>
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-black via-green-600 to-blue-800 bg-clip-text text-transparent">
            FitGear
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                location.pathname === link.href
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:block flex-1 max-w-[300px] mx-8">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="h-12 pl-5 pr-14 rounded-2xl border-2 border-gray-200 focus:border-blue-500 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm hover:shadow-md transition-all"
              aria-label="Search products"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg"
              aria-label="Submit search"
            >
              <Search className="h-4 w-4 text-white" />
            </Button>
          </form>
        </div>

        <div className="flex items-center space-x-3">
          {/* Mobile Search */}
          <div className="lg:hidden">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="h-10 pl-4 pr-10 rounded-xl border-2 border-gray-200 focus:border-blue-500 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm hover:shadow-md transition-all"
                aria-label="Search products"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                aria-label="Submit search"
              >
                <Search className="h-3 w-3 text-white" />
              </Button>
            </form>
          </div>

          {/* User Menu */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-gray-100"
                  aria-label="User menu"
                >
                  <Avatar className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-8 w-8 border-2 border-blue-500 cursor-pointer">
                    <AvatarImage src={user?.image || ""} alt="User avatar" />
                    <AvatarFallback>
                      {myself?.name?.charAt(0).toUpperCase() || "U"}
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
                {user?.role === "admin" && (
                  <>
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
                  </>
                )}
                <DropdownMenuItem>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1 text-[#333333] hover:text-[#FF6b35] transition-colors cursor-pointer w-full text-left"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button
                variant="ghost"
                className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white hover:bg-blue-950"
              >
                Login
              </Button>
            </Link>
          )}

          {/* Mobile Menu */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden rounded-full hover:bg-gray-100"
                aria-label="Open mobile menu"
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
                    <button
                      className="rounded-full hover:bg-gray-100"
                      aria-label="Close menu"
                    >
                      <X className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded w-10 h-10 text-white border-b border-blue-800/30" />
                    </button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <div className="px-6 pb-8">
                <div className="mt-6 space-y-2">
                  {navItems.map((link) => (
                    <DrawerClose key={link.href} asChild>
                      <Link
                        to={link.href}
                        className={`flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium transition-colors ${
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
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <TopBar />
      <MainNav />
    </motion.nav>
  );
};

export default Navbar;
