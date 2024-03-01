import { useState } from "react";
import { useNavigate } from "react-router-dom";
import streaming from "../../assets/images/streaming (1).png";
import Lottie from "lottie-react";
import banner from "../../assets/animations/new/R9zXT0eMxh.json";
const LiveStream = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <div>
      <div className="my-32 h-screen max-w-screen-xl mx-auto">
        <div className="flex items-center justify-center mt-10 mb-7">
          <h1 className="lg:text-4xl text-2xl font-semibold ">
            <span className="text-[#49108B]">SwiftPay</span> live streaming
            service
          </h1>
          <div className="lg:w-[100px]">
            <Lottie animationData={banner} loop={true}></Lottie>
          </div>
        </div>

        <section className="flex flex-col lg:flex-row  items-center justify-between p-5 lg:p-10 overflow-hidden text-white rounded-lg shadow-lg bg-[#333A73] md:flex-row md:h-[450px]">
          <div className="">
            <div className="">
              <h2 className="lg:text-5xl text-2xl font-medium">
                Experience Live <br /> Shopping: Join Our Stream Now!
              </h2>

              <p className="my-7 text-sm text-gray-400 font-thin">
                Connect with your client or customers and have productive
                discussions in real-time.
              </p>

              <div className="flex items-center">
                <form onSubmit={handleFormSubmit}>
                  <div className="flex flex-col p-2 overflow-hidden rounded-lg border-[1px] dark:border-gray-400 lg:flex-row dark:focus-within:border-cyan-400 focus-within:ring focus-within:ring-opacity-40 focus-within:border-cyan-400 focus-within:ring-cyan-400">
                    <input
                      className="px-4 py-1 placeholder-gray-500 bg-[#333A73] outline-none focus:placeholder-transparent dark:focus:placeholder-transparent"
                      type="text"
                      placeholder="Enter meeting code"
                      aria-label="Enter meeting code"
                      value={roomCode}
                      onChange={(e) => setRoomCode(e.target.value)}
                    />

                    <button
                      type="submit"
                      className="px-5 py-3 my-2 text-sm font-medium tracking-wider uppercase transition-colors duration-300 transform bg-cyan-400 rounded-[5px] hover:bg-cyan-800 focus:bg-cyan-400 focus:outline-none mr-2"
                    >
                      Join Meeting
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <img
              className="my-10 lg:my-0 w-[200px] lg:w-96"
              src={streaming}
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LiveStream;
