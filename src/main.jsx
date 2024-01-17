import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route.jsx";
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from "./provider/AuthProvider.jsx";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <Toaster/>
      <HelmetProvider>
        <div className="font-poppins">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  
  </React.StrictMode>)