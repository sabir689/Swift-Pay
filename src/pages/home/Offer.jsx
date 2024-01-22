import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Components/Shared/Container';

const Offer = () => {
    return (
      <Container>
        <div>
          <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg text-center">
                  <h1 className="text-3xl font-semibold  lg:text-4xl">
                    Get Exclusive SwiftPay Offers
                  </h1>

                  <p className="mt-3 text-md pb-8">
                    Pay with SwiftPay and get exciting Cashback & Discount
                    offers
                  </p>

                  <Link
                    to="/offersDetails"
                    className="w-full  px-6 py-4 mt-6 text-xl tracking-wider uppercase transition-colors duration-300 transform bg-transparent rounded-lg lg:w-auto hover:bg-cyan-500 border border-cyan-500 focus:bg-cyan-500 font-semibold text-cyan-500 hover:text-white"
                  >
                    View More Offers
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 gap-4">
                <img
                  className="w-full lg:h-[500px] lg:max-w-3xl rounded-lg object-cover"
                  src="https://i.ibb.co/gvXVQnT/151914-OUR8-OJ-83.jpg"
                  alt="Catalogue-pana.svg"
                />
                <div className="flex gap-5">
                  <div className="card shadow-lg">
                    <img
                      className="w-full h-60 lg:max-w-xl rounded-lg"
                      src="https://i.ibb.co/YZYKPKQ/9781383.jpg"
                    />
                    <div className="card-content p-3">
                      <h3 className="text-lg font-semibold">
                        Win Prizes with SwiftPay
                      </h3>
                      <p className="text-sm">
                        Engage with SwiftPay to get the giveaway prizes every
                        day
                      </p>
                    </div>
                  </div>
                  <div className="card shadow-lg">
                    <img
                      className="w-full h-60 lg:max-w-3xl rounded-lg"
                      src="https://i.ibb.co/VwMY2vd/tamanna-rumee-m-Iqy-Yp-SNq3o-unsplash-1.jpg"
                    />
                    <div className="card-content p-3">
                      <h3 className="font-semibold text-lg">
                        Black Friday Sale
                      </h3>
                      <p className="text-sm">
                        Always updated with SwiftPAY to get the sale every
                        friday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Offer;