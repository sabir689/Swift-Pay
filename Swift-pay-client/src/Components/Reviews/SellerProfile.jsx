import "./SellerProfile.css";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const SellerProfile = () => {
  const [profileInfo] = useUser();
  const seller = useLoaderData();
  const { email } = useParams();
  const [showData, setShowData] = useState([]);
  const [review, setReview] = useState("");
  const axiosPublic = useAxiosPublic();

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
      <div className=" flex justify-center">
        <div key={showData?._id} className="seller-card">
          <img className="image" src={showData?.photoURL} alt="" />
          <div className="seller-card-info">
            <span>
              {showData?.firstName} {showData?.lastName}
            </span>
            <p>{showData?.email}</p>
          </div>
          <div className="flex gap-5">
            <button className="button">Follow</button>
            <button
              onClick={() => {
                window.document.getElementById("my_modal_1").showModal();
              }}
              className="button"
            >
              Review
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="space-y-5 modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <p className="font-bold text-lg text-center">Give Review</p>
                <textarea
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full py-5 textarea textarea-bordered"
                  placeholder="write your review here..."
                ></textarea>
                <div className="modal-action">
                  <form method="dialog">
                    <button onClick={handleReview} className="button">
                      submit{" "}
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>

      <hr />

      {reviews.length == 0 ? (
        <>
          <div className="h-[50vh] text-4xl text-gray-400 font-bold flex items-center justify-center">
            No Reviews
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {reviews.map((data) => (
              <section key={data._id} className="bg-gray-50 rounded-lg w-full">
                <div className=" relative container px-6 py-10 mx-auto">
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="text-red-700 absolute right-6 btn-circle"
                  >
                    ✕
                  </button>

                  <div className="p-6 border rounded-lg border-amber-9a00">
                    <p className="leading-loose text-gray-800  min-h-[90px]">
                      <span>&quot;{data?.review}&quot;</span>
                    </p>

                    <div className="flex items-center mt-6 ">
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
                        <p className="text-sm">{data.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SellerProfile;
