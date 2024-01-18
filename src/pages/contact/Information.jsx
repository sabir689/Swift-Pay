import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import location from "../../assets/images/location.png";
import career from "../../assets/images/career.png";

const Information = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5">
      {/* phone */}
      <div className="flex items-center justify-between gap-4 p-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <img className="h-10" src={phone} alt="" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Call Us</p>
            <p>+0247 000888</p>
          </div>
        </div>
        <button className="btn text-xl px-10 bg-orange-600 hover:border-orange-600 border-2 hover:bg-white">
          Call
        </button>
      </div>
      {/* email */}
      <div className="flex items-center justify-between gap-4 p-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <img className="h-10" src={email} alt="" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Email</p>
            <p>info@nagad.com.bd</p>
          </div>
        </div>
        <button className="btn text-xl px-8 bg-orange-600 hover:border-orange-600 border-2 hover:bg-white">
          Email
        </button>
      </div>
      {/* career */}
      <div className="flex items-center justify-between gap-4 p-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <img className="h-10" src={career} alt="" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Career</p>
            <p>recruitment@nagad.com.bd</p>
          </div>
        </div>
        <button className="btn text-xl px-8 bg-orange-600 hover:border-orange-600 border-2 hover:bg-white">
          Email
        </button>
      </div>
      {/* location */}
      <div className="flex items-center justify-between gap-4 p-3">
        <div className="flex items-center justify-between gap-4 p-3">
          <img className="h-10" src={location} alt="" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Head Office</p>
            <p>
              Delta Dahlia Tower (Level 13 and 14), 36 Kemal Ataturk Avenue,
              Banani, Dhaka -1213
            </p>
          </div>
        </div>
        <button className="btn text-xl bg-orange-600 hover:border-orange-600 border-2 hover:bg-white">
          Direction
        </button>
      </div>
    </div>
  );
};

export default Information;
