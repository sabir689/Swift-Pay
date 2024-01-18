import { FaLocationArrow } from "react-icons/fa6";

const Feedback = () => {
  return (
    <div>
      <div className="card bg-white rounded-2xl p-5 flex flex-col">
        <div className="title text-4xl font-semibold text-center pb-5">
          Send us your <span className="text-cyan-500">Feedback</span>
        </div>
        <div className="form mt-4 flex flex-col">
          <div className="group relative ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              className="py-2 px-3 w-[600px] rounded-md border border-gray-300 mb-4 outline-none bg-transparent"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="group relative ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="py-2 px-3 w-[600px] rounded-md border border-gray-300 mb-4 outline-none bg-transparent"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="group relative ">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              className="py-2 px-3 w-[600px] rounded-md border border-gray-300 mb-4 outline-none bg-transparent"
              type="number"
              placeholder="Your Number"
            />
          </div>

          <label className="label">
            <span className="label-text">Feedback</span>
          </label>
          <textarea
            placeholder=""
            className="py-5 px-3 w-[600px] rounded-md border border-gray-300 mb-4 outline-none bg-transparent"
          ></textarea>

          <button className="btn text-xl px-10 bg-cyan-500 hover:border-cyan-500 border-2 hover:bg-white">
            Send <FaLocationArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
