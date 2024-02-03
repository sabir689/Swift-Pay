import Payment from "./Payment";

import React, { useContext, useEffect, useState } from "react";
import { CiFilter, CiLocationOn, CiSearch } from "react-icons/ci";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaBookmark } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
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
  const { data: savedProducts = [] } = useQuery({
    queryKey: ["savedProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/bookmarks?email=${user.email}`);
      return res.data;
    },
  });

  const handleBookmark = (product) => {
    const Bookmark = {
      email: user.email,
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
      if (res.data.insertedId) {
        toast.success("Added to Bookmarks");
        queryClient.invalidateQueries("savedProducts");
      }
    });
  };

  // search
  // const [searchProducts, setSearchProducts] = useState([]);

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
      <div>
        <div className="mb-5 mt-7">
          <div className="flex justify-between items-center">
            <div className="flex">
              {/* search */}
              <form onSubmit={handleSubmit}>
                <div className="">
                  <div className="rounded-md bg-gray-200 border-[1px] border-gray-400">
                    <div className="flex">
                      <div className="flex w-10 items-center justify-center rounded-tl-md rounded-bl-md border-r border-gray-200 bg-white">
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
                        className="w-full max-w-[160px] bg-white pl-2 text-gray-600 text-sm font-medium outline-0"
                        placeholder=""
                        id=""
                      />
                      <button
                        type="submit"
                        className="bg-[#37B5B6] p-2 rounded-tr-md rounded-br-md text-white font-medium hover:bg-blue-800 transition-colors"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* dropdown */}
              <div className="ml-5">
                <div className="drapdown inline-block relative">
                  <button className="bg-purple-800 text-gray-200 text-md font-normal py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Shop by categories</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 transition-transform duration-600">
                    {[
                      ...new Set(products.map((product) => product.category)),
                    ].map((category) => (
                      <li key={category} className="">
                        <a
                          className="rounded-none  bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm"
                          href="#"
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* filter */}
            <div className="">
              <div className="flex items-center justify-end">
                <p className="mr-3 text-purple-800">Filter</p>
                <hr className="border-l-0 border-gray-400 border-[1px] h-[20px] mr-4" />
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
      </div>

      {/* card */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {products.slice(0, visible).map((product) => (
          <div
            key={product.id}
            className="w-72 mb-5 bg-transparent shadow rounded-lg border border-transparent hover:border-[#49108B]  cursor-pointer"
          >
            <div
              className="h-48 w-full bg-gray-200 flex flex-col justify-between rounded-tl-lg rounded-tr-lg p-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${product?.image})` }}
            >
              {savedProducts.find(
                (savedProduct) => savedProduct.product_id === product._id
              ) ? (
                <div
                  onClick={() => handleBookmark(product)}
                  className="w-8 h-9 shadow-xl ml-2 flex items-center justify-center"
                >
                  <FaBookmark className="text-xl " />
                  <p className="text-sm bg-gray-900 border-[1px] border-white shadow-md w-fit px-2 py-1 text-white">
                    SAVED
                  </p>
                </div>
              ) : (
                <div
                  onClick={() => handleBookmark(product)}
                  className="w-8 h-9 bg-gray-200 rounded flex items-center justify-center text-blue-400"
                >
                  <FaBookmark className="" />
                </div>
              )}
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
                onClick={() => handlePay(product)}
                // onClick={() =>
                //   document.getElementById("my_modal_1").showModal()
                // }
                className="uppercase text-xs bg-green-50 px-2 py-1 border-green-500 border rounded text-green-700 font-medium"
              >
                Pay
              </span>{" "}
            </div>{" "}
          </div>
        ))}
      </div>
      <div className="text-end">
        <div className="text-end">
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
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <Payment setIsOpen={setIsOpen} isOpen={isOpen} productt={productt} />
    </React.Fragment>
  );
};

export default Market;
