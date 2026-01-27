import { Categories } from "../components/sections/Categories";
import About from "../pages/about/About";
import Cart from "../pages/carts/Cart";
import Checkout from "../pages/CheckOutPage/CheckOutPage";
import Commercial from "../pages/Commercial/Commercial";
import ContactPage from "../pages/contact/Contact";
import DashboardHome from "../pages/Dashboard/DashbordHome/DashboardHome";
import ManageOrder from "../pages/Dashboard/ManageOrder/ManageOrder";
import CreateSupplement from "../pages/Dashboard/ManageSupplement/CreateSupplement";
import ManageSupplement from "../pages/Dashboard/ManageSupplement/ManageSupplement";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import CreateProduct from "../pages/Dashboard/MangeProduct/CreateProduct";
import DeleteConfirm from "../pages/Dashboard/MangeProduct/DeleteConfirm";
import ManageProduct from "../pages/Dashboard/MangeProduct/ManageProduct";
import UpdateProduct from "../pages/Dashboard/MangeProduct/UpdateProduct";
import Home from "../pages/Home";
import Order from "../pages/Order/Order";
import OrderVerify from "../pages/payments/Orderdetails";
import PaymentFailed from "../pages/payments/PaymentFailed";
import PaymentSuccess from "../pages/payments/PaymentSuccess";
import AdminPrivateRoute from "../pages/PrivateRoute/AdminPrivateRoute";
import PrivateRoute from "../pages/PrivateRoute/UserPrivateRoute";
import ProductPage from "../pages/product/Product";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Supplement from "../pages/Supplements/SupplementPage";
import UserOrder from "../pages/userDashboard/Order/userOrder";
import MyProfile from "../pages/userDashboard/Profile/Profile";
import Wishlist from "../pages/WishList/WishList";

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
    name: "Supplement",
    path: "/supplement",
    element: <Supplement />,
  },
  {
    name: "Commercial",
    path: "/commercial",
    element: <Commercial />,
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

  {
    name: "Checkout",
    path: "/checkout",
    element: (
      <PrivateRoute>
        <Checkout />
      </PrivateRoute>
    ),
  },
  {
    path: "/order",
    element: <Order />,
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
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Cart",
    path: "cart",
    element: (
      <PrivateRoute>
        {" "}
        <Cart />,{" "}
      </PrivateRoute>
    ),
  },

  {
    name: "Service",
    path: "service",
    element: <ProductPage />,
  },
  {
    name: "Contact Us",
    path: "/contact",
    element: <ContactPage />,
  },

  {
    name: "OrderVerify",
    path: "order/verify",
    element: (
      <PrivateRoute>
        <OrderVerify />
      </PrivateRoute>
    ),
  },
];

export const Adminpaths = [
  {
    name: "Dashboard",
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
        <UpdateProduct />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "update Product",
    path: "/dashboard/updateProduct/:id",
    element: (
      <AdminPrivateRoute>
        <UpdateProduct />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "Delete Product",
    path: "/dashboard/delete/product/:id",
    element: (
      <AdminPrivateRoute>
        <DeleteConfirm />
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
    name: "Manage Supplement",
    path: "/dashboard/manageSupplement",
    element: (
      <AdminPrivateRoute>
        <ManageSupplement />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "Create Product",
    path: "/dashboard/createSupplement",
    element: (
      <AdminPrivateRoute>
        <CreateSupplement />
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
    name: "Wishlist",
    path: "/profile/wishlist",
    element: <Wishlist />,
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
