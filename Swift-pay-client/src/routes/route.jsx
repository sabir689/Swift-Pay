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
import SendMoney from "../Dashboard/SendMoney";
import ReceiveMoney from "../Dashboard/ReceiveMoney";
import PrivateRoute from "./PrivateRoute";
import MyDashboard from "../Dashboard/MyDashboard";
import Transactions from "../Dashboard/Transactions";
import Test2Dashboard from "../Dashboard/Test2Dashboard";
import SellPost from "../Dashboard/SellPost";
import Market from "../Dashboard/Market";
import Saved from "../Dashboard/Saved";
import Details from "../Components/Shared/Details";
import Branded from "../Dashboard/Branded/Branded";
import Products from "../Dashboard/myProducts/Products";
import EditProduct from "../Dashboard/myProducts/EditProduct";
import AddBrand from "../Dashboard/Branded/AddBrand";
import AllUsers from "../Admin/Dashboard pages/AllUsers";
import Customers from "../pages/home/Customers";
import PaymentSuccess from "../Dashboard/Payment/PaymentSuccess";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
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
        path: "sendMoney",
        element: <SendMoney></SendMoney>,
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
        path: "transactions",
        element: <Transactions></Transactions>,
      },
      {
        path: "sellPost",
        element: <SellPost></SellPost>,
      },
      {
        path: "market",
        element: <Market></Market>,
      },
      {
        path: "branded",
        element: <Branded></Branded>,
      },
      {
        path: "addBrand",
        element: <AddBrand></AddBrand>,
      },
      {
        path: "saved",
        element: <Saved></Saved>,
      },
      // my products page
      {
        path: "my-products",
        element: <Products />,
      },
      {
        path: "productedit/:id",
        element: <EditProduct />,
      },
      {
        path: "details/:id",
        element: <Details></Details>,
        loader: () => fetch(`https://swift-pay-server.vercel.app/api/products`),
      },
      {
        path: "addBrand",
        element: <AddBrand></AddBrand>,
      },
      // admin
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
