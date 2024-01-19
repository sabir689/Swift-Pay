import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';


import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaDonate } from "react-icons/fa";
import { MdAddCard } from "react-icons/md";




const ServicesSlider = () => {
    return (
      
        <>
        <h3 className='text-center text-5xl p-20 font-bold'>  See Our Services</h3>
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
                <SwiperSlide>
                    <div className='flex justify-center   h-64 w-64  border-2  rounded-full hover:bg-cyan-300 '>
                    <div >
                    <GiReceiveMoney className='h-32 w-32 mt-8'></GiReceiveMoney>
                    <div>
                    <h4 className='text-center'>Receive Money</h4>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center   h-64 w-64  border-2  rounded-full hover:bg-cyan-300 '>
                    <div >
                    <GiPayMoney className='h-32 w-32 mt-8'></GiPayMoney>
                    <div>
                    <h4 className='text-center'>Pay Money</h4>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center h-64 w-64  border-2  rounded-full hover:bg-cyan-300 '>
                    <div >
                    <GiTakeMyMoney className='h-32 w-32 mt-8'></GiTakeMyMoney>
                    <div>
                    <h4 className='text-center'>Cash Out</h4>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center   h-64 w-64  border-2  rounded-full hover:bg-cyan-300 '>
                    <div >
                    <TbDeviceMobileMessage className='h-32 w-32 mt-8'></TbDeviceMobileMessage>
                    <div>
                    <h4 className='text-center'>Mobile Recharge</h4>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center   h-64 w-64  border-2  rounded-full hover:bg-cyan-300 '>
                    <div >
                    <FaMoneyBillTrendUp className='h-32 w-32 mt-8'></FaMoneyBillTrendUp>
                    <div>
                    <h4 className='text-center'>EMI Payment</h4>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center   h-64 w-64  border-2  rounded-full hover:bg-cyan-300 '>
                    <div >
                    <FaDonate className='h-32 w-32 mt-8'></FaDonate>
                    <div>
                    <h4 className='text-center'>Donate Money</h4>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center   h-64 w-64  border-2  rounded-full hover:bg-cyan-300 '>
                    <div >
                    <MdAddCard className='h-32 w-32 mt-8'></MdAddCard>
                    <div>
                    <h4 className='text-center'>Add Money from Card</h4>
                    </div>
                    </div>
                    </div>
                </SwiperSlide>

                
                
            </Swiper>
        </>
    );
}


export default ServicesSlider;