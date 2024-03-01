/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { getSingleUser } from "../../../apis/GetMethod";
import UseAuth from "../../../hooks/UseAuth";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import UpdateProfile from "./UpdateProfile";
import useUser from "../../../hooks/useUser";
const MyProfile = () => {
  const { user } = UseAuth();
  console.log(user);
  const [newUser] = useUser();
  const [isEdit, setIdEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const emailAddress = user?.email;
  console.log(emailAddress);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getSingleUser(user?.email).then((res) => {
      setUserData(res);
    });
  }, [user?.email]);

  return (
    <div className="flex items-center justify-center gap-5">
      <div className="">
        <div className="w-80 shadow-lg  transform   duration-200 easy-in-out rounded-lg">
          <div className="h-[140px] overflow-hidden">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          <div className="flex justify-center px-5  -mt-12">
            <img
              className="h-32 w-32 p-2 rounded-full   "
              src={newUser?.photoURL}
              alt=""
            />
          </div>
          <div className=" ">
            <div className="text-center px-14">
              <h2 className="text-[#49108B] text-xl font-bold">
                {newUser?.name}
              </h2>
              <a className="text-gray-400 mt-2 hover:text-blue-500">
                {newUser?.email}
              </a>
            </div>
            <hr className="mt-6"/>
          </div>
        </div>
      </div>

      <div className="p-5 w-full mx-auto border-[1px] border-gray-400 rounded-lg">
        <div className="flex items-center justify-between gap-10">
          <h1
            className={
              isEdit
                ? "text-2xl font-semibold text-[#49108B] "
                : "text-2xl font-semibold text-[#49108B]"
            }
          >
            {isEdit ? "Edit Profile" : "My Profile"}
          </h1>
          <div onClick={() => setIdEdit(!isEdit)}>
            <FiEdit className="text-2xl text-neutral-600 cursor-pointer hover:text-purple-600 duration-300">
              {" "}
            </FiEdit>
          </div>
        </div>
        <div>
          {isEdit ? (
            <UpdateProfile user={user} />
          ) : (
            <div className="my-5">
              {userData.map((user) => (
                <div>
                  <div className="flex items-center justify-between gap-10">
                    <div className="flex-1">
                      <h1 className="text-md font-normal inline-block text-gray-400">
                        Full Name:
                      </h1>
                      <h1 className="text-lg font-normal text-gray-800">{`${user?.firstName} ${user?.lastName}`}</h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-md font-normal inline-block text-gray-400">
                        Email Address:
                      </h1>
                      <h1 className="text-lg font-normal text-gray-800">
                        {user?.email}
                      </h1>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-10 mt-5">
                    <div className="flex-1">
                      <h1 className="text-md font-normal inline-block text-gray-400">
                        Address:
                      </h1>
                      <h1 className="text-lg font-normal text-gray-800">
                        {user?.address}
                      </h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-md font-normal inline-block text-gray-400">
                        Gender:
                      </h1>
                      <h1 className="text-lg font-normal text-gray-800">
                        {user?.gender}
                      </h1>
                    </div>
                  </div>
                  <div className="flex  justify-between gap-10 mt-5">
                    <div className="flex-1">
                      <h1 className="text-md font-normal inline-block text-gray-400">
                        User Role:
                      </h1>
                      <h1 className="text-lg font-normal text-gray-800">
                        {user?.role}
                      </h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-md font-normal inline-block text-gray-400 mb-2">
                        Account password:
                      </h1>
                      <div className="relative">
                        <div className="">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="w-[200px] text-sm rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 px-4  outline-none"
                            defaultValue={user?.password}
                          />
                        </div>
                        <div
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute left-[170px] top-2 cursor-pointer"
                        >
                          {showPassword ? (
                            <IoMdEye className="text-xl" />
                          ) : (
                            <IoMdEyeOff className="text-xl" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
