import { Link, useLocation } from "react-router-dom";
import { DashboardData, ProfileData } from "./share/DashboardNavbar";
import { selectCurrentUser } from "../../redux/features/userSlice";
import { useAppSelector } from "../../redux/hooks";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

const DesktopLayout = () => {
  const router = useLocation();

  const user = useAppSelector(selectCurrentUser);

  const menuData =
    user?.role === "admin" ? [...DashboardData, ...ProfileData] : ProfileData;
  return (
    <div className="flex h-screen">
      <div className="fixed top-0 left-0 h-screen w-72 flex flex-col justify-between border-r bg-white drop-shadow-sm">
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

        <div className="pb-5 mb-6 border-b">
          <div className="text-gray-400">
            <span>{user?.email}</span>
          </div>
        </div>

        {/* Scrollable Navigation Menu */}
        <div
          className="flex-grow overflow-y-auto px-8"
          style={{
            scrollbarWidth: "thin",
            msOverflowStyle: "auto",
            // scrollbarWidth: "none",
          }}
        >
          <div className="flex flex-col gap-2 mb-5">
            <div className="flex flex-col gap-5 mt-3 text-lg">
              {menuData?.map((item, _id) => {
                const isActive = router.pathname === item?.route;
                return (
                  <Link
                    key={_id}
                    className={`flex items-center gap-2 hover:bg-text-white hover:bg-slate-800 ${
                      isActive
                        ? "bg-primary text-white p-2 rounded-lg"
                        : "p-2 rounded-lg"
                    }`}
                    to={item?.route}
                  >
                    {item?.icon} {item?.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
