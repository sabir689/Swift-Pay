import { Link, NavLink } from "react-router-dom";
// import { FaRegUserCircle } from "react-icons/fa";
// import { useContext } from "react";
import { IoMdArrowDropupCircle, IoMdLogOut } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/images/logo-removebg-preview.png";
// import { IoMdLogOut } from "react-icons/io";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const [topButton, setTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const links = (
    <div>
      <div className="">
        <nav className="flex flex-col md:flex-row lg:flex-row items-center justify-between font-poppins">
          <li className="text-xl mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Transaction
            </NavLink>
          </li>
          <li className="dropdown dropdown-hover text-xl mr-10 font-semibold text-[#49108B]">
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
          <li className="text-xl mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Contact
            </NavLink>
          </li>

          <li className="text-xl mr-10 font-semibold text-[#49108B]">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-600" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
  return (
    <div>
      <div>
        <div className="navbar">
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
              <img
                className="bg-gray-600 w-[80px] rounded-full"
                src={logo}
                alt=""
              />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal py-1">{links}</ul>
          </div>
          <div className="navbar-end text-3xl">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <summary tabIndex={0} className="btn btn-ghost rounded-btn">
                    <div className="avatar">
                      <div className="rounded-full w-[40px] h-[40px]">
                        {user?.photoURL ? (
                          <img
                            className=" rounded-full border-2 border-black"
                            src={user?.photoURL}
                          />
                        ) : (
                          <div className="text-3xl">
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
                          <IoMdLogOut className="text-black ml-20" />
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
      {topButton && (
        <button
          className="fixed bottom-[50px] right-[50px] lg:bottom-[50px] lg:right-[50px] h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] text-4xl text-purple-600"
          onClick={scrollUp}
        >
          <IoMdArrowDropupCircle />
        </button>
      )}
    </div>
  );
};

export default Navbar;
