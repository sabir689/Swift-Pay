/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import UseAuth from "../hooks/UseAuth";

const Payment = ({ isOpen, setIsOpen, productt }) => {
  const { register, handleSubmit } = useForm();
  const { user } = UseAuth();

  const onSubmit = async (data) => {
    console.log(data);
    const orderInfo = {
      email: user.email,
      displayName: user.displayName,
      image: productt?.image,
      photoURL: user.photoURL,
      productName: productt?.productName,
      description: productt.description,
      price: productt?.price,
      productId: productt?._id,
      userInfo: data,
    };


    fetch("https://swift-pay-server.vercel.app/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log(result);
      });
  };

  return (
    <div>
      <dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        id="my_modal_1"
        className="modal"
      >
        <div className="modal-box">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-7  grid justify-center items-center"
          >
            <div className="grid gap-6" id="form">
              <div className="w-full flex gap-3">
                <input
                  {...register("name")}
                  className="text-sm rounded-lg border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#9e6bd7]  py-3 px-3 w-full placeholder:text-sm"
                  type="text"
                  placeholder="your name"
                  required
                  defaultValue={user.displayName}
                />
              </div>
              <div className="w-full flex gap-3">
                <input
                  {...register("email")}
                  className="text-sm rounded-lg border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#9e6bd7]  py-3 px-3 w-full placeholder:text-sm"
                  type="email"
                  placeholder="your email"
                  required
                  defaultValue={user.email}
                />
              </div>

              <div className="grid gap-6 w-full">
                <input
                  {...register("postCode")}
                  className="text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B]  py-3 px-3 w-full placeholder:text-sm"
                  type="text"
                  placeholder="post code"
                />
              </div>
              <div className="">
                <input
                  {...register("address")}
                  className="text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] mb-5 py-3 px-3 w-full placeholder:text-sm"
                  type="text"
                  placeholder="your address"
                  id="address"
                />
                <input
                  {...register("number")}
                  className="mt-2 text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] mb-5 py-3 px-3 w-full placeholder:text-sm"
                  type="number"
                  placeholder="phone number"
                  id="number"
                  name="number"
                />
                <select
                  {...register("category")}
                  className="select text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300 focus:shadow-sm focus:border-[#49108B] py-3 px-3 mt-2 w-full placeholder:text-sm"
                >
                  <option className="text-sm">BDT</option>
                  <option className="text-sm">USD</option>
                </select>
              </div>
              <button
                type="submit"
                className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-[#0D9276] border-2  rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
              >
                {" "}
                complete payment
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Payment;
