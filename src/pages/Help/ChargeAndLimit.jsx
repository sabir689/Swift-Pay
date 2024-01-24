const ChargeAndLimit = () => {
  return (
    <div className="w-[1150px] mx-auto mb-10">
      <h1 className="text-4xl text-center font-bold py-10">
        <span className="text-cyan-600">Swift-Pay</span> Charges, Limits and
        Interest
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {/* 1 */}
        <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-[550px] bg-neutral-50 rounded-lg shadow-xl flex flex-col items-center justify-center gap-4 p-6 border-2">
          <h1 className="font-bold text-3xl pb-6  text-center hover:text-cyan-500">
            Limits
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img
            className="w-32"
            src="https://www.bkash.com/uploaded_contents/contents/tariffs-limits_1677696020491.webp"
            alt=""
          />
        </div>
        {/* 2 */}
        <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-[550px] bg-neutral-50 rounded-lg shadow-xl flex flex-col items-center justify-center gap-4 p-6 border-2">
          <h1 className="font-bold text-3xl pb-6  text-center hover:text-cyan-500">
            Interest on Savings
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img
            className="w-32"
            src="https://www.bkash.com/uploaded_contents/contents/tariffs-limits_1677696020491.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ChargeAndLimit;
