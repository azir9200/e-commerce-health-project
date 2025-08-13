import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/layouts/Dashboard";
import AddProduct from "../Dashboarditems/AddProduct";
import EditProduct from "../Dashboarditems/EditProduce";
import UserInfo from "../Dashboarditems/UserInfo";
import ManageOrder from "../pages/Order/DashoardOrder";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";
import AdminPrivateRoute from "../pages/PrivateRoute/AdminPrivateRoute";
import MainDashbaord from "../pages/Dashboard/MainDashbaord";
import PrivateRoute from "../pages/PrivateRoute/UserPrivateRoute";
import { routerGenerator } from "../lib/routerGenerator";
import { Adminpaths, userpaths, userspaths } from "./user.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routerGenerator(userspaths),
  },

  // {
  //   path: "dashboard",
  //   element: <Dashboard></Dashboard>,
  //   children: [
  //     {
  //       path: "user",
  //       element: <UserInfo />,
  //     },

  //     {
  //       path: "addProduct",
  //       element: <AddProduct></AddProduct>,
  //     },
  //     {
  //       path: "editProduct",
  //       element: <EditProduct></EditProduct>,
  //     },
  //     {
  //       path: "allorder",
  //       element: <ManageOrder></ManageOrder>,
  //     },
  //   ],
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminPrivateRoute>
        <MainDashbaord />
      </AdminPrivateRoute>
    ),
    children: routerGenerator(Adminpaths),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <MainDashbaord />
      </PrivateRoute>
    ),
    children: routerGenerator(userpaths),
  },
]);
export default router;
