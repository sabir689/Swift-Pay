import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  Swal.fire({
    title:
      "<span style='color: rgb(60, 88, 202)'>Transaction Successful!</span>",
    html: ` <span style='background-color: rgb(227, 230, 233); padding: 4px; border-radius: 4px; color: black;'>Transaction ID: ${tranId}</span>`,
    imageUrl: "https://i.ibb.co/XzfYZTw/success-56.png",
    imageWidth: 150,
  });
  return (
    <div className="max-w-screen-lg mx-auto">
      <h3 className="text-2xl mt-16">Payment Success: {tranId}</h3>
      <Link to="/transactionDetails">
        <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          <span className="mx-1">Transaction Details</span>
          <svg
            className="w-5 h-5 mx-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6 5a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06-1.06L11.189 11 6 5.81A.75.75 0 0 1 6 5z" />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
