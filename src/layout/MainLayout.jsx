import { Outlet } from "react-router-dom";
import { Footer } from "../component/footer/Footer";
import { Navbar } from "../component/navigation/Navigation";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};
