import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";

const MainLAyOut = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLAyOut;
