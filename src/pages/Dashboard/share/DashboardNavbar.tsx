import { FiUsers } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { IoReorderFour } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { GrMenu } from "react-icons/gr";
import { MdOutlineCreateNewFolder, MdOutlineDashboard } from "react-icons/md";
import { Heart } from "lucide-react";

export const DashboardData = [
  { route: "/dashboard", name: "Dashboard", icon: <MdOutlineDashboard /> },

  {
    route: "/dashboard/manageProduct",
    name: "Manage Products",
    icon: <AiOutlineProduct />,
  },
  {
    route: "/dashboard/manageSupplement",
    name: "Manage Supplement",
    icon: <MdOutlineCreateNewFolder />,
  },
  { route: "/dashboard/user", name: "Manage Users", icon: <FiUsers /> },
  {
    route: "/dashboard/all-orders",
    name: "Manage Orders",
    icon: <IoReorderFour />,
  },
];

export const ProfileData = [
  { route: "/profile", name: "Profile info", icon: <GoPerson /> },
  { route: "/profile/order", name: "My Order", icon: <GrMenu /> },
  { route: "/profile/wishlist", name: "My Wishlist", icon: <Heart /> },
];
