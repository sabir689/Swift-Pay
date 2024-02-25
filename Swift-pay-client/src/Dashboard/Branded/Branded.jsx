
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Apparel from "./Apparel";
import Electronics from "./Electronics";
import Beauty from "./Beauty";
import Living from "./Living";
import Sports from "./Sports";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
const Branded = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Helmet>
        <title>SwiftNess | SeeBrands</title>
      </Helmet>
      <div className="">
        <div className="mb-10 mt-10">
          <div className="flex justify-between items-center mt-3">
            <div className="flex flex-col">
              <span className="text-4xl font-semibold text-[#7A00F9]">
                Wanna open your own brand ? <br />{" "}
                <span className="text-[#7800f9b4]">Fill the form</span>{" "}
                <IoIosArrowRoundForward />
              </span>
              <h2>Add at least 5 products to start your own brand:</h2>
            </div>
            <h4>
              {" "}
              <Link to={"/dashboard/addBrand"}>
                {" "}
                <button className="text-xs lg:text-md shadow-2xl border-2 bg-purple-500 text-white px-8 py-6 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
                  Add products
                </button>
              </Link>
            </h4>
          </div>
        </div>

        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={"text-[#7800f9b4] font-bold "}>
            <Tab>Apparel</Tab>
            <Tab>Electronics</Tab>
            <Tab>Beauty and Personal Care</Tab>
            <Tab>Home and Living</Tab>
            <Tab>Sports and Outdoors</Tab>
          </TabList>
          <TabPanel>
            <div className="carousel w-full relative rounded-2xl mt-5 ">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/gdPWw8X/158.jpg"
                  className="w-full brightness-50 shadow-2xl "
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/bm6LcVh/photo-1512436991641-6745cdb1723f.jpg"
                  className="w-full shadow-2xl brightness-100"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/8xLbMK6/2489629.jpg"
                  className="w-full shadow-2xl brightness-75"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/3vxBPvq/Best-Men-s-Clothing-Stores-in-Udaipur.webp"
                  className="w-full shadow-2xl  brightness-75"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <Apparel></Apparel>
          </TabPanel>
          <TabPanel>
            <div className="carousel w-full relative rounded-2xl mt-5 ">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/gdPWw8X/158.jpg"
                  className="w-full brightness-50 shadow-2xl "
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/bm6LcVh/photo-1512436991641-6745cdb1723f.jpg"
                  className="w-full shadow-2xl brightness-100"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/8xLbMK6/2489629.jpg"
                  className="w-full shadow-2xl brightness-75"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/3vxBPvq/Best-Men-s-Clothing-Stores-in-Udaipur.webp"
                  className="w-full shadow-2xl  brightness-75"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>

            <Electronics></Electronics>
          </TabPanel>
          <TabPanel>
            <div className="carousel w-full relative rounded-2xl mt-5 ">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/gdPWw8X/158.jpg"
                  loading="lazy"
                  className="w-full brightness-50 shadow-2xl "
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/bm6LcVh/photo-1512436991641-6745cdb1723f.jpg"
                  className="w-full shadow-2xl brightness-100"
                  loading="lazy"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/8xLbMK6/2489629.jpg"
                  className="w-full shadow-2xl brightness-75"
                  loading="lazy"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  loading="lazy"
                  src="https://i.ibb.co/3vxBPvq/Best-Men-s-Clothing-Stores-in-Udaipur.webp"
                  className="w-full shadow-2xl  brightness-75"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <Beauty></Beauty>
          </TabPanel>
          <TabPanel>
            <div className="carousel w-full relative rounded-2xl mt-5 ">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/gdPWw8X/158.jpg"
                  className="w-full brightness-50 shadow-2xl "
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  loading="lazy"
                  src="https://i.ibb.co/bm6LcVh/photo-1512436991641-6745cdb1723f.jpg"
                  className="w-full shadow-2xl brightness-100"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  loading="lazy"
                  src="https://i.ibb.co/8xLbMK6/2489629.jpg"
                  className="w-full shadow-2xl brightness-75"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  loading="lazy"
                  src="https://i.ibb.co/3vxBPvq/Best-Men-s-Clothing-Stores-in-Udaipur.webp"
                  className="w-full shadow-2xl  brightness-75"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <Living></Living>
          </TabPanel>
          <TabPanel>
            <div className="carousel w-full relative rounded-2xl mt-5 ">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  loading="lazy"
                  src="https://i.ibb.co/gdPWw8X/158.jpg"
                  className="w-full brightness-50 shadow-2xl "
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  loading="lazy"
                  src="https://i.ibb.co/bm6LcVh/photo-1512436991641-6745cdb1723f.jpg"
                  className="w-full shadow-2xl brightness-100"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  loading="lazy"
                  src="https://i.ibb.co/8xLbMK6/2489629.jpg"
                  className="w-full shadow-2xl brightness-75"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  loading="lazy"
                  src="https://i.ibb.co/3vxBPvq/Best-Men-s-Clothing-Stores-in-Udaipur.webp"
                  className="w-full shadow-2xl  brightness-75"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <Sports></Sports>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Branded;
