/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaRegCircleUser } from "react-icons/fa6";

const Modal = ({ modalData }) => {
  const queryClient = useQueryClient();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const addNote = {
      note: data.note,
      email: modalData?.email,
    };
    axiosPublic.post("/api/users/notes", addNote).then((res) => {
      if (res.data?.insertedId) {
        console.log(res.data);
        queryClient.invalidateQueries([]);
        toast.success("added notes");
      }
    });
  };
  const { isLoading: loading, data: notes = [] } = useQuery({
    queryKey: ["notes", modalData?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/api/users/notes?email=${modalData?.email}`
      );
      return res.data;
    },
  });
  console.log(notes);
  return (
    <dialog
      id="my_modal_1"
      className="relative bg-gray-50 rounded-lg border-[1px] border-gray-400 py-8 px-5 w-3/5 h-[380px]"
    >
      <div className="">
        <span className="flex items-center mb-3">
          {modalData?.photoURL ? (
            <div className="flex items-center">
              <img
                className="w-[40px] h-[40px] rounded-full border-4 border-purple-400 mr-3"
                src={modalData?.photoURL}
                alt=""
              />
              <p className="mr-3">{modalData?.firstName}</p>
              <hr className="border-l-0 border-gray-400 border-2 h-[20px] mx-3" />
            </div>
          ) : (
            <FaRegCircleUser className="w-[40px] h-[40px] rounded-full mr-3" />
          )}
          <p className="py-4 text-gray-600 text-sm">{modalData?.email}</p>
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("note")}
            className="w-full textarea textarea-success"
            placeholder="add note"
          ></textarea>
          <br />
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="mt-1 text-md border-[1px] border-blue-300 rounded-lg hover:bg-purple-400 hover:text-white  px-8 py-2"
            >
              Add
            </button>
          </div>
        </form>
        <p>Notes:</p>
        {notes.length == 0 ? (
          <>
            <p className="text-gray-500  text-2xl font-medium p-4 flex items-center justify-center">
              No notes added
            </p>
          </>
        ) : (
          <>
            {notes?.map((note) => (
              <div
                key={note._id}
                className="mt-5 w-full border-[1px] bg-gray-200 border-gray-200 rounded-lg"
              >
                <p className="text-gray-600 font-medium p-4">{note?.note}</p>
              </div>
            ))}
          </>
        )}

        <div className="modal-action">
          <form method="dialog">
            <button className="absolute text-3xl top-[20px] hover:text-red-400 right-[18px] text-gray-400">
              <IoMdCloseCircleOutline />
            </button>
          </form>
        </div>
        <textarea
          readOnly
          placeholder={modalData?.note}
          className="w-full textarea textarea-bordered"
        ></textarea>
      </div>
    </dialog>
  );
};

export default Modal;
