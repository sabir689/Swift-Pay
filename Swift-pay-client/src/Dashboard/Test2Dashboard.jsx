import { useContext, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { GiSellCard } from "react-icons/gi";
import { AuthContext } from "../provider/AuthProvider";
import { BsCart2, BsShop } from "react-icons/bs";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import AdminDash from "./AdminDash";
import UserDash from "./UserDash";
import Testing from "./testing";
import { IoHome } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoMdLogOut } from "react-icons/io";
const Test2Dashboard = () => {
  const { logOut, user } = useContext(AuthContext);
  const [mainUser] = useUser();
  console.log(mainUser);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const location = useLocation();
  let menus;
  if (mainUser?.role === "user") {
    menus = [
      {
        name: "SELL",
        link: "/dashboard/sellPost",
        icon: GiSellCard,
      },
      {
        name: "Market",
        link: "/dashboard/market",
        icon: LuShoppingBag,
      },
      {
        name: "dashboard",
        link: "/dashboard/myDashboard",
        icon: MdOutlineDashboard,
      },

      {
        name: "My Products",
        link: "/dashboard/my-products",
        icon: BsShop,
      },
      {
        name: "Home",
        link: "/",
        icon: GoHome,
      },
      { name: "Saved", link: "/dashboard/saved", icon: AiOutlineHeart },
      { name: "user", link: "/dashboard/sendMoney", icon: AiOutlineUser },
      { name: "messages", link: "/", icon: FiMessageSquare },
      {
        name: "Profile",
        link: "/profile", 
        icon: RiSettings4Line
       },
    ];
  } else {
    // admin menus
    menus = [
      {
        name: "SELL",
        link: "/dashboard/sellPost",
        icon: GiSellCard,
      },
      {
        name: "Market",
        link: "/dashboard/market",
        icon: LuShoppingBag,
      },
      {
        name: "dashboard",
        link: "/dashboard/myDashboard",
        icon: MdOutlineDashboard,
      },

      {
        name: "My Products",
        link: "/dashboard/my-products",
        icon: BsShop,
      },
      { name: "Saved", link: "/dashboard/saved", icon: AiOutlineHeart },
      { name: "All users", link: "/dashboard/allUsers", icon: AiOutlineUser },
      { name: "messages", link: "/", icon: FiMessageSquare },
      {
        name: "analytics",
        link: "/",
        icon: TbReportAnalytics,
      },
      {
        name: "Cart",
        link: "/",
        icon: FiShoppingCart,
      },
      {
        name: "Home",
        link: "/",
        icon: GoHome,
      },
      {
        name: "Profile",
        link: "profile", 
        icon: RiSettings4Line
       },
    ];
  }
  const [open, setOpen] = useState(true);
  const [profileInfo, refetch] = useUser();

  const axiosPublic = useAxiosPublic();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    // const name = firstName + " " + lastName;
    const address = form.address.value;
    const gender = form.gender.value;
    const photoURL = form.photoURL.value;
    const age = form.age.value;

    const updateProfileInfo = {
      firstName,
      lastName,
      address,
      age,
      gender,
      photoURL,
    };
    axiosPublic
      .patch(`/api/users/${profileInfo?._id}`, updateProfileInfo)
      .then((res) => {
        console.log(res.data);
        toast.success("Updated Profile");
        refetch();
      });
  };

  return (
    <div className="">
      {mainUser?.role === "user" ? (
        <UserDash
          setOpen={setOpen}
          open={open}
          menus={menus}
          user={user}
          mainUser={mainUser}
          handleLogOut={handleLogOut}
          GiSellCard={GiSellCard}
          profileInfo={profileInfo}
          handleUpdate={handleUpdate}
        ></UserDash>
      ) : (
        // admin dashboard
        <AdminDash
          setOpen={setOpen}
          open={open}
          menus={menus}
          user={user}
          mainUser={mainUser}
          handleLogOut={handleLogOut}
          profileInfo={profileInfo}
          GiSellCard={GiSellCard}
        ></AdminDash>
      )}
    </div>
  );
};

export default Test2Dashboard;
