import Feedback from "./Feedback";
import Information from "./Information";
import Map from "./Map";
import { BiSupport } from "react-icons/bi";


const Contacts = () => {
  return (
    <div className="px-4 md:px-8 ">
      {/* banner */}
      <div className=" flex gap-4 items-center justify-center h-[200px] bg-[url('https://i.ibb.co/866GK1p/bg.jpg')] bg-no-repeat bg-cover bg-center">
        <BiSupport className="text-7xl" />
        <p className=" text-4xl text-center font-semibold   ">
          Support
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 border-2 rounded-3xl shadow-2xl">
        <p className=" text-4xl text-center font-semibold pt-10 ">Contact Us</p>
        <p className="text-center text-sm md:text-base p-3">
          Want to talk to us? Feel free to knock anytime for any queries
          regarding Swift-Pay.
        </p>
        <Information />
        <p className=" text-4xl text-center font-semibold pb-8 ">
          Explore Our Location
        </p>
        <Map />
      </div>
      <div className="flex justify-center my-10 max-w-4xl mx-auto">
        <Feedback />
      </div>
    </div>
  );
};

export default Contacts;
