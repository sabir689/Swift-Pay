/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import DashNavbar from "./DashNavbar.jsx/DashNavbar";
import ProfileModal from "../pages/home/profile modal/profileModal";

const AdminDash = ({
  setOpen,
  open,
  menus,
  user,
  mainUser,
  handleLogOut,
  profileInfo,
  handleUpdate,
}) => {
  const location = useLocation();
  return (
    <div className="flex gap-4">
      <div
        className={`bg-[#7F27FF]  min-h-screen ${
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
              <div>{menu?.icon && <menu.icon className="text-xl" />}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                } ${
                  menu?.name === "SELL"
                    ? "bg-gradient-to-r from-purple-900 text-3xl tracking-[5px] to-indigo-600 py-5 px-8 rounded-xl"
                    : ""
                }${
                  menu?.name === "Market"
                    ? "border-2 border-gray-100 py-2 px-3 rounded-3xl"
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
      <div className="flex-1 mr-3 mt-3 w-full mx-auto">
        <DashNavbar
          user={user}
          mainUser={mainUser}
          handleLogOut={handleLogOut}
        ></DashNavbar>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Outlet></Outlet>
        </Suspense>
      </div>
      <ProfileModal
        handleUpdate={handleUpdate}
        profileInfo={profileInfo}
      ></ProfileModal>
    </div>
  );
};

export default AdminDash;
