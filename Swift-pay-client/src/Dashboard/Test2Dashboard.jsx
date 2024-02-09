/* eslint-disable no-unused-vars */
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
import { IoHome } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import useUser from "../hooks/useUser";
import { SiBrandfolder } from "react-icons/si";
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
      { name: "messages", link: "/dashboard/message", icon: FiMessageSquare },
      {
        name: "analytics",
        link: "/",
        icon: TbReportAnalytics,
      },
      { name: "File Manager", link: "/", icon: FiFolder },
      { name: "Cart", link: "/", icon: FiShoppingCart },

      { name: "Setting", link: "/", icon: RiSettings4Line },
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
        name: "File Manager",
        link: "/",
        icon: FiFolder,
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
      { name: "Setting", link: "/", icon: RiSettings4Line },
    ];
  }
  const [open, setOpen] = useState(true);
  return (
    <div className="">
      {mainUser?.role === "user" ? (
        <aside className="flex gap-6">
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
            <div className="mt-2 w-[300px] lg:w-full">
              <div className="mb-5 rounded-lg border-[1px] border-gray-400 p-2 flex items-center justify-end">
                <Link to="/dashboard/branded">
                  <button className="mr-5 border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
                    <p className="z-10 absolute bottom-2 left-2">
                      Branded shop
                    </p>
                  </button>
                </Link>
                <div className="flex items-center justify-between">
                  <Link to="/">
                    <IoHome className="text-2xl hover:text-blue-400" />
                  </Link>
                  <hr className="border-l-0 border-gray-400 border-[1px] h-[20px] mx-4" />
                  <BsCart2 className="mr-10 cursor-pointer text-gray-600 font-bold text-2xl" />
                  {/* <BsBoundingBox className="mr-5 cursor-pointer text-gray-600 font-bold text-2xl" /> */}
                  <p className="mr-3  font-semibold text-[#49108B]">
                    {user?.displayName}
                  </p>
                  {user ? (
                    <>
                      <div className="dropdown dropdown-end">
                        <summary
                          tabIndex={0}
                          className="btn btn-ghost btn-circle"
                        >
                          <div className="avatar">
                            <div className="rounded-full w-[40px] h-[40px] p-1">
                              {mainUser?.photoURL ? (
                                <img
                                  className=" rounded-full border-2 border-black"
                                  src={mainUser?.photoURL}
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
                                  document
                                    .getElementById("my_modal_1")
                                    .showModal()
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
        </aside>
      ) : (
        // admin dashboard
        <aside className="flex gap-6">
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
          <div className="flex-1 mr-3 mt-3 max-w-screen-2xl mx-auto">
            <div className="mt-2 w-[300px] lg:w-full">
              <div className="mb-5 rounded-lg border-[1px] border-gray-400 p-2 flex items-center justify-end">
                {/* <div className="flex items-center mr-5">
              <p className="text-start mr-2">branded shop</p>
              <SiBrandfolder className="text-xl" />
            </div> */}
                <Link to="/dashboard/branded">
                  <button className="mr-5 border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
                    <p className="z-10 absolute bottom-2 left-2">
                      Branded shop
                    </p>
                  </button>
                </Link>

                <div className="flex items-center">
                  <Link to="/">
                    <IoHome className="text-2xl hover:text-blue-400" />
                  </Link>
                  <hr className="border-l-0 border-gray-400 border-[1px] h-[20px] mx-4" />
                  <BsCart2 className="mr-10 cursor-pointer text-gray-600 font-bold text-2xl" />
                  {/* <BsBoundingBox className="mr-5 cursor-pointer text-gray-600 font-bold text-2xl" /> */}
                  <p className="mr-3  font-semibold text-[#49108B]">
                    {user?.displayName}
                  </p>
                  {user ? (
                    <>
                      <div className="dropdown dropdown-end">
                        <summary
                          tabIndex={0}
                          className="btn btn-ghost btn-circle"
                        >
                          <div className="avatar">
                            <div className="rounded-full w-[40px] h-[40px] p-1">
                              {mainUser?.photoURL ? (
                                <img
                                  className=" rounded-full border-2 border-black"
                                  src={mainUser?.photoURL}
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
                                  document
                                    .getElementById("my_modal_1")
                                    .showModal()
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
        </aside>
      )}
    </div>
  );
};

export default Test2Dashboard;