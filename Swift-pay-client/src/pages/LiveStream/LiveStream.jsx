import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../Components/Shared/Container";

const LiveStream = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <Container>
      <div className="py-40">
        <section className="flex flex-col max-w-7xl mx-auto overflow-hidden bg-white text-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-[500px]">
          <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800 p-12">
            <div className="px-6 py-6 md:px-8 md:py-0">
              <h2 className="lg:text-5xl text-2xl font-bold ">
                Join a{" "}
                <span className="text-cyan-400 dark:text-blu-400 md:text-cyan-400">
                  Video Call or Meeting
                </span>{" "}
                Now
              </h2>

              <p className="mt-2 text-sm  md">
                Connect with your client or customers and have productive
                discussions in real-time.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col p-2 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-cyan-400 focus-within:ring focus-within:ring-opacity-40 focus-within:border-cyan-400 focus-within:ring-cyan-400">
                <input
                  className="px-6 py-3 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                  type="text"
                  placeholder="Enter meeting code"
                  aria-label="Enter meeting code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                />

                <button
                  type="submit"
                  className="px-5 py-3 my-2 text-sm font-medium tracking-wider uppercase transition-colors duration-300 transform bg-cyan-400 rounded-md hover:bg-cyan-400 focus:bg-cyan-400 focus:outline-none"
                >
                  Join Meeting
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default LiveStream;
