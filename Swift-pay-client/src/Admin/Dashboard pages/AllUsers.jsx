/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import OnlineStatus from "../../Components/Shared/Online status/OnlineStatus";
import { FaRegUserCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import useUser from "../../hooks/useUser";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import EmailProducts from "../../Dashboard/EmailProducts";
import { useEffect, useState } from "react";
import { getMyPorducts } from "../../apis/GetMethod";
import Modal from "../../Components/Modal/Modal";

const AllUsers = () => {
  const [modalData, setModalData] = useState({});
  const [myProduct, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const { email } = useParams();
  // const emailProducts = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { data: profile = [] } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/users");
      return res.data;
    },
  });
  // console.log(profile);
  const { data: postedProducts = [] } = useQuery({
    queryKey: ["postedProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/products");
      return res.data;
    },
  });
  // console.log(postedProducts);

  const handleSubmit = async (email) => {
    navigate(`/dashboard/emailProducts/${email}`);
  };
  // const handleNote = async (email) => {
  //   navigate(`/dashboard/emailProducts/${email}`);
  // };
  // useEffect(() => {
  //   const filter = emailProducts?.find((item) => item?.productName === email);
  //   setData(filter);
  //   console.log(filter);
  // }, [email, emailProducts]);
  useEffect(() => {
    setLoading(true);
    getMyPorducts(postedProducts.email).then((res) => {
      setMyProducts(res);
      setLoading(false);
    });
  }, [postedProducts?.email]);
  // console.log(postedProducts);

  return (
    <div>
      <section className="container px-4 mx-auto mt-10">
        <div className="flex items-center justify-between gap-x-3">
          <div className="flex items-center">
            <h2 className="text-lg mr-3 font-medium text-gray-600">
              Total users
            </h2>
            <span className="px-3 py-1 text-2xl text-green-400 bg-blue-100 rounded-full dark:bg-gray-800">
              {profile?.length}
            </span>
          </div>
          <div>
            <form>
              <div className="">
                <div className="relative">
                  <label className="sr-only"> Search </label>
                  <input
                    name="search"
                    type="text"
                    id="Search"
                    placeholder="Search user"
                    className="w-full rounded-md  py-2.5 px-2 border-[1px] border-gray-400 shadow-sm sm:text-sm"
                  />

                  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button
                      type="submit"
                      className="text-gray-600 hover:text-gray-700"
                    >
                      <span className="sr-only">Search</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          {/* <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          /> */}
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>

                          <svg
                            className="h-3"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.1"
                            />
                            <path
                              d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.1"
                            />
                            <path
                              d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.3"
                            />
                          </svg>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <p className="flex items-center gap-x-2">
                          <span>Posted product</span>
                        </p>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email address
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400"
                      >
                        Add note
                      </th>
                    </tr>
                  </thead>
                  {profile
                    ?.filter((profileUser) => profileUser?.role === "user")
                    .map((profileUser, index) => (
                      <tbody
                        key={profileUser.id}
                        className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                      >
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <p className="text-gray-400">{index + 1}</p>

                              <div className="flex items-center gap-x-2">
                                {profileUser?.photoURL ? (
                                  <img
                                    className="w-[40px] h-[40px] rounded-full border-2  border-blue-400"
                                    src={profileUser?.photoURL}
                                  />
                                ) : (
                                  <div className="text-3xl ">
                                    <FaRegUserCircle />
                                  </div>
                                )}
                                <div>
                                  <h2 className="font-medium text-gray-800 dark:text-white ">
                                    {profileUser?.name}
                                  </h2>
                                  <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                    {/* {profileUser?.name} */}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <Link
                              to={`/dashboard/sellerprofile/${profileUser?.email}`}
                            >
                              <button className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>

                                <h2 className="text-sm font-normal text-amber-500">
                                  Profile
                                </h2>
                                <MdArrowOutward className="text-white" />
                              </button>
                            </Link>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {/* view products button */}
                            <button
                              onClick={() => handleSubmit(profileUser?.email)}
                              className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                              <h2 className="text-sm font-normal text-teal-500">
                                View
                              </h2>
                              <MdArrowOutward />
                            </button>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {profileUser?.email}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              {profile?.role === "Admin" ? (
                                <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                  Admin
                                </p>
                              ) : (
                                <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                  User
                                </p>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <Link to={`${profileUser?.email}`}>
                                <button
                                  onClick={(e) => {
                                    setModalData(profileUser);
                                    e.preventDefault(); // Prevent the default link behavior
                                    document
                                      .getElementById("my_modal_1")
                                      .showModal();
                                  }}
                                  className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                </button>
                              </Link>
                              <Modal modalData={modalData}></Modal>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    </div>
  );
};

export default AllUsers;
