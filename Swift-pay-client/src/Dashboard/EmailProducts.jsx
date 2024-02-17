/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { Link, useLoaderData, useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const EmailProducts = () => {
  const { email } = useParams();
  const [showData, setShowData] = useState([]);
  const products = useLoaderData();
  console.log(products);
  useEffect(() => {
    const product = products?.filter((product) => product?.email === email);
    setShowData(product);
    console.log(product);
  }, [email, products]);
  const userName = showData?.length > 0 ? showData[0].name : " ";
  return (
    <>
      <p className="my-10 text-2xl  font-semibold text-[#1b1b1b]">
        Posted products of : {userName}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {showData?.map((product) => (
          <div className="">
            <div>
              <div
                className="h-48 w-72 bg-gray-200 flex flex-col justify-between rounded-tl-lg rounded-tr-lg p-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${product?.image})` }}
              ></div>
              <div className="p-4">
                <div className="">
                  <h1 className="text-gray-600 font-medium">
                    {product?.productName?.length > 24
                      ? `${product?.productName.slice(0, 24)}...`
                      : product?.productName}
                  </h1>
                  <button className="text-gray-500 hover:text-gray-900">
                    {" "}
                    ${product?.price}
                  </button>{" "}
                </div>{" "}
                <p className="text-gray-400 text-sm my-1 flex items-center">
                  <CiUser className="text-gray-400" />
                  {product?.name}
                </p>
                <h1 className="text-gray-400 text-sm my-1 flex items-center">
                  <p>
                    <CiLocationOn className="text-blue-400" />{" "}
                  </p>
                  {product?.location}
                </h1>
                <Link to={`/dashboard/details/${product._id}`}>
                  <button className="bg-purple-500 text-sm text-white px-4 py-1 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
                    Details
                  </button>
                </Link>
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmailProducts;
