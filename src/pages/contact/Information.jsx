
import { HiOutlineUserGroup } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";


const Information = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:p-5">
      {/* phone */}
      <div className="flex items-center justify-between gap-4 px-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <FiPhone className=" text-2xl md:text-4xl text-cyan-500" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Call Us</p>
            <p className="text-xs md:text-base">+0247000888</p>
          </div>
        </div>
        <button className="btn px-8 md:px-10 text-white hover:text-gray-800 bg-cyan-500 hover:border-cyan-400 border-2 hover:bg-white">
          Call
        </button>
      </div>
      {/* email */}
      <div className="flex items-center justify-between gap-4 px-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <MdOutlineEmail className="text-2xl md:text-4xl text-cyan-500" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Email</p>
            <p className="text-xs md:text-base">info@swift.com.bd</p>
          </div>
        </div>
        <button className="btn px-6 md:px-9 text-white hover:text-gray-800 bg-cyan-500 hover:border-cyan-400 border-2 hover:bg-white">
          Email
        </button>
      </div>
      {/* career */}
      <div className="flex items-center justify-between gap-4 px-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <HiOutlineUserGroup className="text-2xl md:text-4xl text-cyan-500" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Career</p>
            <p className="text-xs md:text-base">career@swift.com.bd</p>
          </div>
        </div>
        <button className="btn px-6 md:px-9 text-white hover:text-gray-800 bg-cyan-500 hover:border-cyan-400 border-2 hover:bg-white">
          Email
        </button>
      </div>
      {/* location */}
      <div className="flex items-center justify-between gap-4 px-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <SlLocationPin className="text-7xl text-cyan-500" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Head Office</p>
            <p className="text-xs md:text-base">
              Delta Dahlia Tower (Level 13 and 14), 36 Kemal Ataturk Avenue,
              Banani, Dhaka -1213
            </p>
          </div>
        </div>
        <button className="btn md:px-6 text-white hover:text-gray-800 bg-cyan-500 hover:border-cyan-400 border-2 hover:bg-white">
          Direction
        </button>
      </div>
    </div>
  );
};

export default Information;
