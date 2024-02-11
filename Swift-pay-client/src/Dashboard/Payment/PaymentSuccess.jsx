import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  Swal.fire({
    title:
      "<span style='color: rgb(60, 88, 202)'>Transaction Successful!</span>",
    html: `<span style='background-color: rgb(227, 230, 233); padding: 4px; border-radius: 4px; color: black;'>Transaction ID: ${tranId}</span>`,
    imageUrl: "https://i.ibb.co/XzfYZTw/success-56.png",
    imageWidth: 150,
  });
  return (
    <div>
      <h3 className="text-2xl mt-16">Payment Success: {tranId}</h3>
    </div>
  );
};

export default PaymentSuccess;
