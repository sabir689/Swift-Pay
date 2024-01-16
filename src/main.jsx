import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
<<<<<<< HEAD
import "./index.css";
import {RouterProvider } from "react-router-dom";
import { router } from "./routes/Route.jsx";
import { HelmetProvider } from 'react-helmet-async';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayOut></MainLayOut>,
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <HelmetProvider>
  <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
  </HelmetProvider>
=======
import App from "./App.jsx";
=======
import MainLayOut from "./Components/Layout/MainLAyOut.jsx";
>>>>>>> be526fa5b8c7d098a2b41ff001272930796a6dc3
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contacts from "./Components/Pages/Contacts.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "contact",
        element: <Contacts />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
>>>>>>> c924bbca189e8aeea7aafbedbda8ac518f370a7f
  </React.StrictMode>
);
