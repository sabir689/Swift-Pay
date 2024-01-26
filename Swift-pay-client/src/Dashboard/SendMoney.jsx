import { TbSend } from "react-icons/tb";
const SendMoney = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <section>
          <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
            <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
              <div className="flex flex-col">
                <div>
                  <h2 className="text-4xl text-black font-bold">
                    <span className="text-[#49108B]">Send</span>{" "}
                    <span className="font-thin">Money</span>
                  </h2>
                </div>
              </div>
              <form>
                <input
                  value="https://jamstacker.studio/thankyou"
                  type="hidden"
                  name="_redirect"
                />
                <div className="mt-4 space-y-6">
                  <div className="col-span-full">
                    <label className="block mb-3 text-sm font-medium text-gray-600">
                      {" "}
                      number <span className="text-gray-400">
                        or
                      </span> Gmail{" "}
                    </label>
                    <input
                      type="password"
                      placeholder="number/gmail"
                      className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="block mb-3 text-sm font-medium text-gray-600">
                      {" "}
                      password{" "}
                    </label>
                    <input
                      type="password"
                      placeholder="******"
                      className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-full">
                    <button
                      type="submit"
                      className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-md focus-visible:ring-black"
                    >
                      {" "}
                      Send
                      <TbSend className="ml-5" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SendMoney;
