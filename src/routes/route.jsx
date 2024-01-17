import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Registration";
 import MainLayOut from '../Layout/MainLayOut';
import ForgottenPass from "../pages/authentication/ForgottenPass";
import Contact from '../pages/contact/Contacts'
import Home from "../pages/home/Home";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path:'/regitation',
          element: <Register/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/reset-your-password',
          element: <ForgottenPass/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
       
       
      ]
    },
  ]);