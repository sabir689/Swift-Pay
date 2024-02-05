import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  const products = useLoaderData();
  const { Name } = products;
  console.log(products);
  console.log(products);
  useEffect(() => {
    // Verify that products is an array before calling find
    if (Array.isArray(products)) {
      // Find the product with the matching id
      const details = products.find((detail) => detail._id === id);
      setShowData(details);
    }
  }, [products, id]);
  console.log(showData);
  return (
    <div>
      <p>details</p>
      {showData && (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <img
            className="object-cover object-center w-full"
            src={showData?.image}
          />

          <div className="p-6">
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                {showData?.productName}
              </span>
              <a className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white">
                $ {showData?.price}
              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {showData?.description}
              </p>
            </div>

            <div className="mt-4">
              <div className="flex flex-col">
                <div className="flex items-center">
                  {showData?.displayURL ? (
                    <img
                      className="object-cover h-10 rounded-full"
                      src={showData?.displayURL}
                      alt="Avatar"
                    />
                  ) : (
                    <div className="text-3xl text-white">
                      <FaRegUserCircle />
                    </div>
                  )}
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-100"
                    tabindex="0"
                    role="link"
                  >
                    {showData?.name}
                  </a>
                </div>
                <span className="mx-1 text-md font-semibold text-gray-100">
                  Posted date:{" "}
                  <span className="font-thin text-sm">{showData?.date}</span>
                </span>
                <p className="flex text-white items-center ">
                  <CiLocationOn className="text-blue-400 text-xl"></CiLocationOn>
                  {showData?.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
