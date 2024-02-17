import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://swift-pay-server.vercel.app",
  // baseURL: "http://localhost:5000",
});
export default axiosSecure;
