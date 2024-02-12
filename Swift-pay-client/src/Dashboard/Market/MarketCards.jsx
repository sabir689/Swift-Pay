/* eslint-disable react/prop-types */
import { CiLocationOn, CiUser } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const MarketCards = ({ product, handleBookmark, handlePay, savedProducts }) => {
  return (
    <div>
      <div
        className="h-48 w-full bg-gray-200 flex flex-col justify-between rounded-tl-lg rounded-tr-lg p-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${product?.image})` }}
      >
        {savedProducts?.find(
          (savedProduct) => savedProduct?.product_id === product?._id
        ) ? (
          <div className="w-8 h-9 shadow-xl ml-2 flex items-center justify-center">
            <FaBookmark className="text-xl" />
            <p className="text-sm bg-gray-900 border-[1px] border-white shadow-md w-fit px-2 py-1 text-white">
              SAVED
            </p>
          </div>
        ) : (
          <div
            onClick={() => handleBookmark(product)}
            className="w-8 h-9 cursor-pointer bg-gray-200 rounded flex items-center justify-center text-blue-400"
          >
            <FaBookmark className="" />
          </div>
        )}
      </div>
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
        <button
          onClick={() => handlePay(product)}
          className="items-center ml-1 justify-center  px-5 py-1 text-center text-white duration-200 bg-green-600  border-gray-900 rounded-full inline-flex  hover:bg-gray-500 hover:scale-95 hover:text-white  text-sm "
        >
          Pay
        </button>
      </div>{" "}
    </div>
  );
};

export default MarketCards;
