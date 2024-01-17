import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/Layout/MainLAyOut.jsx";
import Contacts from "./Components/Pages/Contacts.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "contact",
        element: <Contacts/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
