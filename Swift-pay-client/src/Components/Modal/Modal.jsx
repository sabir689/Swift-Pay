const Modal = ({ closeModal }) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal" open>
        <div className="modal-box">
          <h3 className="font-md text-lg">Leave a note</h3>
          {/* <p className="py-4">{profile?.email}</p> */}
          <div className="modal-action">
            <button onClick={closeModal} className="btn">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
