import { Outlet } from "react-router-dom";
import { Navbar } from "../component/navigation/Navigation";
import { Footer } from "../component/footer/Footer";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};
