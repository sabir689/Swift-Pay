import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
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
      const postProduct = await axiosPublic.post("/api/products", productData);
      if (postProduct.data?.insertedId) {
        toast.success("Product posted successfully!",
        reset(),
        {
        });
        queryClient.invalidateQueries([]);
      }
    }
  };
  const [uploadImage, setUploadImage] = useState('')
  const handlefileUpload = (e) => {
    const file = URL.createObjectURL(e.target.files[0])
    setUploadImage(file)
  }
  return (
    <div className="mt-16 mb-10 border-[1px] border-gray-300 max-w-2xl px-3 rounded-md mx-auto">
      <div>
        <p className="text-center text-2xl my-7 md:my-7 text-[#49108B] font-bold md:text-4xl">
          Sell product
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-2 md:px-6 lg:px-5  grid gap-y-4 justify-center items-center mb-10"
        >

          <div className="grid gap-6" id="form">
            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                  Your Name
                </label>
                <input
                  {...register("name")}
                  className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-base px-3 w-full outline-none"
                  type="text"
                  placeholder="your name"
                  required
                  defaultValue={user.displayName}
                />
              </div>
              <div className="flex-1">
                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                  Email Address
                </label>

                <input
                  {...register("email")}
                  className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-base px-3 w-full outline-none  cursor-not-allowed"
                  type="Email"
                  placeholder="your email"
                  id="Email"
                  value={user?.email}
                />
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                  Your Address
                </label>
                <input
                  {...register("address")}
                  className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-3 px-3 w-full outline-none"
                  type="text"
                  placeholder="your address"
                  id="address"
                />

              </div>
              <div className="flex-1">

                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                  Phone number
                </label>
                <input
                  {...register("number")}
                  className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-3 px-3 w-full outline-none"
                  type="number"
                  placeholder="phone number"
                  id="number"
                  name="number"
                />
              </div>
            </div>

           <div>
           <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                  Product image
                </label>
                <input
                  name="image"
                  {...register("image")}
                  className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-base px-3 w-full outline-none"
                  type="file"
                  onChange={handlefileUpload}
                />
              </div>
              <div className="flex-1">

                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                  Category
                </label>
                <select
                  {...register("category")}
                  className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-3 px-3 w-full outline-none"
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
             
            </div>
            {
                uploadImage && <img src={uploadImage} className="w-28 h-auto object-cover mt-2"/>
              }
           </div>

            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                  Product Name
                </label>
                <input
                  {...register("productName")}
                  className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-base px-3 w-full outline-none"
                  type="text"
                  placeholder="Product Name"
                  required
                />
              </div>
              <div className="w-full md:w-40">
                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                  Price
                </label>
                <input
                  {...register("price")}
                  className=" text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 px-3 w-full outline-none"
                  type="number"
                  placeholder="price"
                  id="price"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                Product description
              </label>
              <textarea
                {...register("description")}
                placeholder="Product description"
                className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-3 px-3 h-32 w-full outline-none"
              ></textarea>

            </div>
         
            <div className="text-center">
              <button
                type="submit"
                className="items-center  justify-center  px-11 py-2.5 text-center text-white duration-200 bg-purple-600  border-gray-900 rounded-full inline-flex  hover:bg-gray-500 hover:text-white  text-base"
              >
                Upload
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellPost;
