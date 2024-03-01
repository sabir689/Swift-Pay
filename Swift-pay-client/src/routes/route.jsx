/* eslint-disable react-refresh/only-export-components */
import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Registration";
import MainLayOut from "../Layout/MainLayOut";
import ForgottenPass from "../pages/authentication/ForgottenPass";
import Contact from "../pages/contact/Contacts";
import Home from "../pages/home/Home";
import Business from "../pages/home/Business";
import Help from "../pages/Help/Help";
import Faq from "../pages/FAQ/Faq";
import Blog from "../pages/Blog/Blog";
import Offer from "../pages/home/Offer";
import OffersDetails from "../pages/OffersDetails/OffersDetails";
import NewContact from "../Dashboard/NewContact";

import ReceiveMoney from "../Dashboard/ReceiveMoney";
import PrivateRoute from "./PrivateRoute";
import MyDashboard from "../Dashboard/MyDashboard";
import Transactions from "../Dashboard/Transactions";
import Test2Dashboard from "../Dashboard/Test2Dashboard";
import SellPost from "../Dashboard/SellPost";
import Details from "../Components/Shared/Details";
// import Market from "../Dashboard/Market";
import SellerProfile from "../Components/Reviews/SellerProfile";
// import Branded from "../Dashboard/Branded/Branded";
import EditProduct from "../Dashboard/myProducts/EditProduct";
import AddBrand from "../Dashboard/Branded/AddBrand";
import AllUsers from "../Admin/Dashboard pages/AllUsers";
import PaymentSuccess from "../Dashboard/Payment/PaymentSuccess";

// import Modal from "../Components/Modal/Modal";
import EmailProducts from "../Dashboard/EmailProducts";
import MyProducts from '../Dashboard/myProducts/MyProducts';

import MyProfile from "../Dashboard/Pages/myProfile/MyProfile";
import Address from "../Dashboard/Pages/address.jsx/Address";
import Modal from "../Components/Modal/Modal";
import TransactionDetails from "../Dashboard/Payment/TransactionDetails";
import Messages from "../Dashboard/Message/Messages";

import LiveStream from "../pages/LiveStream/LiveStream";
import RoomPage from "../pages/LiveStream/RoomPage";
import ErrorPage from "../Dashboard/Pages/ErrorPage/ErrorPage";
import BrandOwner from "../Dashboard/Branded/BrandOwner";
import AddProd from "../Dashboard/Branded/AddProd";


const LazyMarket = lazy(() => import("../Dashboard/Market"));
const LazyBranded = lazy(() => import("../Dashboard/Branded/Branded"));
const LazySaved = lazy(() => import("../Dashboard/Saved"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reset-your-password",
        element: <ForgottenPass />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/offersDetails",
        element: <OffersDetails />,
      },
      {
        path: "/payment/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/transactionDetails",
        element: <TransactionDetails></TransactionDetails>,
      },
      
     

      {
        path: "room/:roomId",
        element: <RoomPage></RoomPage>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Test2Dashboard></Test2Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "contact",
        element: <NewContact></NewContact>,
      },
      {
        path: "addProd",
        element: <AddProd></AddProd>
      },

      {
        path: "stream",
        element: <LiveStream></LiveStream>,
      },
      {
        path: "receiveMoney",
        element: <ReceiveMoney></ReceiveMoney>,
      },
      {
        path: "myDashboard",
        element: <MyDashboard></MyDashboard>,
      },
      
      
      {
        path: "transactions",
        element: <Transactions></Transactions>,
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "messages",
        element: <Messages></Messages>
      },
      {
        path: "billing-address",
        element: <Address />,
      },
      
      
      
      {
        path: "sellPost",
        element: <SellPost></SellPost>,
      },
      {
        path: "market",
        element: (
          <React.Suspense fallback="loading....">
            <LazyMarket />
          </React.Suspense>
        ),
      },
      {
        path: "branded",
        element: (
          <React.Suspense fallback="loading....">
            <LazyBranded />
          </React.Suspense>
        ),
      },
      {
        path: "addBrand",
        element: <AddBrand></AddBrand>,
      },
      {
        path: "brandOwner",
        element: <BrandOwner></BrandOwner>
      },
      {
        path: "saved",
        element: (
          <React.Suspense fallback="loading">
            <LazySaved />
          </React.Suspense>
        ),
      },
      {
        path: "transactionHistory",
        element: <TransactionDetails></TransactionDetails>,
      },
      // my products page
      {
        path: "my-products",
        element: <MyProducts />,
      },
      {
        path: "productedit/:id",
        element: <EditProduct />,
      },
      {
        path: "details/:id",
        element: <Details></Details>,
        loader: () => fetch("https://swift-pay-server.vercel.app/api/products"),
      },
      {
        path: "sellerprofile/:email",
        element: <SellerProfile />,
        loader: () => fetch("https://swift-pay-server.vercel.app/api/users"),
      },
      {
        path: "addBrand",
        element: <AddBrand></AddBrand>,
      },
      
      // admin

      {
        path: "emailProducts/:email",
        element: <EmailProducts></EmailProducts>,
        loader: () => fetch("https://swift-pay-server.vercel.app/api/products"),
      },
      {
        path: "addBrand",
        element: <AddBrand></AddBrand>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "modal",
        element: <Modal></Modal>,
      },
    ],
  },
]);
