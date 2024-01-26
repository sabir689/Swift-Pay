import { Link, NavLink, Outlet } from "react-router-dom";
import { IoCashOutline, IoHome } from "react-icons/io5";
import { TbSend } from "react-icons/tb";
import logo from "../../src/assets/images/logo-removebg-preview.png";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineTransaction } from "react-icons/ai";
const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <div className="flex-1 max-w-screen-xl mx-auto mt-10">
            <div className="w-[1200px] mx-auto mb-5 rounded-lg border-2 border-gray-200 flex items-center justify-end">
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
                      <li>
                        <a className="cursor-none font-bold">
                          {user?.displayName}
                        </a>
                      </li>
                      <Link>
                        <li className="flex justify-between">
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
            <div className="w-[1300px] mx-auto">
              <Outlet></Outlet>
            </div>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full bg-[#F3F8FF] text-gray-900">
            <div className="flex items-center justify-center mb-5">
              <div className="bg-gray-400 rounded-full w-fit">
                <img className="w-[50px]" src={logo} alt="" />
              </div>
              <p className="text-2xl ml-2 text-start font-semibold text-[#49108B]">
                Dash<span className="font-thin text-gray-900">board</span>
              </p>
            </div>
            {/* <hr className="w-4/5 mx-auto border-gray-400 mb-2" /> */}
            {/* Sidebar content here */}
            <li className="text-base text-gray-600 mb-1 rounded-md">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-gray-600  bg-gray-200"
                    : ""
                }
              >
                <IoHome className="mr-2" />
                Home
              </NavLink>
            </li>
            <li className="text-base text-gray-600 mb-1 rounded-md">
              <NavLink
                to="sendMoney"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-gray-600  bg-gray-200"
                    : ""
                }
              >
                <TbSend className="mr-2" />
                Send money
              </NavLink>
            </li>
            <li className="text-base text-gray-600 mb-1 rounded-md">
              <NavLink
                to="receiveMoney"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-gray-600 bg-gray-200"
                    : ""
                }
              >
                <GiReceiveMoney className="mr-2" />
                Received money
              </NavLink>
            </li>
            <li className="text-base text-gray-600 mb-1 rounded-md">
              <NavLink
                to="receiveMoney"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-gray-600 bg-gray-200"
                    : ""
                }
              >
                <IoCashOutline className="mr-2" />
                Cash out
              </NavLink>
            </li>
            <li className="text-base text-gray-600 mb-1 rounded-md">
              <NavLink
                to=""
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-gray-600 bg-gray-200"
                    : ""
                }
              >
                <AiOutlineTransaction className="mr-2" /> Transactions
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
