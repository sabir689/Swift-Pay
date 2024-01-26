import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Shared/Footer";

const MainLAyOut = () => {
  return (
    <div>
      <div className="">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLAyOut;
