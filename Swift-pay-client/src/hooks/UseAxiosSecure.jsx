// import { useNavigate } from "react-router-dom";
// import UseAuth from "./UseAuth";
// import axios from "axios";

// const axiosSecure = axios.create({
//   baseURL: "https://swift-pay-server.vercel.app",
// });

// const UseAxiosSecure = () => {
//   const navigate = useNavigate();
//   const { logOut } = UseAuth();
//   axiosSecure.interceptors.request.use(
//     function (config) {
//       const token = localStorage.getItem("access-token");
//       // console.log("req stopeeedddddddddddddd", token);
//       config.headers.authorization = `Bearer ${token}`;
//       return config;
//     },
//     function (error) {
//       // Do something with request error
//       return Promise.reject(error);
//     }
//   );

//   axiosSecure.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     async (error) => {
//       const status = error.response.status;
//       // console.log("status error", status);
//       if (status === 401 || status === 403) {
//         await logOut();
//         navigate("/signIn");
//       }
//       return Promise.reject(error);
//     }
//   );

//   return axiosSecure;
// };

// export default UseAxiosSecure;
