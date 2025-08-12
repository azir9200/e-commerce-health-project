import ContactPage from "../pages/contact/Contact";
import CheckOutPage from "../components/extra.code/extra";
import About from "../pages/about/About";
import Cart from "../pages/carts/Cart";
import Home from "../pages/Home";
import ProductPage from "../pages/product/ProductPage";
import AdminPrivateRoute from "../pages/PrivateRoute/AdminPrivateRoute";
import PrivateRoute from "../pages/PrivateRoute/UserPrivateRoute";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import OrderVerify from "../pages/payments/Orderdetails";
import DashboardHome from "../pages/Dashboard/DashbordHome/DashboardHome";
import CreateProduct from "../pages/Dashboard/MangeProduct/CreateProduct";
import UpateProduct from "../pages/Dashboard/MangeProduct/UpateProduct";
import ManageProduct from "../pages/Dashboard/MangeProduct/ManageProduct";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import ManageOrder from "../pages/Dashboard/ManageOrder/ManageOrder";
import MyProfile from "../pages/userDashboard/Profile/Profile";
import UserOrder from "../pages/userDashboard/Order/userOrder";
import { Categories } from "../components/sections/Categories";

export const userspaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "All Products",
    path: "/product-page",
    element: <ProductPage />,
  },

  {
    name: "Single Product",
    path: "allproduct/:id",
    element: <SingleProduct />,
  },
  {
    name: "Single Product",
    path: "/categories",
    element: <Categories />,
  },

  // {
  //   name: "Checkout",
  //   path: "/checkout",
  //   element: <CheckOutPage />,
  // },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  // {
  //   name: "Cart",
  //   path: "cart",
  //   element: <Cart />,
  // },
  // {
  //   name: "Service",
  //   path: "service",
  //   element: <ProductPage />,
  // },
  {
    name: "Contact Us",
    path: "/contact",
    element: <ContactPage />,
  },

  // {
  //   name: "OrderVerify",
  //   path: "order/verify",
  //   element: (
  //     <PrivateRoute>
  //       <OrderVerify />
  //     </PrivateRoute>
  //   ),
  // },
];

export const Adminpaths = [
  {
    name: "Dashborad",
    path: "/dashboard",
    element: (
      <AdminPrivateRoute>
        <DashboardHome />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "Create Product",
    path: "/dashboard/createProduct",
    element: (
      <AdminPrivateRoute>
        <CreateProduct />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "update Product",
    path: "/dashboard/updateProduct/:id",
    element: (
      <AdminPrivateRoute>
        <UpateProduct />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "Manage Products",
    path: "/dashboard/manageProduct",
    element: (
      <AdminPrivateRoute>
        <ManageProduct />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "Manage User",
    path: "/dashboard/user",
    element: (
      <AdminPrivateRoute>
        <ManageUser />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "Manage Orders",
    path: "/dashboard/all-orders",
    element: (
      <AdminPrivateRoute>
        <ManageOrder />
      </AdminPrivateRoute>
    ),
  },
];
export const userpaths = [
  {
    name: "Profile",
    path: "/profile",
    element: (
      <PrivateRoute>
        <MyProfile />
      </PrivateRoute>
    ),
  },
  {
    name: "Show Order",
    path: "/profile/order",
    element: (
      <PrivateRoute>
        <UserOrder />
      </PrivateRoute>
    ),
  },
];
