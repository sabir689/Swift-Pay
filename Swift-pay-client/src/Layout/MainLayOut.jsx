import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Shared/Footer";
import { Suspense } from "react";

const MainLAyOut = () => {
  return (
    <div>
      <div className="">
        <NavBar></NavBar>
      </div>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Outlet></Outlet>
      </Suspense>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLAyOut;
