import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://swift-pay-server.vercel.app",
});
export default axiosSecure;
