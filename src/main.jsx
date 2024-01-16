import React from "react";
import ReactDOM from "react-dom/client";
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
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/Layout/MainLAyOut.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
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
