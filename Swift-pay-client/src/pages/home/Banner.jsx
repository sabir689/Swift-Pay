import { Link } from "react-router-dom";
import bannerImage3 from "../../assets/images/19380875_6068262.jpg";
import bannerImage4 from "../../assets/images/13684537_5334556 [Recovered].jpg";
import Lottie from "lottie-react";

import banner1 from "../../assets/animations/new/efPxnMuWsf.json";

const Banner = () => {
  return (
    <div
      className="bg-center bg-cover rounded-lg shadow-sm shadow-gray-300 w-full mx-auto px-6"
      style={{ backgroundImage: `url(${bannerImage3})` }}
    >
      <div className="min-h-screen">
        <div className="max-w-screen-2xl mx-auto">
          <div
            className="flex lg:flex-row flex-col items-center justify-center gap-5 mx-auto"
            style={{ minHeight: "100px" }}
          >
            <div className="mt-40">
              <p className="-tracking-normal -leading-10 text-3xl lg:text-7xl font-bold bg-gradient-to-r from-[rgba(179,0,2551)]  to-[rgba(9,9,121,1)] text-transparent bg-clip-text typed group">
                Explore <span className="font-thin">Endless</span> Opportunities
                <br className="mt-5" /> Market place{" "}
                <span className="font-semibold text-teal-300">Journey</span>{" "}
                <span className="">Starts Here</span>
                <span className="animate-blink text-[#cbbbde]">.</span>
              </p>
              <p className="text-gray-400 font-thin my-5">
                Discover Your Perfect Marketplace: Your one-stop destination{" "}
                <br /> for all your needs. Explore a diverse range of <br />
                products from trusted sellers.
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

            <div className="w-[370px] lg:w-[800px]">
              <Lottie animationData={banner1} loop={true}></Lottie>
            </div>
          </div>
        </div>
      </div>
      {/* button */}
    </div>
  );
};

export default Banner;
