import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";

import { useParams } from "react-router-dom";
import Payment from "../../Dashboard/Payment";

const Details = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  let [isOpen, setIsOpen] = useState(false);
  const [productt, setProductt] = useState("");
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
      {showData && (
        <div className="my-10 block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt="Home"
            src={showData?.image}
            className="w-full rounded-md object-cover object-center"
          />

          <div className="mt-2">
            <dl>
              <div>
                <dt className="sr-only">Price</dt>

                <dd className="text-xl font-medium text-gray-500">
                  $ <span>{showData?.price}</span>
                </dd>
              </div>

              <div>
                <dd className="font-medium mb-5">{showData?.productName}</dd>
                <dd className="font-medium flex items-center">
                  {showData?.displayURL ? (
                    <img
                      className="object-cover h-10 rounded-full"
                      src={showData?.displayURL}
                      alt="Avatar"
                    />
                  ) : (
                    <div className="text-3xl text-blue-400">
                      <FaRegUserCircle />
                    </div>
                  )}
                  <p className="text-gray-500 ml-2">{showData?.name}</p>
                </dd>
              </div>
            </dl>
            <p className="mt-2 text-gray-400">{showData?.description}</p>
            <div className="mt-6 flex items-center justify-evenly text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <CiLocationOn className="text-blue-400 text-xl" />

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Location</p>

                  <p className="font-medium">{showData?.address}</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <TbCategory className="text-xl" />

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Category</p>

                  <p className="font-medium">{showData?.category}</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="items-center  justify-center  px-11 py-2.5 text-center text-white duration-200 bg-green-600  border-gray-900 rounded-full inline-flex hover:bg-transparent hover:bg-gray-500 hover:scale-95 hover:text-white  text-sm "
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Payment setIsOpen={setIsOpen} isOpen={isOpen} productt={productt} />
        </div>
      )}
    </div>
  );
};

export default Details;
