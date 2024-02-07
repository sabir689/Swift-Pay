import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/13346238_5213451.png";
import bannerImage2 from "../../assets/images/15628817_5655046.jpg";
import bannerImage3 from "../../assets/images/19380875_6068262.jpg";
import Lottie from "lottie-react";
import texty from "../../assets/animations/Vk1XaZm3ys (1).json";
import banner1 from "../../assets/animations/new/efPxnMuWsf.json";
import banner2 from "../../assets/animations/new/n00ypWr0U2.json";
import banner3 from "../../assets/animations/new/oOBYLvevhY.json";
const Banner = () => {
  return (
    <div
      className="bg-center bg-cover bg-fixed rounded-lg shadow-sm shadow-gray-300"
      style={{ backgroundImage: `url(${bannerImage3})` }}
    >
      <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="flex lg:flex-row flex-col items-center justify-center gap-5">
            <div>
              <p className="tracking-wide -leading-10 text-3xl lg:text-7xl font-bold bg-gradient-to-r from-[rgba(179,0,2551)]  to-[rgba(9,9,121,1)] text-transparent bg-clip-text typed group">
                Explore <span className="font-thin">Endless</span> Opportuniti
                <span className="text-white shadow-text">es</span>
                <br className="mt-5" /> Market pla
                <span className="text-white shadow-text">ce</span> Journey{" "}
                <span className="text-white shadow-text">Starts Here</span>
                <span className="animate-blink text-[#cbbbde]">.</span>
              </p>
              <div className="mt-5">
                <Link to="/login">
                  <button className="learn-more batton">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text text-[#7A00F9]">
                      Get's started
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="w-[370px] mx-auto lg:w-[800px]">
              <Lottie animationData={banner1} loop={true}></Lottie>
            </div>
            {/* <p
              className="text-xl lg:text-7xl text-center font-bold 
      bg-gradient-to-r from-[rgba(9,9,121,1)]  to-[rgba(179,0,255,1)] text-transparent bg-clip-text typed group"
            >
              <span className="text-7xl lg:text-9xl text-[#0A1D56] tracking-wide">
                Explore
              </span>{" "}
              <span className="font-thin">Endless</span>
              <div className="w-[80px] lg:w-[150px] mx-auto absolute right-[30px] lg:right-[250px] bottom-[380px] lg:bottom-[380px]">
                <Lottie animationData={texty} loop={true}></Lottie>
              </div>
              Opportunities: Your{" "}
              <span className="w-fit bg-[#2D9596] text-white">Market</span>
              place Journey <span className="font-thin">Starts</span> Here
              <span className="animate-blink text-[#49108B]">.</span>
            </p> */}
          </div>
        </div>
      </div>
      {/* button */}
    </div>
  );
};

export default Banner;
