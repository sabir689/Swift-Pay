/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiEyeSlash, PiEye } from "react-icons/pi";
import { Helmet } from "react-helmet-async";
import UseAuth from "../../hooks/UseAuth";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";

import SocialLogin from "./SocialLogin";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, signIn, setLoading } = UseAuth();
  const navigate = useNavigate();
  const registration = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        toast.success("Login successful. Redirecting to the account page");
        navigate("/dashboard/market");

        return;
      })
      .catch((error) => {
        toast.error("Invalid gmail, Please check your credentials");
        setLoading(false);
        return;
      });
  };
  return (
    <div>
      <div className="bg-section flex justify-center items-center h-screen">
        <Helmet>
          <title> Login </title>
        </Helmet>
        <div className="container  md:w-10/12/ lg:w-96 mx-auto px-4 border-[1px] border-gray-200 rounded-md">
          <div className="bg-white px-9 pt-8 pb-9 rounded-lg">
            <h1 className="text-3xl text-center font-semibold text-[#212427] mb-1  mt-5 block">
              Log in
            </h1>
            <h1 className="text-md font-normal mr-1 text-neutral-600 ">
              {" "}
              New to Swift Pay?
              <Link
                to="/registration"
                className="text-sm  hover:underline text-cyan-500  duration-300 font-normal text-primery inline-block"
              >
                Create an account
              </Link>
            </h1>
            <SocialLogin />
            <form onSubmit={registration}>
              <label className="text-sm font-normal text-neutral-600 mb-1 ml-1 mt-5 block">
                Gmail
              </label>
              <input
                className="text-sm placeholder:text-textColor bg-sectionbg rounded-lg border-2 duration-300 focus:bg-white focus:shadow-sm bg-gray-200 focus:border-[#49108B] outline-none py-3 px-3 w-full placeholder:text-sm"
                placeholder="gmail"
                name="email"
                type="email"
                required
              />

              <label className="text-sm font-normal text-neutral-600 mb-1 ml-1 mt-4 block">
                Password
              </label>
              <div className="h-14 relative">
                <input
                  className="text-sm placeholder:text-textColor bg-sectionbg rounded-lg border-2 duration-300 focus:bg-white focus:shadow-sm bg-gray-200 focus:border-[#49108B] outline-none py-3 px-3 w-full placeholder:text-sm"
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <span
                  className="absolute top-3 right-5 text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <PiEye> </PiEye> : <PiEyeSlash> </PiEyeSlash>}
                </span>
              </div>
              <Link
                to="/reset-your-password"
                className="text-sm font-normal text-[#49108B] hover:text-cyan-500 block"
              >
                Forgotten password?{" "}
              </Link>
              <button
                type="submit"
                className="text-base font-medium px-10 py-[10px] bg-[#49108B] rounded-md text-white mt-5 w-full inline-block duration-300"
              >
                {loading ? (
                  <ImSpinner9 className="animate-spin text-center inline-block" />
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
