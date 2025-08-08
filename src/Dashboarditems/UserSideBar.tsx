import { Cog6ToothIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Home } from "lucide-react";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div className="h-screen sticky top-0 border-r-2 border-secondary/20">
      <div className="flex flex-col items-center bg-slate-700 gap-5 h-full py-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-white text-slate-800 cursor-pointer"
              : "p-2 rounded-https://imagine-redux-story.vercel.app/dashboard/tasks2xl group text-white cursor-pointer transition-all  hover:bg-emerald-500 hover:text-slate-800"
          }
        >
          <Home className="h-7 w-7 group-hover:text-white" />
        </NavLink>

        <NavLink
          to="/dashboard/user"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-white text-slate-800 cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-emerald-500 text-white cursor-pointer transition-all"
          }
        >
          User
          <UserCircleIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
        <NavLink
          to="/dashboard/allorder"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-white text-slate-800 cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-emerald-500 text-white cursor-pointer transition-all"
          }
        >
          Order
          <UserCircleIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "p-2 rounded-2xl bg-white text-slate-800 cursor-pointer"
              : "p-2 rounded-2xl group hover:bg-emerald-700 text-white cursor-pointer transition-all  mt-auto"
          }
        >
          <Cog6ToothIcon className="h-7 w-7 group-hover:text-white " />
        </NavLink>
      </div>
    </div>
  );
};

export default UserSidebar;
