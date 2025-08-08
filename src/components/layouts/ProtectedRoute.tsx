// import { ReactNode } from "react";
// import { useAppSelector } from "../../redux/hooks";
// import { selectCurrentUser } from "../../redux/features/userSlice";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }: { children: ReactNode }) => {
//   const user = useAppSelector(selectCurrentUser);

//   if (user?.email) {
//     return children;
//   }
//   return <Navigate to="/login" replace={true} />;
// };

// export default ProtectedRoute;
