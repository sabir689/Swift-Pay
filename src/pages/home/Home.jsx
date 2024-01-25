import Banner from "./Banner";
import Business from "./Business";
import ServicesSlider from "./ServicesSlider";
import WhatIsNew from "./WhatIsNew";

const Home = () => {
  return (
    // <div>Home</div>
    <div className="">
      <div className="mt-20 mb-10">
        <Banner></Banner>
      </div>
      <ServicesSlider></ServicesSlider>
      <div className=" mt-10">
        <Business></Business>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-20 mb-10">
        <WhatIsNew></WhatIsNew>
      </div>
    </div>
  );
};

export default Home;
//
