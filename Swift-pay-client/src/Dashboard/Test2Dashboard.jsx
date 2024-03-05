/* eslint-disable no-unused-vars */
import React, { Suspense, useContext, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { GiSellCard } from "react-icons/gi";
import { AuthContext } from "../provider/AuthProvider";
import { BsShop } from "react-icons/bs";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { PiAddressBook } from "react-icons/pi";
// import UserDash from "./UserDash";
const UserDash = React.lazy(() => import("../Dashboard/UserDash"));
const AdminDash = React.lazy(() => import("../Dashboard/AdminDash"));
// import AdminDash from "./AdminDash";
const Test2Dashboard = () => {
  const { logOut, user } = useContext(AuthContext);
  const [mainUser] = useUser();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

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
      {
        name: "Join Meeting",
        link: "stream",
        icon: IoVideocamOutline,
      },
      {
        name: "BrandedOwner",
        link: "/dashboard/brandOwner",
        icon: MdOutlineDashboard,
      },
      {
        name: "Saved",
        link: "/dashboard/saved",
        icon: AiOutlineHeart,
      },
      
      {
        name: "Transaction History",
        link: "/dashboard/transactionHistory",
        icon: TbReportAnalytics,
      },
      {
        name: "messages",
        link: "/dashboard/messages",
        icon: FiMessageSquare,
      },
      {
        name: "Address",
        link: "Billing-address",
        icon: PiAddressBook,
      },
      
      {
        name: "Profile",
        link: "profile",
        icon: RiSettings4Line,
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
        name: "brandOwner",
        link: "/dashboard/brandOwner",
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
        name: "Transaction Details",
        link: "/dashboard/userTransaction",
        icon: TbReportAnalytics,
      },
      // {
      //   name: "Cart",
      //   link: "/",
      //   icon: FiShoppingCart,
      // },
      {
        name: "Home",
        link: "/",
        icon: GoHome,
      },
      {
        name: "Order tack",
        link: "order-track",
        icon: PiAddressBook,
      },
      {
        name: "Address",
        link: "billing-address",
        icon: PiAddressBook,
      },
      {
        name: "Profile",
        link: "profile",
        icon: mainUser?.photoURL,
      },
    ];
  }
  const [open, setOpen] = useState(true);
  const [profileInfo, refetch] = useUser();

  const axiosPublic = useAxiosPublic();
  const handleUpdate = (e) => {
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = firstName + " " + lastName;
    const address = form.address.value;
    const gender = form.gender.value;
    const photoURL = form.photoURL.value;
    const age = form.age.value;

    const updateProfileInfo = {
      name,
      firstName,
      lastName,
      address,
      age,
      photoURL,
      gender,
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
        <Suspense fallback={<p>loading...</p>}>
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
        </Suspense>
      ) : (
        // admin dashboard
        <Suspense fallback={<p>loading...</p>}>
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
        </Suspense>
      )}
    </div>
  );
};

export default Test2Dashboard;