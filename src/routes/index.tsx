import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/carts/Cart";
import About from "../pages/about/About";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import PaymentFailed from "../pages/payments/PaymentFailed";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PaymentSuccess from "../pages/payments/PaymentSuccess";
import ContactPage from "../pages/contact/Contact";
import Dashboard from "../components/layouts/Dashboard";
import UserInfo from "../Dashboarditems/UserInfo";
import AddProduct from "../Dashboarditems/AddProduct";
import EditProduct from "../Dashboarditems/EditProduce";
import ProductPage from "../pages/product/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            {" "}
            <Cart />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/product-page",
        element: (
          <ProductPage />

          // <ProtectedRoute>
          //   <Products />{" "}
          // </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "payment/failed",
        element: <PaymentFailed></PaymentFailed>,
      },
      {
        path: "payment/success",
        element: <PaymentSuccess />,
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  //dashboard routes
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "user",
        element: <UserInfo></UserInfo>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "editProduct",
        element: <EditProduct></EditProduct>,
      },
    ],
  },
]);
