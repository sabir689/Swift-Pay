/* eslint-disable react/prop-types */
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useState } from "react";

const Modal = ({ modalData, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const [note, setNote] = useState("");
  console.log(modalData);

  const handleAddNote = () => {
    const noteInfo = {
      note,
    };
    axiosPublic
      .patch(`/api/users/note/${modalData?._id}`, noteInfo)
      .then((res) => {
        console.log(res.data);
        toast.success("Note Added");
        refetch();
      });
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="space-y-5 modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <p className="font-bold text-lg text-center">NOTES</p>
        <textarea
          onChange={(e) => setNote(e.target.value)}
          className="w-full py-5 textarea textarea-bordered"
          placeholder="write your notes here..."
        ></textarea>
        <div className="modal-action">
          <form method="dialog">
            <button onClick={handleAddNote} className=" button">
              ADD
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
