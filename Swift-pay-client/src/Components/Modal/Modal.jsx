/* eslint-disable react/prop-types */
const Modal = ({ modalData }) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <p className="py-4">{modalData?.email}</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
