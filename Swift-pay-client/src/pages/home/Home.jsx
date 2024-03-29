/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import Banner from "./Banner";
import Customers from "./Customers";
import Featured from "./Featured";
import Offer from "./Offer";
import ServicesSlider from "./ServicesSlider";
import WhatIsNew from "./WhatIsNew";
import AllPlatform from "./platformFeature/AllPlatform";
import Gallery from "./platformFeature/Gallery";
import React, { useEffect, useState } from "react";
import {
  IoIosLogIn,
  IoMdAddCircleOutline,
  IoMdArrowDropupCircle,
} from "react-icons/io";
import banner from "../../assets/images/13684537_5334556.jpg";
import { Link } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
import Parallax from "./Parallax/Parallax";
// import ServicesSlider from "./ServicesSlider";
// import WhatIsNew from "./WhatIsNew";

const Home = () => {
  const [topButton, setTopButton] = useState(false);
  const [speedButton, setSpeedButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setSpeedButton(true);
      } else {
        setSpeedButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    // <div>Home</div>
    <React.Fragment>
      <div className="mt-20 mb-10 rounded-lg mx-auto">
        <Banner></Banner>
      </div>
      <div className="mt-10 mb-10">
        <AllPlatform></AllPlatform>
      </div>
      <div
        className="my-20 bg-cover bg-center max-w-screen-xl mx-auto rounded-lg"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <ServicesSlider></ServicesSlider>
      </div>
      <div className="mt-10">
        <Featured></Featured>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-20 mb-10">
        {/* <WhatIsNew></WhatIsNew> */}
        <Parallax></Parallax>
      </div>
      <div className="mt-10 mb-10">
        <Offer></Offer>
      </div>
      <div className="mt-10 mb-32">
        <Customers></Customers>
      </div>
      <div className="mb-10">
        <Gallery></Gallery>
      </div>
      {topButton && (
        <button
          className="fixed bottom-[50px] right-[50px] lg:bottom-[50px] lg:left-[50px] h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] text-4xl text-purple-600"
          onClick={scrollUp}
        >
          <IoMdArrowDropupCircle />
        </button>
      )}
      {speedButton && (
        <details className="dropdown shadow-transparent dropdown-top fixed bottom-[100px] right-[77px] lg:bottom-[120px] lg:right-[50px] h-[50px] w-[50px] lg:h-[50px] lg:w-[50px]">
          <summary className="m-1 btn bg-transparent border-none hover:bg-transparent">
            <p
              className="group cursor-pointer outline-none z-[50] hover:rotate-90 duration-300"
              title="Add New"
            >
              <svg
                className="stroke-[#49108B] fill-none group-hover:fill-teal-200 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
                viewBox="0 0 24 24"
                height="50px"
                width="50px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-width="1.5"
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                ></path>
                <path stroke-width="1.5" d="M8 12H16"></path>
                <path stroke-width="1.5" d="M12 16V8"></path>
              </svg>
            </p>
          </summary>
          <ul className="p-2 dropdown-content z-[1] ml-[12px]">
            <Link to="/login">
              <li
                className="bg-white mb-1 tooltip tooltip-info tooltip-left  border-[1px] border-purple-500 w-fit p-2 rounded-full"
                data-tip="Login"
              >
                <IoIosLogIn className="text-purple-400 text-3xl" />
              </li>
            </Link>
            <Link to="/dashboard/sellPost">
              <li
                className="bg-white  mb-1 tooltip tooltip-info tooltip-left border-[1px] border-purple-500 w-fit p-2 rounded-full"
                data-tip="sell product"
              >
                <IoMdAddCircleOutline className="text-blue-400 text-3xl" />
              </li>
            </Link>
            <li
              className="bg-white  mb-1 tooltip tooltip-info tooltip-left border-[1px] border-purple-500 w-fit p-2 rounded-full"
              data-tip="market"
            >
              <Link to="/dashboard/market">
                <RiShoppingBagLine className="text-pink-500 text-3xl " />
              </Link>
            </li>
          </ul>
        </details>
      )}
    </React.Fragment>
  );
};

export default Home;
