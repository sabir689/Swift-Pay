import { useState } from "react";

/* eslint-disable react/prop-types */
const Modal = () => {
  const [modalData, setModalData] = useState({});
  console.log(modalData);
  const [note, setNote] = useState("");
  return (
    <div>
      
      <dialog id="my_modal_1" className="modal">
        <div className="space-y-5 modal-box">
          <p className="font-bold text-lg text-center">Note Box</p>
          <h3 className="font-bold text-lg">To: {modalData?.email}</h3>
          <textarea
            onChange={(e) => setNote(e.target.value)}
            className="w-full py-5 textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">submit </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
