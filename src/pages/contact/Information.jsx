
import { HiOutlineUserGroup } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";


const Information = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5">
      {/* phone */}
      <div className="flex items-center justify-between gap-4 p-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <FiPhone className="text-4xl text-cyan-500" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Call Us</p>
            <p>+0247 000888</p>
          </div>
        </div>
        <button className="btn px-10 bg-cyan-500 hover:border-cyan-400 border-2 hover:bg-white">
          Call
        </button>
      </div>
      {/* email */}
      <div className="flex items-center justify-between gap-4 p-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <MdOutlineEmail className="text-4xl text-cyan-500" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Email</p>
            <p>info@nagad.com.bd</p>
          </div>
        </div>
        <button className="btn px-9 bg-cyan-500 hover:border-cyan-400 border-2 hover:bg-white">
          Email
        </button>
      </div>
      {/* career */}
      <div className="flex items-center justify-between gap-4 p-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <HiOutlineUserGroup className="text-4xl text-cyan-500" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Career</p>
            <p>recruitment@nagad.com.bd</p>
          </div>
        </div>
        <button className="btn px-9 bg-cyan-500 hover:border-cyan-400 border-2 hover:bg-white">
          Email
        </button>
      </div>
      {/* location */}
      <div className="flex items-center justify-between gap-4 p-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <SlLocationPin className="text-7xl text-cyan-500" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Head Office</p>
            <p>
              Delta Dahlia Tower (Level 13 and 14), 36 Kemal Ataturk Avenue,
              Banani, Dhaka -1213
            </p>
          </div>
        </div>
        <button className="btn px-6 bg-cyan-500 hover:border-cyan-400 border-2 hover:bg-white">
          Direction
        </button>
      </div>
    </div>
  );
};

export default Information;
