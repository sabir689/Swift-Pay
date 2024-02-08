/* eslint-disable react/jsx-key */
import { TbSend } from "react-icons/tb";
import receive from "../../src/assets/icons/reciever.png";
import sent from "../../src/assets/icons/money.png";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const MyDashboard = () => {
  const axiosPublic = useAxiosPublic();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],

    queryFn: async () => {
      const res = await axiosPublic.get("/api/products");
      return res.data;
    },
  });
  const electronicsProducts = products?.filter(
    (product) => product?.category === "Electronics"
  );
  const electronicsEmails = electronicsProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);

  const photographyProducts = products?.filter(
    (product) => product?.category === "Photography"
  );
  const photographyEmails = photographyProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);
  const fitnessProducts = products?.filter(
    (product) => product?.category === "Fitness"
  );
  const fitnessEmails = fitnessProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);
  const cafeProducts = products?.filter(
    (product) => product?.category === "Cafe & Corner"
  );
  const cafeEmails = cafeProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);
  const fashionProducts = products?.filter(
    (product) => product?.category === "Fashion"
  );
  const fashionEmails = fashionProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);
  const artProducts = products?.filter(
    (product) => product?.category === "Art & Design"
  );
  const artEmails = artProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);
  const outdoorProducts = products?.filter(
    (product) => product?.category === "Outdoor"
  );
  const outdoorEmails = outdoorProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);
  const appProducts = products?.filter(
    (product) => product?.category === "Appliances"
  );
  const appEmails = appProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);
  const securityProducts = products?.filter(
    (product) => product?.category === "Home Security"
  );
  const securityEmails = securityProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);
  const livingProducts = products?.filter(
    (product) => product?.category === "Home & Living"
  );
  const livingEmails = livingProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);
  const autoProducts = products?.filter(
    (product) => product?.category === "Home Automation"
  );
  const autoEmails = autoProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);
  const kitchenProducts = products?.filter(
    (product) => product?.category === "Home & kitchen"
  );
  const kitchenEmails = kitchenProducts.reduce((emails, product) => {
    return [...emails, product?.email];
  }, []);
  return (
    <div className="flex items-center justify-center flex-col my-20">
      <div className="w-[800px] px-8  py-8 pb-12 bg-gray-800 rounded-lg shadow-lg ">
        <div className="flex justify-start items-start -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </div>

        <h2 className="mt-2 mb-5 ml-[34px] text-3xl font-semibold text-gray-800 dark:text-white md:mt-0">
          Overview<span></span>
        </h2>

        <div className="flex items-center justify-center">
          <div className="mr-5 w-[217px] h-[170px] rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
            <p className="text-white text-2xl font-semibold">2256 $</p>
            <p className="text-white text-sm">Total Product sold</p>
            <img className="w-[50px]  mt-2" src={receive} alt="" />
          </div>
          {/* <button className="mr-5 border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-2">History</p>
          </button> */}
          <div className="mr-5 w-[217px] h-[170px] rounded-lg bg-[#4157ff] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
            <p className="text-white text-2xl font-semibold">1530 $</p>
            <p className="text-white text-sm">Total Sell Post</p>
            <img className="w-[50px]  mt-2" src={sent} alt="" />
          </div>
          {/* <button className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-2">History</p>
          </button> */}
        </div>
      </div>
      {/*  */}

      <div className="mt-10 w-[800px] border-[1px] p-5 rounded-lg">
        <p className="mb-7 font-bold text-3xl text-blue-400">
          Categories and products
        </p>
        <div className="max-w-screen-xl border-[1px] rounded-lg mx-auto">
          <div className="">
            <table className="divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Total products
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date of Birth
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Category
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Users associated with categories
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              {/* electronic */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {electronicsProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Electronics
                  </td>
                  <td className="whitespace-nowrap text-center ext-gray-700">
                    {electronicsEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* photography */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {photographyProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Photography
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {photographyEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* fitness */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {fitnessProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Fitness
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {fitnessEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* cafe */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {cafeProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Cafe & corners
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {cafeEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* fashion */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {fashionProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Fashion
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {fashionEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* art */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {artProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Art & Design
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {artEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* appliances */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {appProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Appliances
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {appEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* Home security */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {securityProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Home security
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {securityEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* Home security */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {securityProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Home & Living
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {securityEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* outdoor */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {outdoorProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Outdoor
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {outdoorEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* home and living */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {livingProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Home & living
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {livingEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* home and automation */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {autoProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Home Automation
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {autoEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              {/* home and kitchen */}
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {kitchenProducts?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Home & Kitchen
                  </td>
                  <td className="whitespace-nowrap  text-center text-gray-700">
                    {kitchenEmails?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link to="/dashboard/market">
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
