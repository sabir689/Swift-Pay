import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Payment from "./Payment";
// import { FaBookmark } from "react-icons/fa";

const Market = () => {
  return (
    <React.Fragment>
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
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="max-w-[300px] overflow-hidden bg-transparent rounded-lg border-[1px] border-gray-300">
          <div>
            <img
              className="object-cover object-center w-full h-56"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
            {/* <div className="absolute right-[1px]">
              <FaBookmark className="" />
            </div> */}
          </div>

          <div className="py-2 pl-3">
            <p className="block text-lg text-start text-gray-800">John Doe</p>
            <p className="text-sm text-start text-gray-500">
              Software Engineer
            </p>
            <div className="flex">
              <React.Fragment>
                <div>
                  <CiLocationOn className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
                </div>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="btn"
                >
                  Pay
                </button>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <Payment></Payment>
    </React.Fragment>
  );
};

export default Market;
