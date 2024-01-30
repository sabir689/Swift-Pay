import { Link, NavLink } from "react-router-dom";
// import { FaRegUserCircle } from "react-icons/fa";
// import { useContext } from "react";
import { IoMdLogOut } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/images/swiftpay logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineShop } from "react-icons/ai";
// import { IoMdLogOut } from "react-icons/io";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <div>
      <div className="">
        <nav className="flex flex-col md:flex-row lg:flex-row items-center justify-between font-poppins">
          <li className="text-lg mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Home
            </NavLink>
          </li>
          {/* <li className="text-xl mr-10 font-semibold text-[#49108B]">
            <NavLink
              // to="dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Transaction
            </NavLink>
          </li> */}
          <li className="dropdown dropdown-hover text-lg mr-10 font-semibold text-[#49108B]">
            <details className="">
              <summary className="">About us</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-blue-100 rounded-box w-52">
                <Link to="/faq">
                  <li>
                    <a>F.A.Q</a>
                  </li>
                </Link>
                {/* <li>
                  <a>Item 2</a>
                </li> */}
              </ul>
            </details>
          </li>
          <li className="text-lg mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="text-lg mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li className="text-lg mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="help"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Help
            </NavLink>
          </li>

          <li className="text-lg mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Login
            </NavLink>
          </li>
          {/* <li className="text-2xl mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="/dashboard/myDashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              <MdOutlineSpaceDashboard />
            </NavLink>
          </li> */}
          <li className="text-2xl mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="/dashboard/market"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              <AiOutlineShop />
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
  return (
    <div className="">
      <div>
        <div
          className={
            color
              ? "navbar fixed top-[0px] z-50 backdrop-blur-md bg-opacity-20 bg-gray-100"
              : "navbar fixed top-[0px] z-50"
          }
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <div className="w-[100px]">
              <img className=" w-[50px]" src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal py-1">{links}</ul>
          </div>
          <div className="navbar-end text-3xl">
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
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-100 border-[1px] border-gray-400 rounded-box w-52 mt-4"
                  >
                    <li>
                      <a className="cursor-none font-bold">
                        {user?.displayName}
                      </a>
                    </li>
                    <li className="">
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
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex flex-col items-center justify-center h-screen dark">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">
                Update profile
              </h2>
              <form className="flex flex-col">
                <div className="flex space-x-4 mb-4">
                  <input
                    placeholder="First Name"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                  />
                  <input
                    placeholder="Last Name"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                  />
                </div>
                <input
                  placeholder="Email"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="email"
                />
                <input
                  placeholder="Current address"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                />
                <input
                  type="file"
                  className="file-input rounded-lg bg-purple-200 mb-5 w-full"
                />
                <label
                  className="text-sm mb-2 text-gray-200 cursor-pointer"
                  for="gender"
                >
                  Gender
                </label>
                <select
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  id="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <label
                  className="text-sm mb-2 text-gray-200 cursor-pointer"
                  for="age"
                >
                  Age
                </label>
                <input
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2"
                  id="age"
                  type="date"
                />

                <button
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                  type="submit"
                >
                  Update
                </button>
              </form>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn rounded-lg">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Navbar;
