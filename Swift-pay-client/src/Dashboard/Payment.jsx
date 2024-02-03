import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import UseAuth from "../hooks/UseAuth";

const Payment = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { user } = UseAuth();
  //   const { data: products = [] } = useQuery({
  //     queryKey: ["products"],
  //     queryFn: async () => {
  //       const res = await axiosPublic.get("/api/products");
  //       return res.data;
  //     },
  //   });
  //   console.log(products);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [id]);

  const onSubmit = async(data) => {
    console.log(data);

    const orderInfo = {
      email: user.email,
      displayName: user.displayName,
      image: data.image,
      photoURL: user.photoURL,
      description: data.description,
      price: data.price,
      productId:productId,
      productInfo: data
    }
      productId: id,
    };

    console.log(orderInfo);
    // axiosPublic.post("/order", orderInfo).then((res) => {
    //   if (res.data.insertedId) {
    //     console.log("user added to the database");
    //   }
    // });

    // data.productId = id;

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderInfo),
    });
    // fetch("http://localhost:5000/order", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
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
                  required=""
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
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Payment;
