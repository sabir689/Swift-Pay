import { Link, NavLink } from "react-router-dom";
// import { FaRegUserCircle } from "react-icons/fa";
// import { useContext } from "react";
import { IoMdLogOut } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/images/swiftpay logo.png";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineShop } from "react-icons/ai";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";

const Navbar = () => {
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
      .patch(`/api/users/${profileInfo._id}`, updateProfileInfo)
      .then((res) => {
        console.log(res.data);
        toast.success("Updated Profile");
        refetch();
      });
  };

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
          <li className="dropdown dropdown-hover text-lg mr-10 font-semibold text-[#49108B]">
            <details className="">
              <summary className="">About us</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-blue-100 rounded-box w-52">
                <Link to="/faq">
                  <li>
                    <a>F.A.Q</a>
                  </li>
                </Link>
                <Link to="/blog">
                  <li>
                    <a>Blog</a>
                  </li>
                </Link>
                <Link to="/help">
                  <li>
                    <a>Help</a>
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
          {/* <li className="text-lg mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Blog
            </NavLink>
          </li> */}
          {/* <li className="text-lg mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="help"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Help
            </NavLink>
          </li> */}

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
              ? "navbar fixed top-[0px] z-50 backdrop-blur-md bg-opacity-20 rounded-bl-lg rounded-br-lg bg-gray-100"
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
                          document.getElementById("my_modal_3").showModal()
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
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
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

export default Navbar;
