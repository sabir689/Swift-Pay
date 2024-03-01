/* eslint-disable react/prop-types */
import { BsCart2 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

const DashNavbar = ({ user, handleLogOut, mainUser }) => {
  const [profileInfo] = useUser();
  return (
    <div>
      <div className="mt-2 w-[300px] mx-auto lg:w-full">
        <div className="mb-5 rounded-lg border-[1px] border-gray-400 p-2 flex items-center justify-end">
          <Link to="/dashboard/branded">
            <div className="">
              <button className="mr-0 lg:mr-5 border text-gray-50  duration-300 relative group cursor-pointer overflow-hidden h-[50px] w-2 lg:w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
                <p className="z-10 absolute bottom-2 left-2">Branded shop</p>
              </button>
            </div>
          </Link>
          <div className="flex items-center">
            <Link to="/">
              <IoHome className="text-2xl hover:text-blue-400" />
            </Link>
            <hr className="border-l-0 border-gray-400 border-[1px] h-[20px] mx-4" />
            <BsCart2 className="mr-10 cursor-pointer text-gray-600 font-bold text-2xl" />
            {/* <BsBoundingBox className="mr-5 cursor-pointer text-gray-600 font-bold text-2xl" /> */}
            <p className="mr-3 text-md  font-semibold text-[#49108B] border-[1px] py-1 px-4 border-green-400 rounded-full">
              {profileInfo?.name}
            </p>
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
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                  >
                    <Link>
                      <li className="flex justify-between">
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
    </div>
  );
};

export default DashNavbar;
