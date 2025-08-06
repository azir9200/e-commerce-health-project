import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { Navbar } from "../Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
