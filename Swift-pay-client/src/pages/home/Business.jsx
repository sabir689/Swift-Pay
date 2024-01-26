import { Helmet } from "react-helmet";
import Container from "../../Components/Shared/Container";
import { MdOutlineSendToMobile } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { FaSchool, FaUsers, FaUserSecret } from "react-icons/fa";
import { FaHandsHolding } from "react-icons/fa6";

const Business = () => {
  return (
    <Container>
      <div>
        <Helmet>
          <title>SwiftPay for Business</title>
        </Helmet>
        <div className="text-center mx-auto py-4 lg:w-1/2">
          <h1 className="text-4xl font-bold text-black">
            <span className="text-cyan-500">SwiftPay</span> For Business
          </h1>
          <p className="py-4 font-light">
            SwiftPay financial solutions make your business transactions faster,
            easier and safer. So manage business more efficiently through
            development.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="w-full lg:w-44 h-52 shadow-xl flex flex-col justify-center items-center">
              <MdOutlineSendToMobile className="text-7xl text-cyan-500"></MdOutlineSendToMobile>
              <h1 className="text-xl py-2">Online Business</h1>
            </div>
            <div className="w-full lg:w-44 h-52 shadow-xl flex flex-col justify-center items-center">
              <FaUserSecret className="text-7xl text-cyan-500"></FaUserSecret>
              <h1 className="text-xl py-2">Merchant</h1>
            </div>
            <div className="w-full lg:w-44 h-52 shadow-xl flex flex-col justify-center items-center">
              <FaSchool className="text-7xl text-cyan-500"></FaSchool>
              <h1 className="text-xl py-2 mx-auto text-center">
                Educational Institutions
              </h1>
            </div>
            <div className="w-full lg:w-44 h-52 shadow-xl flex flex-col justify-center items-center">
              <FaUsers className="text-7xl text-cyan-500"></FaUsers>
              <h1 className="text-xl py-2">Corporate</h1>
            </div>
            <div className="w-full lg:w-44 h-52 shadow-xl flex flex-col justify-center items-center">
              <FaHandsHolding className="text-7xl text-cyan-500"></FaHandsHolding>
              <h1 className="text-xl py-2">Microfinance</h1>
            </div>
            <div className="w-full lg:w-44 h-52 shadow-xl flex flex-col justify-center items-center">
              <GrNext className="text-7xl text-cyan-500"></GrNext>
            </div>
          </div>
          <div className="lg:ml-8">
            <img
              className="w-full lg:w-[700px] lg:h-[440px] h-[300px] object-cover"
              src="https://i.ibb.co/M9sDKZR/happy-joyful-cellphone-user-pointing-blank-screen-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Business;
