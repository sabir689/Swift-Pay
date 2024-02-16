import "./ReviewCard.css";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

const SellerProfile = () => {
  const seller = useLoaderData();
  const { email } = useParams();
  const [showData, setShowData] = useState([]);
  const [review, setReview] = useState("");
  const axiosPublic = useAxiosPublic();
  const [profileInfo] = useUser();
  console.log(profileInfo);

  useEffect(() => {
    const sellerProfile = seller.filter((profile) => profile?.email === email);
    const [profile] = sellerProfile;
    setShowData(profile);
  }, [email, seller]);

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", email],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/reviews");
      const sellerReviews = res.data.filter(
        (review) => review.seller_email === email
      );

      return sellerReviews;
    },
  });

  console.log(reviews);

  const dateObject = new Date(Date.now());
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();
  const formattedDateTime = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day} ${hours}:${minutes}:${seconds}`;

  const handleReview = () => {
    const reviewInfo = {
      seller_email: showData?.email,
      user_email: profileInfo.email,
      user_name: profileInfo.name,
      user_photoURL: profileInfo.photoURL,
      review: review,
      time: formattedDateTime,
    };
    axiosPublic.post("/api/reviews", reviewInfo).then((res) => {
      if (res.data.insertedId) {
        toast.success("Thank you for your review");
        refetch();
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
        axiosPublic.delete(`/api/reviews/${_id}`).then((res) => {
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
    <div>
      <div className="grid grid-cols-2">
        {/* seller profile */}

        <div key={showData?._id} className="seller-card">
          <img className="image" src={showData?.photoURL} alt="image" />
          <div className="seller-card-info">
            <span>
              {showData?.firstName} {showData?.lastName}
            </span>
            <p>{showData?.email}</p>
          </div>
        </div>

        {/* review form */}
        <div className="card card-compact w-96 h-64 p-6 rounded-lg border-[1px]">
          <p className="text-center text-xl font-semibold ">Give Review</p>

          <div className="form-control">
            <label className="label text-center">
              <span className="label-text"> </span>
            </label>
            <textarea
              onChange={(e) => setReview(e.target.value)}
              className="textarea textarea-bordered h-24"
              placeholder="write your review here..."
            ></textarea>
            <button
              onClick={handleReview}
              className="btn btn-sm md:btn-md btn-primary mt-4"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      {/* reviews */}
      <h1 className="text-xl font-semibold text-center text-gray-800 my-10">
        Reviews
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {reviews.map((data) => (
          // <div
          //   key={data._id}
          //   className=" relative w-72 h-40 flex flex-col justify-center gap-2 bg-neutral-50 rounded-lg shadow p-2"
          // >
          //   <div className="flex gap-2">
          //     <img
          //       className="bg-neutral-500 w-24 h-24 shrink-0 rounded-lg"
          //       src={data?.user_photoURL}
          //       alt=""
          //     />
          //     <div
          //       onClick={() => handleDelete(data?._id)}
          //       className="absolute top-2 right-2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-blue-400"
          //     >
          //       <MdDelete className="text-2xl text-red-500" />
          //     </div>
          //     <div className="flex flex-col">
          //       <span className="font-bold text-neutral-700 italic">
          //         {data.user_name}
          //       </span>
          //       <span className="font-bold text-neutral-700 italic">
          //         {data.user_email}
          //       </span>
          //       <p className="line-clamp-3">{data.review}</p>
          //     </div>
          //   </div>
          // </div>
          <section key={data._id} className="bg-gray-50 rounded-lg w-full">
            <div className="container px-6 py-10 mx-auto">
              <section className="">
                <div className="p-8 border rounded-lg border-amber-9a00">
                  <p className="leading-loose text-gray-800  h-[90px]">
                    <span>&quot;{data?.review}&quot;</span>
                  </p>

                  <div className="flex items-center mt-8 h-[150px]">
                    <img
                      className="object-cover mx-2 rounded-full w-10 shrink-0 h-10 ring-2 ring-gray-300 dark:ring-gray-700"
                      src={data?.user_photoURL}
                      alt=""
                    />

                    <div className="mx-2">
                      <h1 className="font-semibold text-gray-800">
                        {data?.user_name}
                      </h1>
                      <span className="text-sm text-gray-500">
                        {data?.user_email}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SellerProfile;
