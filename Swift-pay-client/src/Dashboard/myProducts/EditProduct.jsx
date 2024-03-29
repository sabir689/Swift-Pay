import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GetProduct, uploadProduct } from "../../apis/GetMethod";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import { ImageHost } from "../../apis/ImageHost";
const EditProduct = () => {
  const location = useLocation();
  const receivedData = location.state.data;
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(product);
  useEffect(() => {
    setLoading(true);
    GetProduct(receivedData)
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch(() => {
        toast.error(
          "Unable to load data from the database. Please try again later."
        );
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const number = form.number.value;
    const productName = form.productName.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const featureImg = form.image.files[0];
    const id = product._id;
    ImageHost(featureImg)
      .then((res) => {
        const image = res.data.display_url;
        const productInfo = {
          name,
          email,
          address,
          number,
          productName,
          price,
          category,
          description,
          image,
        };
        uploadProduct(id, productInfo)
          .then(() => {
            toast.success("Product updated successfully.");
          })
          .catch(() => {
            toast.error("Error updating product. Please try again.");
          });
      })
      .catch(() => {
        toast.error("Failed to upload image. Please try again.");
      });
  };
  const [file, setFile] = useState("");
  const [productImg, setProductImg] = useState("");

  const handleChange = (e) => {
    const updatedImage = URL.createObjectURL(e.target.files[0]);
    setProductImg(updatedImage);
  };
  useEffect(() => {
    if (productImg) {
      setFile(productImg);
    } else if (product?.image) {
      setFile(product?.image);
    }
  }, [productImg, product]);
  return (
    <div className=" mt-16 mb-10 border-[1px] border-gray-300 max-w-2xl px-3 rounded-lg mx-auto">
      <div>
        <p className="text-center text-2xl my-5 md:my-10 text-[#49108B] font-bold md:text-4xl">
          Update Your Product
        </p>
        <form onSubmit={handleSubmit}>
          <div className="px-2 md:px-6 lg:px-5  grid gap-y-4 justify-center items-center mb-10">
            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Your Name
                </label>
                <input
                  name="name"
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-xs px-3 w-full outline-none"
                  type="text"
                  placeholder="your name"
                  required=""
                  defaultValue={product?.name}
                />
              </div>

              <div className="flex-1">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Email Address
                </label>
                <input
                  name="email"
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-xs px-3 w-full outline-none"
                  readOnly
                  type="Email"
                  placeholder="your email"
                  id="Email"
                  value={user?.email}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Address
                </label>
                <input
                  name="address"
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-xs px-3 w-full outline-none"
                  type="text"
                  placeholder="your address"
                  id="address"
                  defaultValue={product?.address}
                />
              </div>

              <div className="flex-1">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Phone number
                </label>
                <input
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-xs px-3 w-full outline-none"
                  type="number"
                  placeholder="phone"
                  id="number"
                  name="number"
                  defaultValue={product?.number}
                />
              </div>
            </div>

            <div>
              <label className="mb-1 text-sm inline-block text-gray-500">
                Product Name
              </label>
              <input
                name="productName"
                className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-xs px-3 w-full outline-none"
                type="text"
                placeholder="Product Name"
                defaultValue={product?.productName}
              />
            </div>

            <div className=" flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Product image
                </label>
                <input
                  name="image"
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-[6px] placeholder:text-sm px-3 w-full outline-none"
                  type="file"
                  onChange={handleChange}
                />
                <img className="w-28 h-24 object-cover mt-3" src={file} />
              </div>
              <div className="w-full md:w-40">
                <label className="mb-1 text-sm inline-block text-gray-500">
                  Price
                </label>
                <input
                  name="price"
                  className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-xs px-3 w-full outline-none"
                  type="number"
                  placeholder="price"
                  id="price"
                  defaultValue={product?.price}
                />
              </div>
            </div>

            <div>
              <label className="mb-1 text-sm inline-block text-gray-500">
                Category
              </label>
              <select
                name="category"
                className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2 placeholder:text-xs px-3 w-full outline-none"
              >
                <option> {product?.category}</option>
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

            <div className="w-full">
              <label className="mb-1 text-sm inline-block text-gray-500">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Product description"
                className="text-md rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-5 placeholder:text-sm px-3 w-full outline-none"
                defaultValue={product?.description}
              ></textarea>
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="px-10 py-2 text-center text-white duration-300 bg-purple-600  border-gray-900 rounded-full inline-flex  hover:bg-blue-400  hover:text-white  text-md font-medium"
              >
                save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditProduct;
