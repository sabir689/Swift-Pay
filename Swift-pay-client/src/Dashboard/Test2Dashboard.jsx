import React, { useContext, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { GiSellCard } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBoundingBox, BsCart2 } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

const Test2Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const location = useLocation();
  const menus = [
    {
      name: "Sell",
      link: "/dashboard/sellPost",
      icon: GiSellCard,
    },
    {
      name: "Market",
      link: "/dashboard/market",
      icon: LuShoppingBag,
    },
    {
      name: "Home",
      link: "/",
      icon: GoHome,
    },
    {
      name: "dashboard",
      link: "/dashboard/myDashboard",
      icon: MdOutlineDashboard,
    },

    { name: "user", link: "/dashboard/sendMoney", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    {
      name: "analytics",
      link: "/",
      icon: TbReportAnalytics,

      className: "text-blue-400",
    },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e]  min-h-screen ${
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
                  menu?.name === "Sell" && menu?.icon === GiSellCard
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
        <div className="mt-2 w-[300px] lg:w-full">
          <div className="mb-5 rounded-lg border-[1px] border-gray-400 p-2 flex items-center justify-end">
            <BsCart2 className="mr-10 cursor-pointer text-gray-600 font-bold text-2xl" />
            <BsBoundingBox className="mr-5 cursor-pointer text-gray-600 font-bold text-2xl" />
            <p className="mr-3  font-semibold text-[#49108B]">
              {user?.displayName}
            </p>
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <summary tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="avatar">
                      <div className="rounded-full w-[40px] h-[40px] p-1">
                        {user?.photoURL ? (
                          <img
                            className=" rounded-full border-2 border-black"
                            src={user?.photoURL}
                          />
                        ) : (
                          <div className="text-3xl ">
                            <FaRegUserCircle />
                          </div>
                        )}
                      </div>
                    </div>
                  </summary>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                  >
                    <Link>
                      <li className="flex justify-between">
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                          }
                        >
                          Profile
                          <RxAvatar className="text-blue-500 ml-[84px]" />
                        </button>
                        <button onClick={handleLogOut}>
                          Logout
                          <IoMdLogOut className="text-red-500 ml-20" />
                        </button>
                      </li>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      <dialog id="my_modal_1" className="p-5 rounded-lg">
        <div className="">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Test2Dashboard;
