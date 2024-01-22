import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../../../public/offers.json";

const OffersDetails = () => {
  return (
    <div className="lg:py-20 py-4 bg-cyan-50">
      {servicesData.map((offer, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row justify-between items-center lg:py-20 py-8 px-8"
        >
          <div className="max-w-lg text-center lg:text-left lg:pr-8">
            <h1 className="text-3xl font-semibold lg:text-4xl">
              {offer.title}
            </h1>
            <p className="pb-8 pt-4 text-md">{offer.description}</p>
            <Link
              className="lg:px-6 lg:py-4 px-2 py-2 mt-6 text-xl tracking-wider uppercase transition-colors duration-300 transform bg-transparent rounded-lg w-[300px] mx-auto lg:mx-0 hover:bg-cyan-500 border border-cyan-500 focus:bg-cyan-500 font-semibold text-cyan-500 hover:text-white"
              to="/your-link"
            >
              View More Offers
            </Link>
          </div>
          <div className="mt-6 lg:mt-0">
            <img
              className="w-full h-auto rounded-lg object-cover lg:w-[700px] lg:h-[450px]"
              src={offer.image}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OffersDetails;
