import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiEyeSlash, PiEye } from "react-icons/pi";
import { Helmet } from "react-helmet-async";
import UseAuth from "../../hooks/UseAuth";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";
import PageBanner from "../../Components/Shared/PageBanner";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, signIn, setLoading } = UseAuth();
  const registration = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        toast.success("Login successful. Redirecting to the account page");
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
      <PageBanner lable="Login Your Account" />
      <div className="bg-sectionbg my-14">
        <Helmet>
          <title> Login </title>
        </Helmet>
        <div className="container md:w-10/12/ lg:w-96 mx-auto px-4">
          <div className="bg-white px-9 pt-8 pb-9 rounded-lg">
            <h1 className="text-3xl font-semibold text-[#212427] mb-1  mt-5 block">
              Log in
            </h1>
            <h1 className="text-md font-normal text-neutral-600 ">
              {" "}
              New to Swift Pay?
              <Link
                to="/regitation"
                className="text-sm ml-2 hover:underline text-cyan-500  duration-300 font-normal text-primery inline-block"
              >
                Create an account
              </Link>
            </h1>
            <form onSubmit={registration}>
              <label className="text-sm font-normal text-neutral-600 mb-1 ml-1 mt-5 block">
                Gmail
              </label>
              <input
                className="text-sm placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm bg-gray-200 focus:border-[#49108B] outline-none py-3 px-3 w-full placeholder:text-sm"
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
                  className="text-sm placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm bg-gray-200 focus:border-[#49108B] outline-none py-3 px-3 w-full placeholder:text-sm"
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <span
                  className="absolute top-3 right-5 text-2xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <PiEye> </PiEye> : <PiEyeSlash> </PiEyeSlash>}
                </span>
              </div>
              <Link
                to="/reset-your-password"
                className="text-sm font-normal text-neutral hover:text-cyan-500 block"
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
