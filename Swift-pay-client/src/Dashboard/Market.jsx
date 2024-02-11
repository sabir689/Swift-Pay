/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import Payment from "./Payment";

import React, { useContext, useEffect, useState } from "react";
import { CiFilter, CiLocationOn, CiSearch, CiUser } from "react-icons/ci";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaBookmark, FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import MarketCards from "./Market/MarketCards";
// import { FaBookmark } from "react-icons/fa";

const Market = () => {
  const [visible, setVisible] = useState(12);
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState(" ");
  const [sorting, setSorting] = useState(" ");
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  let [isOpen, setIsOpen] = useState(false);
  const [productt, setProductt] = useState("");
  const [category, setCategory] = useState("");

  // const [showAllNames, setShowAllNames] = useState({});
  // const toggleShowAllNames = (productId) => {
  //   setShowAllNames((prevState) => ({
  //     ...prevState,
  //     [productId]: !prevState[productId], // Toggle state for the specific product
  //   }));
  // };
  const { isLoading: productsLoading, data: products = [] } = useQuery({
    queryKey: ["products", search, sorting],

    queryFn: async () => {
      const res = await axiosPublic.get(
        `/api/products?search=${search}&sort=${sorting}&category=${category}`
      );
      return res.data;
    },
  });

  const { data: savedProducts = [] } = useQuery({
    queryKey: ["savedProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/bookmarks?email=${user?.email}`);
      return res?.data;
    },
  });

  const handleBookmark = (product) => {
    const Bookmark = {
      email: user?.email,
      product_id: product._id,
      productName: product.productName,
      category: product.category,
      image: product.image,
      price: product.price,
      location: product.location,
      description: product.description,
    };
    axiosPublic.post("/api/bookmarks", Bookmark).then((res) => {
      console.log(res.data);
      if (res?.data?.insertedId) {
        toast.success("Added to Bookmarks");
        queryClient.invalidateQueries("products");
        queryClient.invalidateQueries("savedProducts");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    console.log("searched");
  };
  const handlePay = (id) => {
    setIsOpen(true);
    setProductt(id);
  };
  // show more
  const showMore = () => {
    // Calculate the new value of visible based on the current length of products
    setVisible((prevValue) => Math.min(prevValue + 12, products.length));
  };

  return (
    <React.Fragment>
      {productsLoading ? (
        <div className="flex flex-row gap-2 items-center justify-center h-screen">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-red-700 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-green-400 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      ) : (
        <div>
          <div className="mb-5 mt-7">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 justify-between items-center">
              <div className="flex items-center  flex-col lg:flex-row">
                {/* search */}
                <form onSubmit={handleSubmit}>
                  <div className="mr-5 lg:mr-5">
                    <div className="relative">
                      <label className="sr-only"> Search </label>
                      <input
                        name="search"
                        type="text"
                        id="Search"
                        placeholder="Search"
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
                {/* dropdown */}
                <div className="mt-5 lg:mt-0">
                  <div className="flex items-center justify-end">
                    <p className="hidden lg:block mr-3 text-xs lg:text-sm text-purple-800 font-semibold">
                      Shop by Category
                    </p>
                    <hr className="hidden lg:block  border-l-0 border-gray-400 border-[1px] h-[20px] mr-4" />
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="select w-40 bg-purple-400 border-none text-white px-4 py-2 join-item rounded-md"
                    >
                      <option value="">All</option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Electronics"
                      >
                        Electronics
                      </option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Photography"
                      >
                        Photography
                      </option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Fitness"
                      >
                        Fitness
                      </option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Cafe Corner"
                      >
                        Cafe Corner
                      </option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Fashion"
                      >
                        Fashion
                      </option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Art & Design"
                      >
                        Art & Design
                      </option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Outdoor"
                      >
                        Outdoor
                      </option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Appliances"
                      >
                        Appliances
                      </option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Home Security"
                      >
                        Home Security
                      </option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Home & Living"
                      >
                        Home & Living
                      </option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Home Automation"
                      >
                        Home Automation
                      </option>
                      <option
                        className="text-gray-800 bg-gray-100"
                        value="Home & Kitchen"
                      >
                        Home & Kitchen
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              {/* filter */}
              <div className="">
                <div className="flex items-center justify-end">
                  <p className="mr-3 text-purple-800 hidden lg:block ">
                    Filter
                  </p>
                  <hr className="hidden lg:block  border-l-0 border-gray-400 border-[1px] h-[20px] mr-4" />
                  <select
                    value={sorting}
                    onChange={(e) => setSorting(e.target.value)}
                    className="select rounded-md join-item bg-transparent border-[1px] border-gray-800"
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
            {products
              ?.slice(0, visible)
              .filter((product) => {
                return (
                  search.toLowerCase() === " " ||
                  (product?.productName &&
                    product?.productName
                      .toLowerCase()
                      .includes(search.toLowerCase()))
                );
              })
              .map((product) => {
                const newCategory = !category || product.category === category;
                if (newCategory) {
                  return (
                    <div
                      key={product._id}
                      className="w-[300px] min-h-[360px] mb-5 bg-transparent rounded-lg border-[1px] border-gray-300 hover:border-[#49108B]"
                    >
                      <MarketCards
                        key={product._id}
                        product={product}
                        savedProducts={savedProducts}
                        handleBookmark={handleBookmark}
                        handlePay={handlePay}
                      ></MarketCards>
                    </div>
                  );
                }
                return null;
              })}
          </div>
          {/* show more button */}
          <div className="text-center">
            <div className="text-center">
              {visible < products.length && (
                <button
                  onClick={showMore}
                  className="my-5 btn rounded-sm py-1 px-4 text-sm border-[1px] border-gray-800 text-gray-800 bg-transparent"
                >
                  Show more
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <Payment setIsOpen={setIsOpen} isOpen={isOpen} productt={productt} />
    </React.Fragment>
  );
};

export default Market;
