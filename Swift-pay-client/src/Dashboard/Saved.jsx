import { useQuery } from "@tanstack/react-query";
import { CiLocationOn } from "react-icons/ci";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Saved = () => {
   const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data: bookmarks = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/bookmarks?email=${user.email}`);
      return res.data;
    },
  });
  

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {bookmarks.map((product) => (
          <div
            key={product.id}
            className="w-72 mb-5 bg-transparent shadow rounded-lg border border-transparent hover:border-[#49108B]  cursor-pointer"
          >
            <div
              className="h-48 w-full bg-gray-200 flex flex-col justify-between rounded-tl-lg rounded-tr-lg p-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${product?.image})` }}
            ></div>
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
        ))}
      </div>
    </div>
  );
};

export default Saved;
