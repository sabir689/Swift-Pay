import Banner from "./Banner";
import Business from "./Business";
import ServicesSlider from "./ServicesSlider";
import WhatIsNew from "./WhatIsNew";
import AllPlatform from "./platformFeature/AllPlatform";

const Home = () => {
  return (
    <div className="">
      <div className="mt-20 mb-10">
        <Banner></Banner>
      </div>
      <div className="mt-10 mb-10">
        <AllPlatform></AllPlatform>
      </div>
      <div className="my-10">
        <ServicesSlider></ServicesSlider>
      </div>
      <div className="">
        <Business></Business>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-20 mb-10">
        <WhatIsNew></WhatIsNew>
      </div>
    </div>
  );
};

export default Home;
