import Feedback from "./Feedback";
import Information from "./Information";
import Map from "./Map";

const Contacts = () => {
  return (
    <div>
      {/* banner */}
      <div className=" flex flex-col items-center justify-center h-[200px] bg-[url('https://i.ibb.co/866GK1p/bg.jpg')] bg-no-repeat bg-cover bg-center">
        <p className=" text-4xl text-center font-semibold  ">Contact Us</p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 border-2 rounded-3xl shadow-2xl">
        <p className=" text-4xl text-center font-semibold pt-10 ">Contacts</p>
        <p className="text-center pt-3">
          Want to talk to us? Feel free to knock anytime for any queries
          regarding Swift-Pay.
        </p>
        <Information />
        <Map />
      </div>
      <div className="flex justify-center my-10 max-w-4xl mx-auto">
        <Feedback />
      </div>
    </div>
  );
};

export default Contacts;
