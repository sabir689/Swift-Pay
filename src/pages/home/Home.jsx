import Banner from "./Banner";
import WhatIsNew from "./WhatIsNew";

const Home = () => {
  return (
    // <div>Home</div>
    <div className="mt-20 mb-10">
      <Banner></Banner>
      <div className="max-w-screen-2xl mx-auto">
        <WhatIsNew></WhatIsNew>
      </div>
    </div>
  );
};

export default Home;
//
