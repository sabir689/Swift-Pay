import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import receive from "../../assets/icons/received.png";
import location from "../../assets/icons/location.png";
import buy from "../../assets/icons/buy.png";
import easy from "../../assets/icons/easy-to-use.png";
import easyChat from "../../assets/icons/Chat.png";
import ui from "../../assets/icons/ui-design.png";

const ServicesSlider = () => {
  return (
    <div className="max-w-screen-xl mx-auto  rounded-lg pb-5">
      <h3 className="text-center text-[#212427]  text-5xl p-20 font-bold">
        See Our <span className="   text-[#190B14] font-thin">Services</span>{" "}
        <span className="animate-blink text-[#49108B]">.</span>
      </h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className="">
          <SwiperSlide>
            <div className="mb-20 flex justify-center items-center mx-auto h-60 w-60 bg-white border-2 border-gray-100  rounded-full hover:bg-purple-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img
                    loading="lazy"
                    className="w-[90px] h-auto"
                    src={receive}
                    alt=""
                  />
                  <h4 className="mt-2">Receive Product</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mx-auto h-60 w-60 bg-white border-2 border-gray-100  rounded-full hover:bg-purple-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img
                    loading="lazy"
                    className="w-[90px] h-auto"
                    src={location}
                    alt=""
                  />
                  <h4 className="mt-2">Location</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mx-auto h-60 w-60 bg-white border-gray-100 border-2  rounded-full hover:bg-purple-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img
                    loading="lazy"
                    className="w-[90px] h-auto"
                    src={buy}
                    alt=""
                  />
                  <h4 className="mt-2">Easy Buy</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mx-auto h-60 w-60 bg-white border-gray-100  border-2  rounded-full hover:bg-purple-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img
                    loading="lazy"
                    className="w-[90px] h-auto"
                    src={easy}
                    alt=""
                  />
                  <h4 className="mt-2">Easy to use</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mx-auto h-60 w-60 bg-white border-gray-100 border-2  rounded-full hover:bg-purple-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img
                    loading="lazy"
                    className="w-[90px] h-auto"
                    src={easyChat}
                    alt=""
                  />
                  <h4 className="mt-2">Easy Communication</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mx-auto h-60 w-60 bg-white border-gray-100 border-2  rounded-full hover:bg-purple-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img
                    loading="lazy"
                    className="w-[90px] h-auto"
                    src={ui}
                    alt=""
                  />
                  <h4 className="mt-2">Appealing interface</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="flex justify-center items-center h-60 w-60 border-gray-300  border-2  rounded-full hover:bg-purple-300">
              <div>
      
                <div className="flex items-center justify-center flex-col">
                  <img className="w-[90px]" src={addMoney} alt="" />
                  <h4 className="mt-2">Add money from card</h4>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="flex justify-center items-center  h-60 w-60 bg-white border-gray-100  border-2  rounded-full hover:bg-purple-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img
                    loading="lazy"
                    className="w-[90px] h-auto"
                    src={receive}
                    alt=""
                  />
                  <h4 className="mt-2">Receive Product</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
