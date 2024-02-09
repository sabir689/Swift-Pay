import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
        const response = await fetch("http://localhost:5000/api/offers");
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
    <div className="grid grid-cols-1 gap-8 py-10 sm:py-16 lg:px-16">
      {offers.map((offer, index) => (
        <div
          key={offer.offer_id}
          className="bg-cyan-100 shadow-md overflow-hidden rounded-md flex flex-col sm:flex-row justify-between"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="mb-4 sm:mb-0 sm:w-1/2">
            <img
              src={offer.image_url}
              alt={offer.product_name}
              className="w-full h-64 lg:h-[400px] object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-center p-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {offer.product_name}
            </h2>
            <p className="text-gray-700 text-base font-medium w-[500px] mb-4 sm:mb-6">
              {offer.description}
            </p>
            <p className="text-gray-700 text-lg font-medium">
              Original Price: ${offer.original_price.toFixed(2)}
            </p>
            <p className="text-gray-700 text-lg font-medium">
              Discounted Price: ${offer.discounted_price.toFixed(2)}
            </p>
            <p className="text-gray-700 text-lg font-medium">
              Valid Until: {offer.valid_until}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OffersDetails;
