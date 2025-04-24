import { Outlet } from "react-router-dom";
import TopSection from "../component/top/Top";
import { Footer } from "../component/footer/Footer";
import { Navbar } from "../component/navigation/Navigation";

export const MainLayout = () => {  
  return (
    <div>
      <TopSection/>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};
