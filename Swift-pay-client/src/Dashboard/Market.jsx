import Payment from "./Payment";
import React, { useEffect, useState } from "react";
import { CiFilter, CiLocationOn, CiSearch } from "react-icons/ci";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaBookmark } from "react-icons/fa";
// import { FaBookmark } from "react-icons/fa";

const Market = () => {
  const [search, setSearch] = useState(" ");
  const [sorting, setSorting] = useState(" ");
  const axiosPublic = useAxiosPublic();
  // const [showAllNames, setShowAllNames] = useState({});
  // const toggleShowAllNames = (productId) => {
  //   setShowAllNames((prevState) => ({
  //     ...prevState,
  //     [productId]: !prevState[productId], // Toggle state for the specific product
  //   }));
  // };
  const { data: products = [] } = useQuery({
    queryKey: ["products", search, sorting],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/api/products?search=${search}&sort=${sorting}`
      );
      return res.data;
    },
  });
  // search
  // const [searchProducts, setSearchProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    console.log("searched");
  };
  return (
    <React.Fragment>
      <div>
        <div className="mb-5 mt-7">
          <div className="flex justify-between items-center">
            {/* search */}
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-start">
                <div className="rounded-lg bg-gray-200 border-[1px] border-gray-800">
                  <div className="flex">
                    <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white">
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="pointer-events-none absolute w-5 fill-gray-500 transition"
                      >
                        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                      </svg>
                    </div>
                    <input
                      name="search"
                      type="text"
                      className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
                      placeholder=""
                      id=""
                    />
                    <button
                      type="submit"
                      className="bg-[#37B5B6] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/* filter */}
            <div>
              <select
                value={sorting}
                onChange={(e) => setSorting(e.target.value)}
                className="select  join-item bg-transparent border-[1px] border-gray-800"
              >
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-72 mb-5 bg-transparent shadow rounded-lg border border-transparent hover:border-[#49108B]  cursor-pointer"
          >
            <div
              className="h-48 w-full bg-gray-200 flex flex-col justify-between rounded-tl-lg rounded-tr-lg p-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${product?.image})` }}
            >
              <div className="w-8 h-9 bg-gray-200 rounded flex items-center justify-center text-blue-400">
                <FaBookmark />
              </div>
            </div>
            <div className="p-4">
              <div className="">
                <h1 className="text-gray-600 font-medium">
                  {product?.productName}
                </h1>
                <button className="text-gray-500 hover:text-gray-900">
                  {" "}
                  ${product?.price}
                </button>{" "}
              </div>{" "}
              <p className="text-gray-400 text-sm my-1">{product?.name}</p>
              <p className="text-gray-400 text-sm my-1 flex items-center">
                <p>
                  <CiLocationOn className="text-blue-400" />{" "}
                </p>
                {product?.location}
              </p>
              <span
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="uppercase text-xs bg-green-50 px-2 py-1 border-green-500 border rounded text-green-700 font-medium"
              >
                Pay
              </span>{" "}
            </div>{" "}
          </div>
        ))}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <Payment></Payment>
    </React.Fragment>
  );
};

export default Market;
