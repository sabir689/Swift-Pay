const SellPost = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <p className="text-start ml-7 mb-5 text-[#49108B] font-bold text-4xl">
          Sell product
        </p>
        <form className="px-7  grid justify-center items-center">
          <div className="grid gap-6" id="form">
            <div className="w-full flex gap-3">
              <input
                className="text-sm rounded-lg border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#9e6bd7]  py-3 px-3 w-full placeholder:text-sm"
                type="text"
                placeholder="your name"
                id="your-Name"
                name="your-Name"
                required=""
              />
              <input
                className=" text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B]  py-3 px-3 w-full placeholder:text-sm"
                type="text"
                placeholder="Product Name"
                id="product-Name"
                name="product-Name"
              />
            </div>
            <input
              type="file"
              className="file-input placeholder:text-gray-400 file-input-bordered  file-input-info text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B]  py-3 px-3 w-full placeholder:text-sm"
            />
            <div className="grid gap-6 w-full">
              <input
                className="text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B]  py-3 px-3 w-full placeholder:text-sm"
                type="Email"
                placeholder="your email"
                id="Email"
                name="email"
              />
              <div className="flex gap-4">
                <textarea
                  id="description"
                  name="description"
                  placeholder="Product description"
                  className="cols-span-2 textarea textarea-md text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] w-full py-3 px-3  placeholder:text-sm"
                ></textarea>
                <input
                  className=" text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B]  py-3 px-3  placeholder:text-sm"
                  type="number"
                  placeholder="price"
                  id="price"
                  name="price"
                />
              </div>
            </div>
            <div className="">
              <input
                className="text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] mb-5 py-3 px-3 w-full placeholder:text-sm"
                type="number"
                placeholder="phone"
                id="number"
                name="number"
              />
              <label className="text-sm font-medium text-gray-600">
                Category
              </label>
              <select className="select text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300 focus:shadow-sm focus:border-[#49108B] py-3 px-3 mt-2 w-full placeholder:text-sm">
                <option className="text-sm">Technology</option>
                <option className="text-sm">Phone</option>
                <option className="text-sm">Computer</option>
                <option className="text-sm">High</option>
                <option className="text-sm">High</option>
                <option className="text-sm">High</option>
                <option className="text-sm">High</option>
                <option className="text-sm">High</option>
                <option className="text-sm">High</option>
              </select>
            </div>
            <button
              type="submit"
              className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-[#21251f] border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
            >
              {" "}
              Sell
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellPost;
