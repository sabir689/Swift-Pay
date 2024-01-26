import { TbSend } from "react-icons/tb";
import receive from "../../src/assets/icons/reciever.png";
import sent from "../../src/assets/icons/money.png";
const MyDashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[800px] px-8  py-8 pb-12 mt-16 bg-gray-800 rounded-lg shadow-lg ">
        <div className="flex justify-start items-start -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </div>

        <h2 className="mt-2 mb-5 ml-[34px] text-3xl font-semibold text-gray-800 dark:text-white md:mt-0">
          My Dashboard <span></span>
        </h2>

        <div className="flex items-center justify-center">
          <div className="mr-5 w-[217px] h-[170px] rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
            <p className="text-white text-2xl font-semibold">2256 $</p>
            <p className="text-white text-sm">Total Received money</p>
            <img className="w-[50px]  mt-2" src={receive} alt="" />
          </div>
          {/* <button className="mr-5 border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-2">History</p>
          </button> */}
          <div className="mr-5 w-[217px] h-[170px] rounded-lg bg-[#4157ff] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
            <p className="text-white text-2xl font-semibold">1530 $</p>
            <p className="text-white text-sm">Total Received money</p>
            <img className="w-[50px]  mt-2" src={sent} alt="" />
          </div>
          <button className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-2">History</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
