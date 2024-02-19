/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import DashNavbar from "./DashNavbar.jsx/DashNavbar";

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
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="bg-white p-7 rounded-md">
            <div className="flex items-center justify-center dark">
              <div className="bg-gray-400 border-2 border-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl text-center font-semibold text-gray-200 mb-4">
                  Update profile
                </h2>
                <form onSubmit={handleUpdate} className="flex flex-col">
                  <div className="flex space-x-4 mb-4">
                    <input
                      name="firstName"
                      placeholder="First Name"
                      defaultValue={profileInfo?.firstName}
                      className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                      type="text"
                    />
                    <input
                      name="lastName"
                      placeholder="Last Name"
                      defaultValue={profileInfo?.lastName}
                      className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                      type="text"
                    />
                  </div>
                  <input
                    placeholder="Email"
                    defaultValue={profileInfo?.email}
                    readOnly
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="email"
                  />
                  <input
                    name="address"
                    placeholder="Current address"
                    defaultValue={profileInfo?.address}
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                  />
                  <input
                    name="photoURL"
                    placeholder="Your Photo Image link"
                    defaultValue={profileInfo?.photoURL}
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                  />

                  <label className="text-sm mb-2 text-gray-200 cursor-pointer">
                    Gender
                  </label>
                  <select
                    name="gender"
                    defaultValue={profileInfo?.gender}
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  >
                    <option disabled selected>
                      Select one
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  <label className="text-sm mb-2 text-gray-200 cursor-pointer">
                    Age
                  </label>
                  <input
                    name="age"
                    defaultValue={profileInfo?.age}
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2"
                    type="date"
                  />

                  <button
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                    type="submit"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AdminDash;
