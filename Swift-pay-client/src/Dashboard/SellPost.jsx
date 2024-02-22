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
        toast.success("Product posted successfully!", reset(), {});
        queryClient.invalidateQueries([]);
      }
    }
  };
  const [uploadImage, setUploadImage] = useState("");
  const handlefileUpload = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setUploadImage(file);
  };
  return (
    <div className="border-[1px] border-gray-300 max-w-xl  rounded-md mx-auto px-10 pt-8 my-32">
      <div>
        <p className="text-left text-2xl text-[#49108B] font-bold md:text-4xl mb-7 pt-4">
          Sell product
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-y-4 justify-center items-center mb-10"
        >
          <div className="grid gap-6" id="form">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Your Name
                </label>
                <input
                  {...register("name")}
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-xs px-3 w-full outline-none"
                  type="text"
                  placeholder="your name"
                  required
                  value={user.displayName}
                />
              </div>
              <div className="flex-1">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Email Address
                </label>

                <input
                  {...register("email")}
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-sm px-3 w-full outline-none  cursor-not-allowed"
                  type="Email"
                  placeholder="your email"
                  id="Email"
                  value={user?.email}
                />
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Your Address
                </label>
                <input
                  {...register("address")}
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-sm px-3 w-full outline-none"
                  type="text"
                  placeholder="your address"
                  id="address"
                />
              </div>
              <div className="flex-1">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Phone number
                </label>
                <input
                  {...register("number")}
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-sm px-3 w-full outline-none"
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
                  <label className="mb-1 text-sm inline-block text-gray-500">
                    Product image
                  </label>
                  <input
                    name="image"
                    {...register("image")}
                    className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-[6px] placeholder:text-sm px-3 w-full outline-none"
                    type="file"
                    onChange={handlefileUpload}
                  />
                </div>
              </div>
              {uploadImage && (
                <img
                  src={uploadImage}
                  className="w-28 h-auto object-cover mt-2"
                />
              )}
            </div>
            <div className="">
              <label className="mb-1 text-sm inline-block text-gray-500">
                Category
              </label>
              <select
                {...register("category")}
                className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-sm px-3 w-full outline-none"
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

            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Product Name
                </label>
                <input
                  {...register("productName")}
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-sm px-3 w-full outline-none"
                  type="text"
                  placeholder="Product Name"
                  required
                />
              </div>
              <div className="w-full md:w-40">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Price
                </label>
                <input
                  {...register("price")}
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-sm px-3 w-full outline-none"
                  type="number"
                  placeholder="price"
                  id="price"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 text-sm inline-block text-gray-500">
                Product description
              </label>
              <textarea
                {...register("description")}
                placeholder="product description...."
                className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-5 placeholder:text-sm px-3 w-full outline-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="px-7 py-2  text-white duration-200 bg-purple-600  border-gray-900 rounded-full hover:bg-gray-500 hover:text-white  text-base"
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
