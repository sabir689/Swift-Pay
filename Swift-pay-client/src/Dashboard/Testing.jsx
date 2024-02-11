import { NavLink } from "react-router-dom";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
const Testing = ({
  setOpen,
  open,
  menus,
  user,
  mainUser,
  handleLogOut,
  GiSellCard,
}) => {
  return (
    <div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <NavLink
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && "mt-5"
            } group flex items-center text-sm  gap-3.5 font-medium pr-9 p-4 hover:bg-gray-800 rounded-md ${
              location?.pathname === menu?.link ? "text-[#49108B] bg-white" : ""
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
  );
};

export default Testing;
