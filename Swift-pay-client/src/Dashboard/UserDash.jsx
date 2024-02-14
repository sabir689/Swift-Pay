/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import React, { Suspense } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink, Outlet } from "react-router-dom";
import DashNavbar from "./DashNavbar.jsx/DashNavbar";
import ProfileModal from "../pages/home/profile modal/profileModal";

const UserDash = ({
  setOpen,
  menus,
  user,
  mainUser,
  handleLogOut,
  GiSellCard,
  profileInfo,
  handleUpdate,
}) => {
  return (
    <div>
      <aside className="flex gap-6">
        <div
          className={`bg-[#0e0e0e] min-h-screen${
            open ? "w-72" : "w-20"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            {/* <p className="hidden text-2xl lg:block text-white">
            <GoHome />
          </p> */}
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <NavLink
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium pr-9 p-4 hover:bg-gray-800 rounded-md ${
                  location?.pathname === menu?.link
                    ? "text-[#49108B] bg-white"
                    : ""
                }`}
              >
                <div>
                  {React.createElement(menu?.icon, {
                    className: `text-xl`,
                  })}
                </div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  } ${
                    menu?.name === "SELL" && menu?.icon === GiSellCard
                      ? "bg-gradient-to-r from-purple-900 text-3xl tracking-[8px] to-indigo-600 py-7 px-10 rounded-3xl"
                      : ""
                  }${
                    menu?.name === "Market"
                      ? "border-2 border-gray-500 py-2 px-3 rounded-3xl"
                      : ""
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
                >
                  {menu?.name}
                </h2>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex-1 mr-3 mt-3 max-w-screen-2xl mx-auto">
          <DashNavbar
            user={user}
            mainUser={mainUser}
            handleLogOut={handleLogOut}
          ></DashNavbar>
          <Suspense fallback={<h1>Loading....</h1>}>
            <Outlet></Outlet>
          </Suspense>
        </div>
      </aside>
      <ProfileModal
        handleUpdate={handleUpdate}
        profileInfo={profileInfo}
      ></ProfileModal>
    </div>
  );
};

export default UserDash;
