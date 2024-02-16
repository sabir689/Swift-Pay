/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const Modal = ({ modalData }) => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const addNote = {
      note: data.note,
    };
    axiosPublic.patch(`/api/users/${modalData?._id}`, addNote).then((res) => {
      console.log(res.data);
      toast.success("Updated Profile");
    });
  };
  //   const { data: profile = [] } = useQuery({
  //     queryKey: ["profile"],
  //     queryFn: async () => {
  //       const res = await axiosPublic.get(`/api/users/${modalData?.email}`);
  //       return res.data;
  //     },
  //   });
  return (
    <dialog
      id="my_modal_1"
      className="bg-gray-50 rounded-lg border-[1px] border-gray-400 py-8 px-5"
    >
      <div className="relative">
        <p className="py-4 text-gray-600 text-sm">{modalData?.email}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("note")}
            className="textarea textarea-success"
            placeholder="add note"
          ></textarea>
          <br />
          <button
            type="submit"
            className="mt-1 border-[1px] border-blue-300 rounded-lg hover:bg-blue-400 hover:text-white  px-4 py-1"
          >
            Add
          </button>
        </form>
        <div>
          <p className="text-gray-700">{modalData?.note}</p>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="absolute text-2xl bottom-[190px]  left-[173px] text-gray-400">
              <IoMdCloseCircleOutline />
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
