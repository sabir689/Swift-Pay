import React, { useContext, useEffect, useState } from "react";
import { getMyPorducts } from "../../apis/GetMethod";
import { AuthContext } from "../../provider/AuthProvider";
import { MdDelete } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Swal from "sweetalert2";
import { deleteMyproduct } from "../../apis/deleteMothod";
import toast from "react-hot-toast";
import { LiaEditSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const Products = () => {
  const [myProduct, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  // const userEmail=user?.email
  // console.log(userEmail);
  useEffect(() => {
    setLoading(true);
    getMyPorducts(user.email).then((res) => {
      setMyProducts(res);
      setLoading(false);
    });
  }, [user?.email]);
  console.log(myProduct);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMyproduct(id)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Item has been deleted.",
              icon: "success",
            });
          })
          .catch(() => {
            toast.error(
              "Oops! Something went wrong. Your product could not be deleted."
            );
          });
      }
    });
  };

  return (
    <div>
      {loading ? (
        <></>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {myProduct.map((product) => (
            <div
              key={product._id}
              className="mb-5 bg-transparent shadow rounded-lg border border-transparent hover:border-[#49108B]  cursor-pointer"
            >
              <div
                className="relative h-48 w-full bg-gray-200 flex flex-col justify-between rounded-tl-lg rounded-tr-lg p-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${product?.image})` }}
              >
                <div className="flex flex-col gap-3 absolute top-2 right-3">
                  <div
                    onClick={() => handleDelete(product._id)}
                    className=" w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
                  >
                    <MdDelete className="text-3xl text-red-700" />
                  </div>

                  <Link
                    to={`/dashboard/productedit/${product.productName.replace(
                      /\s/g,
                      "-"
                    )}`}
                    state={{ data: product?._id }}
                    className=" w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-blue-400"
                  >
                    <LiaEditSolid className="text-3xl text-red-700 hover:text-blue-400" />
                  </Link>
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
              </div>{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
