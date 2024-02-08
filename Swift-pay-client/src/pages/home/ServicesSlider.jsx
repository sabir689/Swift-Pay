import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaDonate } from "react-icons/fa";
import { MdAddCard } from "react-icons/md";
import receive from "../../assets/icons/received.png";
import location from "../../assets/icons/location.png";
import buy from "../../assets/icons/buy.png";
import easy from "../../assets/icons/easy-to-use.png";
import easyChat from "../../assets/icons/Chat.png";
import ui from "../../assets/icons/ui-design.png";
import addMoney from "../../assets/icons/top-up.png";

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
                  <img className="w-[90px]" src={receive} alt="" />
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
                  <img className="w-[90px]" src={location} alt="" />
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
                  <img className="w-[90px]" src={buy} alt="" />
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
                  <img className="w-[90px]" src={easy} alt="" />
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
                  <img className="w-[90px]" src={easyChat} alt="" />
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
                  <img className="w-[90px]" src={ui} alt="" />
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
                  <img className="w-[90px]" src={receive} alt="" />
                  <h4 className="mt-2">Receive Product</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        {/* <SwiperSlide>
          <div className="flex justify-center   h-64 w-64  border-2  rounded-full hover:bg-cyan-300 ">
            <div>
              <GiPayMoney className="h-32 w-32 mt-8"></GiPayMoney>
              <div>
                <h4 className="text-center">Pay Money</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center h-64 w-64  border-2  rounded-full hover:bg-cyan-300 ">
            <div>
              <GiTakeMyMoney className="h-32 w-32 mt-8"></GiTakeMyMoney>
              <div>
                <h4 className="text-center">Cash Out</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center   h-64 w-64  border-2  rounded-full hover:bg-cyan-300 ">
            <div>
              <TbDeviceMobileMessage className="h-32 w-32 mt-8"></TbDeviceMobileMessage>
              <div>
                <h4 className="text-center">Mobile Recharge</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center   h-64 w-64  border-2  rounded-full hover:bg-cyan-300 ">
            <div>
              <FaMoneyBillTrendUp className="h-32 w-32 mt-8"></FaMoneyBillTrendUp>
              <div>
                <h4 className="text-center">EMI Payment</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center   h-64 w-64  border-2  rounded-full hover:bg-cyan-300 ">
            <div>
              <FaDonate className="h-32 w-32 mt-8"></FaDonate>
              <div>
                <h4 className="text-center">Donate Money</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center   h-64 w-64  border-2  rounded-full hover:bg-cyan-300 ">
            <div>
              <MdAddCard className="h-32 w-32 mt-8"></MdAddCard>
              <div>
                <h4 className="text-center">Add Money from Card</h4>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
