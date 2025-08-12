import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/layouts/Dashboard";

import AddProduct from "../Dashboarditems/AddProduct";
import EditProduct from "../Dashboarditems/EditProduce";
import UserInfo from "../Dashboarditems/UserInfo";
import About from "../pages/about/About";
import Cart from "../pages/carts/Cart";
import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import ContactPage from "../pages/contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home";
import ManageOrder from "../pages/Order/DashoardOrder";
import Order from "../pages/Order/Order";
import PaymentFailed from "../pages/payments/PaymentFailed";
import PaymentSuccess from "../pages/payments/PaymentSuccess";
import ProductPage from "../pages/product/ProductPage";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";
import { Categories } from "../components/sections/Categories";
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

    // children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    //   {
    //     path: "/cart",
    //     element: <Cart />,
    //   },
    //   {
    //     path: "/product-page",
    //     element: <ProductPage />,
    //   },
    //   {
    //     path: "/categories",
    //     element: <Categories />,
    //   },
    //   {
    //     path: "/checkout",
    //     element: <CheckOutPage />,
    //   },
    //   {
    //     path: "payment/failed",
    //     element: <PaymentFailed></PaymentFailed>,
    //   },
    //   {
    //     path: "payment/success",
    //     element: <PaymentSuccess />,
    //   },
    //   {
    //     path: "/about",
    //     element: <About />,
    //   },
    //   {
    //     path: "/gallery",
    //     element: <Gallery />,
    //   },
    //   {
    //     path: "/contact",
    //     element: <ContactPage />,
    //   },
    //   {
    //     path: "/order",
    //     element: <Order />,
    //   },
    // ],
  },

  //dashboard routes
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "user",
        element: <UserInfo />,
      },

      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "editProduct",
        element: <EditProduct></EditProduct>,
      },
      {
        path: "allorder",
        element: <ManageOrder></ManageOrder>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
  // {
  //   path: "/dashboard",
  //   element: (
  //     <AdminPrivateRoute>
  //       <MainDashbaord />
  //     </AdminPrivateRoute>
  //   ),
  //   children: routerGenerator(Adminpaths),
  // },
  // {
  //   path: "/profile",
  //   element: (
  //     <PrivateRoute>
  //       <MainDashbaord />
  //     </PrivateRoute>
  //   ),
  //   children: routerGenerator(userpaths),
  // },
]);
export default router;
