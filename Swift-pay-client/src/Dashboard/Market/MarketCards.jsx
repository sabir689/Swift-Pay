/* eslint-disable react/prop-types */
import { CiLocationOn, CiUser } from "react-icons/ci";
import { FaBookmark, FaExternalLinkAlt, FaRegUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBookmarkOutline } from "react-icons/io5";
import { TbFileSymlink } from "react-icons/tb";
import { Link } from "react-router-dom";

const MarketCards = ({ product, handleBookmark, handlePay, savedProducts }) => {
  console.log(product);
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
          <p className="text-gray-500 hover:text-gray-900 text-sm">
            ${product?.price}
          </p>
        </div>
        <Link to={`/dashboard/sellerprofile/${product?.email}`}>
          <p className="text-cyan-700 text-sm my-1 flex  gap-2 items-center">
            <CiUser className="text-gray-700" />
            {product?.name}
            <FaExternalLinkAlt className=" text-xs " />
          </p>
        </Link>
        <h1 className="text-gray-400 text-sm my-1 flex items-center">
          <p>
            <CiLocationOn className="text-blue-400" />{" "}
          </p>
          {product?.location}
        </h1>
        <div className="mt-5">
          <Link to={`/dashboard/details/${product._id}`}>
            <button className="bg-purple-500 text-sm text-white px-5 py-1 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
              Details
            </button>
          </Link>
          <button
            onClick={() => handlePay(product)}
            className="items-center ml-1 justify-center  px-5 py-1 text-center text-gray-800 duration-200 border-[1px] border-green-500 rounded-full inline-flex  hover:bg-gray-500 hover:scale-95 hover:text-white  text-sm "
          >
            Pay
          </button>
        </div>
      </div>{" "}
    </div>
    // <div className="flex flex-col items-center justify-center">
    //   {/* card */}
    //   <div className="w-96 flex flex-col justify-start items-center bg-white rounded-3xl">
    //     <div className="px-[30px] py-[25px]">
    //       <div className="flex items-center justify-between mb-3">
    //         <p className="text-md text-[#141414]  mb-3">Apple vision</p>
    //         <div className="w-9 h-9 rounded-full cursor-pointer bg-gray-200 flex items-center justify-center text-blue-400">
    //           <IoBookmarkOutline className="" />
    //         </div>
    //       </div>
    //       <div className="object-cover object-center">
    //         <img
    //           loading="lazy"
    //           className="w-[330px] h-[175px] rounded-2xl"
    //           src="https://i.ibb.co/6ZpBcqH/3519482-756-Converted.jpg"
    //           alt=""
    //         />
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <span className="flex items-center mt-3">
    //           {" "}
    //           <FaRegUser className="mr-1" />
    //           <p className="text-md text-gray-900 mr-1">User name</p>
    //           <TbFileSymlink />
    //         </span>
    //         <p className="text-md text-gray-900  mt-3">
    //           $ <span>price</span>
    //         </p>
    //       </div>
    //       <span className="flex items-center mt-3">
    //         <CiLocationOn className="mr-1" />
    //         <p className="text-md text-gray-900">Location</p>
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MarketCards;
