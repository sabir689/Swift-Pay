import React from "react";
import Container from "../../Components/Shared/Container";
import { Link } from "react-router-dom";

const Featured = () => {
  const backgroundImageUrl =
    "https://i.ibb.co/nM291NR/full-shot-woman-online-fashion-shopping-2-1.jpg";

  return (
    <Container>
      <div
        className="relative text-white bg-cover bg-center h-[400px] my-20 flex flex-col justify-center items-center rounded-lg object-cover object-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>

        <div className="md:flex justify-center items-center px-4 md:px-16 relative">
          <div className="md:text-center relative z-10">
            <p className="lg:text-5xl text-3xl font-bold mb-4 font-serif">
              SwiftPay
            </p>
            <p className=" max-w-prose mb-8 text-md text-gray-300 opacity-70">
              propels online success with unmatched speed and efficiency. This
              powerful programming language ensures rapid development,
              scalability, and cutting-edge features for optimal business
              performance.
            </p>
            <Link to="/dashboard/branded">
              <button className="w-fit border-2 border-gray-100 px-8 py-4 hover:scale-95">
                Visit our Branded shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Featured;
