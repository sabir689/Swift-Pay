import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationArrow, FaRegUserCircle } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Payment from "../../Dashboard/Payment";
import useUser from "../../hooks/useUser";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
  const { id } = useParams();
  const [profileInfo] = useUser();
  console.log(profileInfo);
  const [review, setReview] = useState("");
  const axiosPublic = useAxiosPublic();

  const [showData, setShowData] = useState(null);
  const products = useLoaderData();

  useEffect(() => {
    const details = products.find((detail) => detail._id === id);
    setShowData(details);
  }, [products, id]);

  // review part here.............
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/porductreviews");
      const productReviews = res.data.filter(
        (review) => review.product_id === id
      );

      return productReviews;
    },
  });

  const handleReview = () => {
    const reviewInfo = {
      product_id: id,
      user_email: profileInfo.email,
      user_name: profileInfo.name,
      user_photoURL: profileInfo.photoURL,
      review: review,
      time: new Date().toDateString(),
    };
    axiosPublic.post("/api/porductreviews", reviewInfo).then((res) => {
      if (res.data.insertedId) {
        toast.success("Thank you for your review");
        refetch();
        setReview("");
      }
    });
  };

  const handleDelete = (_id) => {
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
        axiosPublic.delete(`/api/porductreviews/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Item has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="max-w-3xl">
        {showData && (
          <div className="my-10 block rounded-lg p-4 border-[1px] border-gray-400">
            <img
              loading="lazy"
              alt="Home"
              src={showData?.image}
              className="w-full object-cover object-center"
            />

            <div className="mt-2">
              <dl>
                <div>
                  <dt className="sr-only">Price</dt>

                  <dd className="text-xl font-medium text-gray-500">
                    $ <span>{showData?.price}</span>
                  </dd>
                </div>
                <dd className="font-medium mb-5">{showData?.productName}</dd>
                {/* seller profile button */}
                <Link to={`/dashboard/sellerprofile/${showData?.email}`}>
                  {" "}
                  <button>
                    <dd className="font-medium flex items-center">
                      {showData?.displayURL ? (
                        <img
                          className="object-cover h-10 rounded-full"
                          src={showData?.displayURL}
                          alt="Avatar"
                        />
                      ) : (
                        <div className="text-3xl text-blue-400">
                          <FaRegUserCircle />
                        </div>
                      )}

                      <p className="flex gap-2 items-center text-gray-500 ml-2">
                        {showData?.name}{" "}
                        <FaExternalLinkAlt className="text-cyan-700" />
                      </p>
                    </dd>
                  </button>
                </Link>
              </dl>
              <p className="mt-2 text-gray-400">{showData?.description}</p>
              <div className="mt-6 flex items-center justify-evenly text-xs">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <CiLocationOn className="text-blue-400 text-xl" />

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Location</p>

                    <p className="font-medium">{showData?.address}</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <TbCategory className="text-xl" />

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Category</p>

                    <p className="font-medium">{showData?.category}</p>
                  </div>
                </div>
                {/* pay button */}
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div className="mt-1.5 sm:mt-0">
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                      className="items-center  justify-center  px-11 py-2.5 text-center text-white duration-200 bg-green-600  border-gray-900 rounded-full inline-flex  hover:bg-gray-500 hover:scale-95 hover:text-white  text-sm "
                    >
                      Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Payment />
          </div>
        )}
      </div>
      {/* review part */}
      <div className="lg:my-10 flex-1">
        <div className="flex  items-center gap-1">
          <div className="avatar">
            <div className="w-14 p-2">
              {profileInfo?.photoURL ? (
                <img
                  className="rounded-full border-2 border-black"
                  src={profileInfo?.photoURL}
                />
              ) : (
                <div className="text-3xl ">
                  <FaRegUserCircle />
                </div>
              )}
            </div>
          </div>
          <label className=" flex-1 input input-bordered flex items-center gap-2">
            <input
              value={review}
              onChange={(e) => setReview(e.target.value)}
              type="text"
              className="grow"
              placeholder="Give Review"
            />
            <button onClick={handleReview}>
              <FaLocationArrow />
            </button>
          </label>
        </div>

        <p className="text-center text-gray-500 text-xl py-2">Reviews</p>

        {reviews.map((data) => (
          <div key={data._id} className="flex  items-center gap-1">
            <div className="avatar">
              <div className="w-14 p-2">
                {data?.user_photoURL ? (
                  <img
                    className="rounded-full border-2 border-black"
                    src={data.user_photoURL}
                  />
                ) : (
                  <div className="text-3xl ">
                    <FaRegUserCircle />
                  </div>
                )}
              </div>
            </div>
            <label className=" relative flex-1 min-w-48 input input-bordered  items-center ">
              {/* <button
                onClick={() => handleDelete(data._id)}
                className="text-red-700 absolute right-0 btn-circle"
              >
                ✕
              </button> */}
              <h1 className="text-sm text-gray-500">{data.user_name}</h1>
              <h1>{data.review}</h1>
              {/* <h1 className="text-sm text-gray-500">{data.time}</h1> */}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
