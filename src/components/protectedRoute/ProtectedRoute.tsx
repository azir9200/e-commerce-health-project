import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/userSlice";

interface ProtectedRouteProps {
  allowedRoles?: string[];
  redirectPath?: string;
  unauthorizedComponent?: React.ReactNode;
}

const ProtectedRoute = ({
  allowedRoles,
  redirectPath = "/login",
  unauthorizedComponent = <div>Access Denied</div>,
}: ProtectedRouteProps) => {
  const user = useAppSelector(selectCurrentUser);

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return unauthorizedComponent;
  }

  return <Outlet />;
};

export default ProtectedRoute;
