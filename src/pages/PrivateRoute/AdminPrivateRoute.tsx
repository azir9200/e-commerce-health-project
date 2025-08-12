import React from "react";
import { Navigate, useLocation } from "react-router-dom"; 

import { jwtDecode } from "jwt-decode";
import { useAppSelector } from "../../redux/hooks";

interface UserInterface {
  role: string;
  userId: string;
}

const AdminPrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector(state => state.user.token);
  let userInfo: UserInterface | null = null; 

  if (token) {
    try {
      userInfo = jwtDecode<UserInterface>(token);
    } catch (error) {
      console.error("Invalid token", error);
    }
  }

  const location = useLocation();

  if (!token || !userInfo || userInfo.role !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AdminPrivateRoute;
