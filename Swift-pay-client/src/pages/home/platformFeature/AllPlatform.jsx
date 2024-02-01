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

            <a className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              <button className="button2 text-[#49108B]">
                <span>Details</span>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="37"
                    cy="37"
                    r="35.5"
                    stroke="black"
                    stroke-width="3"
                  ></circle>
                  <path
                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </a>
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

            <a className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              <button className="button2 text-[#49108B]">
                <span>Details</span>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="37"
                    cy="37"
                    r="35.5"
                    stroke="black"
                    stroke-width="3"
                  ></circle>
                  <path
                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </a>
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

            <a className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              <button className="button2 text-[#49108B]">
                <span>Details</span>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="37"
                    cy="37"
                    r="35.5"
                    stroke="black"
                    stroke-width="3"
                  ></circle>
                  <path
                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </a>
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

            <a className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              <button className="button2 text-[#49108B]">
                <span>Details</span>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="37"
                    cy="37"
                    r="35.5"
                    stroke="black"
                    stroke-width="3"
                  ></circle>
                  <path
                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AllPlatform;
