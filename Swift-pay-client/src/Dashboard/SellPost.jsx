import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const SellPost = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  const onSubmit = async (data) => {
    // console.log(date);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res?.data?.success) {
      console.log(data);
      const productData = {
        name: data.name,
        date: new Date().toDateString(),
        productName: data.productName,
        email: user?.email,

        number: data.number,
        price: data.price,
        description: data.description,
        address: data.address,
        image: res?.data.data.display_url,
        category: data.category,
      };
      console.log(productData.data);
      const postProduct = await axiosPublic.post("/api/products", productData);
      if (postProduct.data?.insertedId) {
        toast.success("Product posted successfully!", {
          position: "bottom-right", // Set the position to bottom-right
        });
        queryClient.invalidateQueries([]);
      }
      console.log(postProduct.data);
    }
    // const res = await axiosPublic.post(image_hosting_api, imageFile);

    // await axiosPublic
    //   .post("/api/products", formData, image_hosting_api, {
    //     headers: {
    //       "content-type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data, "product posted");
    //     toast.success("Product posted successfully!");
    //     console.log(res.data);
    //   });
  };

  return (
    <div className="flex justify-center items-center mt-10 border-[1px] h-[800px] border-gray-300 w-[500px] py-10 px-8 rounded-lg mx-auto">
      <div>
        <p className="text-start ml-7 mb-5 text-[#49108B] font-bold text-4xl">
          Sell product
        </p>
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
              <input
                {...register("productName")}
                className=" text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B]  py-3 px-3 w-full placeholder:text-sm"
                type="text"
                placeholder="Product Name"
                required=""
              />
            </div>
            <div className="mb-3">
              <label className="mb-2 text-sm inline-block text-gray-500 ">
                Product image
              </label>
              <input
                name="image"
                {...register("image")}
                className="relative m-0 block min-w-full flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
              />
            </div>
            <div className="grid gap-6 w-full">
              <input
                {...register("email")}
                className="text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B]  py-3 px-3 w-full placeholder:text-sm cursor-not-allowed"
                type="Email"
                placeholder="your email"
                id="Email"
                value={user?.email}
              />
              <div className="flex gap-4">
                <textarea
                  {...register("description")}
                  placeholder="Product description"
                  className="cols-span-2 textarea textarea-md text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] w-full py-3 px-3  placeholder:text-sm"
                ></textarea>
                <input
                  {...register("price")}
                  className=" text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B]  py-3 px-3  placeholder:text-sm"
                  type="number"
                  placeholder="price"
                  id="price"
                />
              </div>
            </div>
            <div className="">
              <input
                {...register("address")}
                className="text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] mb-5 py-3 px-3 w-full placeholder:text-sm"
                type="text"
                placeholder="your address"
                id="address"
              />
              <label className="text-sm font-medium text-gray-600">
                Phone number
              </label>
              <input
                {...register("number")}
                className="mt-2 text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] mb-5 py-3 px-3 w-full placeholder:text-sm"
                type="number"
                placeholder="phone"
                id="number"
                name="number"
              />
              <label className="text-sm font-medium text-gray-600">
                Category
              </label>
              <select
                {...register("category")}
                className="select text-sm rounded-lg bg-transparent border-[1px] border-gray-400 duration-300 focus:shadow-sm focus:border-[#49108B] py-3 px-3 mt-2 w-full placeholder:text-sm"
              >
                <option className="text-sm">Electronics</option>
                <option className="text-sm">Photography</option>
                <option className="text-sm">Fitness</option>
                <option className="text-sm">Cafe Corner</option>
                <option className="text-sm">Fashion</option>
                <option className="text-sm">Art & Design</option>
                <option className="text-sm">Outdoor</option>
                <option className="text-sm">Appliances</option>
                <option className="text-sm">Home & security</option>
                <option className="text-sm">Home & Living </option>
                <option className="text-sm">Home Automation</option>
                <option className="text-sm">Home & Kitchen</option>
              </select>
            </div>
            <div className="text-end mt-4">
              <button
                type="submit"
                className="items-center  justify-center  px-11 py-2.5 text-center text-white duration-200 bg-purple-600  border-gray-900 rounded-full inline-flex  hover:bg-gray-500 hover:text-white  text-sm"
              >
                Sell
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellPost;
