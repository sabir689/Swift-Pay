import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import Container from "../../Components/Shared/Container";

const OffersDetails = () => {
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://swift-pay-server.vercel.app/api/offers"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setOffers(data);
        AOS.refresh();
      } catch (error) {
        console.error("Error fetching offers:", error);
        setError("Error fetching offers. Please try again later.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <div className="container flex flex-col py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center mt-12">
        <div className="w-full lg:w-1/2 ">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide:text-white lg:text-4xl text-cyan-500">
              Find your best offers at SwiftPay
            </h1>
            <p className="mt-4 text-gray-400">
              We work with the best product dealers in BD to find your new
              products.
            </p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2 text-cyan-500 font-medium">
              <div className="flex items-center -px-3">
                <TiTick className="text-cyan-500 text-2xl" />
                <span className="mx-3">Premium selection</span>
              </div>

              <div className="flex items-center -px-3">
                <TiTick className="text-cyan-500 text-2xl" />
                <span className="mx-3">Insurance</span>
              </div>

              <div className="flex items-center -px-3">
                <TiTick className="text-cyan-500 text-2xl" />
                <span className="mx-3">All legal documents</span>
              </div>

              <div className="flex items-center -px-3">
                <TiTick className="text-cyan-500 text-2xl" />
                <span className="mx-3">From BD product dealers</span>
              </div>

              <div className="flex items-center -px-3">
                <TiTick className="text-cyan-500 text-2xl" />
                <span className="mx-3">Payment Security</span>
              </div>

              <div className="flex items-center -px-3">
                <TiTick className="text-cyan-500 text-2xl" />
                <span className="mx-3">Fast shipping (+ Express)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-3xl rounded-xl shadow-black shadow-md"
            src="https://i.ibb.co/Tg4cmdQ/black-friday-composition-black-background-with-copy-space-1.jpg"
            alt="glasses photo"
          />
        </div>
      </div>
      <h1 className="lg:text-4xl text-2xl font-bold text-center lg:py-12 lg:my-12 my-2 py-6 text-cyan-500 border-y-2">
        "Some of our best Deals"
      </h1>
      <div className="grid grid-cols-1 gap-8 py-10 sm:py-16">
        {offers.map((offer, index) => (
          <div
            key={offer.offer_id}
            className="bg-gray-100 shadow-md overflow-hidden rounded-md flex flex-col sm:flex-row justify-between"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="mb-4 sm:mb-0 sm:w-1/2 bg-black rounded-3xl">
              <img
                src={offer.image_url}
                alt={offer.product_name}
                className="w-full lg:h-[400px] object-cover"
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-center lg:pl-16 pl-1 p-4 bg-black">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                {offer.product_name}
              </h2>
              <p className="text-gray-300 text-base font-medium w-[500px] mb-4 sm:mb-6">
                {offer.description}
              </p>
              <p className=" text-lg font-medium text-red-500">
                Original Price: ${offer.original_price.toFixed(2)}
              </p>
              <p className="text-green-500 text-lg font-medium">
                Discounted Price: ${offer.discounted_price.toFixed(2)}
              </p>
              <p className="text-gray-300 text-lg font-medium">
                Valid Until: {offer.valid_until}
              </p>
            </div>
          </div>
        ))}
        <div className="text-center">
          <h1 className="text-xl font-medium text-cyan-500 py-2">
            Wanna shop more?
          </h1>
          <Link
            to="/dashboard/branded"
            className="btn btn-outline font-semibold hover:bg-cyan-500 hover:text-white hover:border-cyan-500"
          >
            Click Here
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default OffersDetails;
