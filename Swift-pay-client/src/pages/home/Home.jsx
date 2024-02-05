import Banner from "./Banner";
import Business from "./Business";
import Offer from "./Offer";
import ServicesSlider from "./ServicesSlider";
import WhatIsNew from "./WhatIsNew";
import AllPlatform from "./platformFeature/AllPlatform";
import Gallery from "./platformFeature/Gallery";
import { useEffect, useState } from "react";
import { IoMdArrowDropupCircle, IoMdLogOut } from "react-icons/io";
// import ServicesSlider from "./ServicesSlider";
// import WhatIsNew from "./WhatIsNew";

const Home = () => {
  const [topButton, setTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
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
    <div className="">
      <div className="mt-20 mb-10 rounded-lg mx-2">
        <Banner></Banner>
      </div>
      <div className="mt-10 mb-10">
        <AllPlatform></AllPlatform>
      </div>
      <div className="my-10">
        <ServicesSlider></ServicesSlider>
      </div>
      <div className="mt-10">
        <Business></Business>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-20 mb-10">
        <WhatIsNew></WhatIsNew>
      </div>
      <div className="mt-10 mb-10">
        <Offer></Offer>
      </div>
      <div className="mt-32 mb-10">
        <Gallery></Gallery>
      </div>
      {topButton && (
        <button
          className="fixed bottom-[50px] right-[50px] lg:bottom-[50px] lg:right-[50px] h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] text-4xl text-purple-600"
          onClick={scrollUp}
        >
          <IoMdArrowDropupCircle />
        </button>
      )}
    </div>
  );
};

export default Home;
