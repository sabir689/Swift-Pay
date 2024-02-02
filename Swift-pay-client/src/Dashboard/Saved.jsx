import { CiLocationOn } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

const Saved = () => {
  return (
    <div>
      saved
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* {products.map((product) => (
          <div
            key={product.id}
            className="w-72 mb-5 bg-transparent shadow rounded-lg border border-transparent hover:border-[#49108B]  cursor-pointer"
          >
            <div
              className="h-48 w-full bg-gray-200 flex flex-col justify-between rounded-tl-lg rounded-tr-lg p-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${product?.image})` }}
            >
              <div className="w-8 h-9 bg-gray-200 rounded flex items-center justify-center text-blue-400">
                <FaBookmark />
              </div>
            </div>
            <div className="p-4">
              <div className="">
                <h1 className="text-gray-600 font-medium">
                  {product?.productName}
                </h1>
                <button className="text-gray-500 hover:text-gray-900">
                  {" "}
                  ${product?.price}
                </button>{" "}
              </div>{" "}
              <p className="text-gray-400 text-sm my-1">{product?.name}</p>
              <p className="text-gray-400 text-sm my-1 flex items-center">
                <p>
                  <CiLocationOn className="text-blue-400" />{" "}
                </p>
                {product?.location}
              </p>
              <span
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="uppercase text-xs bg-green-50 px-2 py-1 border-green-500 border rounded text-green-700 font-medium"
              >
                Pay
              </span>{" "}
            </div>{" "}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Saved;
