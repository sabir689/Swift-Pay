import Login from "../pages/authentication/Login";
import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/authentication/Registration";
 import MainLayOut from "../Components/Layout/MainLayOut";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
          path:'/regitation',
          element: <Register/>
        },
        {
          path: '/login',
          element: <Login/>
        }
      ]
    },
  ]);