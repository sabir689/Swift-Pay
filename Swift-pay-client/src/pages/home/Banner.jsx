import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/13346238_5213451.png";
import Lottie from "lottie-react";
import texty from "../../assets/animations/Vk1XaZm3ys (1).json";
const Banner = () => {
  return (
    <div
      className="bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <p
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
              {/* <span
                className="text-purple-400"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                Payments
              </span> */}
              <span className="animate-blink text-[#49108B]">.</span>
            </p>
            <br />
            {/* button */}
            <div className="text-center">
              <Link to="/login">
                <button className="learn-more batton mt-5">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Get's started</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
