import Lottie from "lottie-react";
import payment from "../../../assets/animations/6Do5dMsWSR.json";
import recharge from "../../../assets/animations/6jwhyx3p5z.json";
import send from "../../../assets/animations/933vXwzwGt (1).json";
import cashOut from "../../../assets/animations/SonkejnWRQ.json";
const AllPlatform = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <p className="text-center text-5xl text-[#212427] mb-8 font-bold">
        All <span className="font-thin text-[#49108B]">solutions</span> in One
        platform<span className="animate-blink text-[#49108B]">.</span>
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* first card */}
        <article
          data-aos="zoom-out"
          data-aos-delay="100"
          className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-80"
        >
          <div className="w-[200px] mx-auto">
            <Lottie animationData={payment} loop={true}></Lottie>
          </div>

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">Payment</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 h-[68.25px]">
              Effortlessly manage your transactions with our Payment Card
              section.
            </p>
          </div>
        </article>
        {/* second card */}
        <article
          data-aos="zoom-out"
          data-aos-delay="200"
          className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-80"
        >
          <div className="w-[200px] mx-auto">
            <Lottie animationData={recharge} loop={true}></Lottie>
          </div>

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Sell product
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 h-[68.25px]">
              Send money with ease using our Send Money service. Whether it's
              splitting bills or helping out a friend, our platform ensures
              swift and secure transactions.
            </p>
          </div>
        </article>
        {/* third card */}
        <article
          data-aos="zoom-out"
          data-aos-delay="300"
          className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-80"
        >
          <div className="w-[200px] h-[200px] mx-auto">
            <Lottie animationData={send} loop={true}></Lottie>
          </div>

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">Easy buy</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 h-[68.25px]">
              Send money with ease using our Send Money service. Whether it's
              splitting bills or helping out a friend,
            </p>
          </div>
        </article>
        {/* four card */}
        <article
          data-aos="zoom-out"
          data-aos-delay="400"
          className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm w-80"
        >
          <div className="w-[200px] mx-auto">
            <Lottie animationData={cashOut} loop={true}></Lottie>
          </div>

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">Monitoring</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 h-[68.25px]">
              Need cash? Our Cashout feature lets you withdraw funds seamlessly.
              Convert your digital balance into physical cash at your
              convenience.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AllPlatform;
