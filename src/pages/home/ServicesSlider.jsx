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
import receive from "../../assets/icons/receive-amount.png";
import donation from "../../assets/icons/donation.png";
import pay from "../../assets/icons/pay.png";
import personal from "../../assets/icons/personal.png";
import recharge from "../../assets/icons/recharge.png";
import cashOut from "../../assets/icons/svg.png";
import addMoney from "../../assets/icons/top-up.png";

const ServicesSlider = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="text-center text-gray-800 text-5xl p-20 font-bold">
        See Our <span className="text-[#49108B] font-thin">Services</span>
        <span className="animate-blink">.</span>
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
            <div className="mb-20 flex justify-center items-center mx-auto h-60 w-60  border-2 border-gray-300  rounded-full hover:bg-cyan-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img className="w-[90px]" src={receive} alt="" />
                  <h4 className="mt-2">Receive Money</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mx-auto h-60 w-60  border-2 border-gray-300  rounded-full hover:bg-cyan-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img className="w-[90px]" src={pay} alt="" />
                  <h4 className="mt-2">Pay Money</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mx-auto h-60 w-60  border-gray-300 border-2  rounded-full hover:bg-cyan-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img className="w-[90px]" src={cashOut} alt="" />
                  <h4 className="mt-2">Cash Out</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mx-auto h-60 w-60 border-gray-300  border-2  rounded-full hover:bg-cyan-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img className="w-[90px]" src={recharge} alt="" />
                  <h4 className="mt-2">Mobile recharge</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mx-auto h-60 w-60 border-gray-300 border-2  rounded-full hover:bg-cyan-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img className="w-[90px]" src={personal} alt="" />
                  <h4 className="mt-2">EMI payment</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mx-auto h-60 w-60 border-gray-300 border-2  rounded-full hover:bg-cyan-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img className="w-[90px]" src={donation} alt="" />
                  <h4 className="mt-2">Donate Money</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-60 w-60 border-gray-300  border-2  rounded-full hover:bg-cyan-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img className="w-[90px]" src={addMoney} alt="" />
                  <h4 className="mt-2">Add money from card</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center mx-auto h-60 w-60 border-gray-300  border-2  rounded-full hover:bg-cyan-300">
              <div>
                {/* <GiReceiveMoney className="h-32 w-32 mt-8"></GiReceiveMoney> */}
                <div className="flex items-center justify-center flex-col">
                  <img className="w-[90px]" src={receive} alt="" />
                  <h4 className="mt-2">Receive Money</h4>
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
