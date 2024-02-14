import { Link } from "react-router-dom";
import Container from "../../Components/Shared/Container";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
const Offer = () => {
  // const axiosPublic = useAxiosPublic();
  // const { data: Offers = [] } = useQuery({
  //   queryKey: ["offers"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get("/api/offers");
  //     return res.data;
  //   },
  // });
  return (
    <Container>
     
        <div className="container mx-auto lg:py-20 py-4">
          <div className="items-center lg:flex">
            <div className="">
              <div className="text-center">
                <h1 className="text-3xl text-[#212427] font-bold  lg:text-5xl">
                  Get{" "}
                  <span className="font-thin text-[#49108B]">Exclusive</span>{" "}
                  SwiftPay Offers
                  <span className="animate-blink text-[#49108B]">.</span>
                </h1>

                <p className="mt-3 text-md pb-8 text-gray-400">
                  Pay with SwiftPay and get exciting Cashback & Discount offers
                </p>

                <Link
                  to="/offersDetails"
                  className="px-6 py-4 mt-6 text-md tracking-wider uppercase transition-colors duration-300 transform bg-transparent rounded-lg lg:w-auto hover:bg-cyan-500 border border-cyan-500 focus:bg-cyan-500 font-semibold text-cyan-500 hover:text-white"
                >
                  View More Offers
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 gap-4">
              <img
                className="w-full lg:h-[500px] lg:max-w-3xl rounded-lg object-cover"
                src="https://i.ibb.co/hWSKH4s/top-view-black-friday-sales-elements-composition-1.jpg"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
     
    </Container>
  );
};

export default Offer;
