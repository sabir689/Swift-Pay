import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";

const Service = () => {
  return (
    <div className=" bg-cyan-50 my-10">
      <div className=" w-[1100px] h-[400px] mx-auto flex gap-20 items-center">
        <div>
          <img
            className="w-[800px]"
            src="https://www.bkash.com/uploaded_contents/contents/24by7-support_1677696165917.webp"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold">24/7 at your service:</h1>
          <p className="py-6">
            Dedicated bKash representatives are available 24/7 via 16247, Live
            Chat & Facebook. You can also take e-Appointments or email at
            support@bkash.com
          </p>

          <div className="">
            <button className="text-xl btn px-8 md:px-10 hover:text-white text-gray-800 bg-white border-cyan-400 border-2 hover:bg-cyan-500">
              <BiPhoneCall className="text-cyan-500 text-2xl " /> 16247
            </button>
            <button className=" ml-5 text-xl btn px-8 md:px-10 hover:text-white text-gray-800 bg-white border-cyan-400 border-2 hover:bg-cyan-500">
              <FaRegCalendarAlt className="text-cyan-500  text-2xl " />{" "}
              e-Appointment
            </button>
            <button className="mt-4 text-xl  btn px-8 md:px-10 hover:text-white text-gray-800 bg-white border-cyan-400 border-2 hover:bg-cyan-500">
              <IoChatbubbleEllipsesOutline className="text-cyan-500  text-2xl " />
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
