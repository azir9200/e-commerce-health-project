import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, User } from "lucide-react";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useGetMeQuery(undefined);
  const myself = data?.data;
  const products = useSelector((state: RootState) => state.cart.products);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product-page" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b ">
      <div className="container  px-4">
        <div className="flex items-center justify-between gap-12 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                FG
              </span>
            </div>
            <span className="text-xl font-bold text-foreground">
              FitGear Store
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Desktop Auth & Cart */}
            {user ? (
              <>
                <Link to="/cart" className="relative hidden md:flex">
                  <ShoppingCart className="w-5 h-5" />
                  {products?.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {products.length}
                    </span>
                  )}
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hidden md:flex"
                    >
                      <User className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="px-2 py-1 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {myself?.name}
                      </span>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/user">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Link to="/login">
                <Button variant="outline" size="sm" className="hidden md:flex">
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-2 h-2" />
              ) : (
                <Menu className="w-2 h-2" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-2 px-2">
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-2 h-2" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 mb-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Auth / User Actions */}
            {user ? (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <User className="w-5 h-5" />
                  <span className="text-sm">{myself?.name}</span>
                </div>
                <Link
                  to="/cart"
                  className="relative flex items-center gap-2 mb-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                  {products?.length > 0 && (
                    <span className="ml-auto bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {products.length}
                    </span>
                  )}
                </Link>
                <Link to="/dashboard/user">
                  <Button variant="ghost" className="w-full mb-2">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="w-full"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
