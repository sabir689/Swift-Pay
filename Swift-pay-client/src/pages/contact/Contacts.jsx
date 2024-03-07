import Feedback from "./Feedback";
import Information from "./Information";
import Map from "./Map";

const Contacts = () => {
  return (
    <div className=" bg-gray-200 px-4 md:px-8 lg:px-0 ">
      {/* banner */}

      <div className=" flex gap-4 items-center justify-center h-[400px] bg-[url('https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center"></div>

      <div className=" bg-white max-w-6xl mx-auto mt-10 border-2 rounded-3xl shadow-2xl">
        <p className="text-3xl md:text-4xl text-center font-semibold pt-10 ">
          Contact Us
        </p>
        <p className="text-center text-sm md:text-base p-3">
          Want to talk to us? Feel free to knock anytime for any queries
          regarding Swift-Pay
        </p>
        <Information />
        <p className=" text-3xl md:text-4xl text-center font-semibold pt-4 pb-4 md:pb-6">
          Explore Our Location
        </p>
        <Map />
      </div>
      <div className="flex justify-center py-10 max-w-4xl mx-auto">
        <Feedback />
      </div>
    </div>
  );
};

export default Contacts;
