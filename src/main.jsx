import React from "react";
import ReactDOM from "react-dom/client";
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
  </React.StrictMode>
);
