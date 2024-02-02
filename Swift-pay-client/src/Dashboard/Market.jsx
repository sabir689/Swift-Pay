import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaBookmark } from "react-icons/fa";
// import { FaBookmark } from "react-icons/fa";

const Market = () => {
  const axiosPublic = useAxiosPublic();
  const [showAllNames, setShowAllNames] = useState({});
  const toggleShowAllNames = (productId) => {
    setShowAllNames((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId], // Toggle state for the specific product
    }));
  };
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/products");
      return res.data;
    },
  });
  return (
    <React.Fragment className="">
      <div>
        <div className="mb-5 mt-7">
          <div className="mb-4 flex w-80 flex-wrap items-stretch">
            <input
              type="search"
              className="m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-gray-500 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />

            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-7 w-7 text-gray-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
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
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="px-7  grid justify-center items-center"
          >
            <div className="grid gap-6" id="form">
              <div className="w-full flex gap-3">
                <input
                  // {...register("name")}
                  className="text-sm rounded-lg border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#9e6bd7]  py-3 px-3 w-full placeholder:text-sm"
                  type="text"
                  placeholder="your name"
                  required=""
                />
              </div>

              <div className="grid gap-6 w-full">
                <input
                  // {...register("email")}
                  className="text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B]  py-3 px-3 w-full placeholder:text-sm"
                  type="text"
                  placeholder="post code"
                />
              </div>
              <div className="">
                <input
                  // {...register("address")}
                  className="text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] mb-5 py-3 px-3 w-full placeholder:text-sm"
                  type="text"
                  placeholder="your address"
                  id="address"
                />
                <input
                  // {...register("number")}
                  className="mt-2 text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] mb-5 py-3 px-3 w-full placeholder:text-sm"
                  type="number"
                  placeholder="phone number"
                  id="number"
                  name="number"
                />
                <select
                  // {...register("category")}
                  className="select text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300 focus:shadow-sm focus:border-[#49108B] py-3 px-3 mt-2 w-full placeholder:text-sm"
                >
                  <option className="text-sm">BDT</option>
                  <option className="text-sm">USD</option>
                </select>
              </div>
              <button
                type="submit"
                className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-[#0D9276] border-2  rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
              >
                {" "}
                complete payment
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </React.Fragment>
  );
};

export default Market;
