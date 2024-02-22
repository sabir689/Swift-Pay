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
import ProfileModal from "../../pages/home/profile modal/profileModal";
import { LuUserCircle } from "react-icons/lu";
import { CiCamera } from "react-icons/ci";

const Navbar = () => {
  const [profileInfo] = useUser();
  const axiosPublic = useAxiosPublic();
  const handleUpdate = (e) => {
    e.preventDefault();
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
    console.log(updateProfileInfo);
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
                  <p>F.A.Q</p>
                </li>
              </Link>
              <Link to="/blog">
                <li>
                  <p>Blog</p>
                </li>
              </Link>
              <Link to="/help">
                <li>
                  <p>Help</p>
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
        <li className="text-2xl mr-10 font-semibold text-[#49108B]">
          <NavLink
            to="/dashboard/market"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-gray-600" : ""
            }
          >
            <span className="flex items-center">
              <AiOutlineShop />
              <p className="ml-3 tracking-[1px] text-lg font-semibold text-[#49108B]">
                Market
              </p>
            </span>
          </NavLink>
        </li>
        <li className="text-2xl mr-10 font-semibold text-[#49108B]">
          <NavLink
            to="/dashboard/stream"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-gray-600" : ""
            }
          >
            <CiCamera />
          </NavLink>
        </li>
      </nav>
    </div>
  );
  return (
    <>
      <div
        className={
          color
            ? "navbar fixed top-[0px] z-50 backdrop-blur-md bg-opacity-20 rounded-bl-lg rounded-br-lg bg-gray-100"
            : "navbar fixed top-[0px] z-50"
        }
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <img loading="lazy" className="w-[50px] h-auto" src={logo} alt="" />
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
                      {profileInfo?.photoURL ? (
                        <img
                          className=" rounded-full border-2 border-black"
                          src={profileInfo?.photoURL}
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
                      {profileInfo?.firstName ? (
                        <>{profileInfo?.firstName}</>
                      ) : (
                        <>
                          {profileInfo?.firstName + " " + profileInfo?.lastName}
                        </>
                      )}
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
                  <Link to="/dashboard/market">
                    <li>
                      <p>Your dashboard</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/login">
              <div className="text-3xl">
                <button className="border-[1px] border-blue-400 relative py-2 px-8 text-black text-sm font-medium ended-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all scroll-smooth before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                  Sign in
                </button>
              </div>
            </Link>
          )}
        </div>
      </div>
      <ProfileModal
        profileInfo={profileInfo}
        handleUpdate={handleUpdate}
      ></ProfileModal>
    </>
  );
};

export default Navbar;
