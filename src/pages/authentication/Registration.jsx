import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiEyeSlash, PiEye } from "react-icons/pi";
import { Helmet } from "react-helmet-async";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import PageBanner from "../../Components/Shared/PageBanner";
const Register = () => {
  const { loading, createUser, updateUserProfile, setLoading } = UseAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const validation = {
    capital: /[A-Z]/,
    spacelSymble: /[\W_]+/,
    number: /\d/,
  };
  const registration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    setRegistrationError("");
    if (password.length < 6) {
      setRegistrationError("password must be at least 6 characters long.");
      return;
    } else if (!validation.capital.test(password)) {
      setRegistrationError("At least one uppercase letter");
      return;
    } else if (!validation.spacelSymble.test(password)) {
      setRegistrationError("At least one special character");
      return;
    } else if (!validation.number.test(password)) {
      setRegistrationError("Password at least one number.");
      return;
    }
    createUser(email, password)
      .then(() => {
        updateUserProfile(name).then(() => {
          toast.success("Account created successfully!");
          return;
        });
      })
      .catch((error) => {
        toast.error(error.message.slice(22, 42) + ".");
        setLoading(false);
        return;
      });
  };
  return (
    <div>
      <div className="bg-section flex justify-center items-center h-screen">
        <Helmet>
          <title> Registration </title>
        </Helmet>
        <div className="container md:w-10/12/ w-[450px] mx-auto px-4">
          <div className="bg-white px-10 py-10 rounded-lg">
            <h1 className="text-3xl font-semibold text-[#212427] mb-1 block">
              Create an account
            </h1>
            <h1 className="text-md font-normal text-neutral-600 ">
              Already have an account?
              <Link
                to="/login"
                className="text-sm hover:underline text-cyan-500  duration-300 ml-1 font-normal text-primery inline-block"
              >
                Login
              </Link>
            </h1>
            <form onSubmit={registration}>
              <div className="flex flex-col md:flex-row gap-3 mt-5">
                <div className="flex-1">
                  {/* <label className="text-base font-normal text-neutral-600 mb-1 ml-1 mt-3 block">
                    First Name
                  </label> */}
                  <input
                    className="focus:border-[#49108B]  text-base placeholder:text-textColor placeholder:text-sm bg-sectionbg rounded-lg border-2 duration-300 focus:bg-white focus:shadow-sm outline-none py-3 px-3 w-full bg-gray-200"
                    placeholder="First name"
                    name="name"
                    type="text"
                  />
                </div>

                <div className="flex-1">
                  {/* <label className="text-base font-normal text-neutral-600 mb-1 ml-1 mt-3 block">
                    Last Name
                  </label> */}
                  <input
                    className="focus:border-[#49108B] text-base placeholder:text-textColor placeholder:text-sm bg-sectionbg rounded-lg border-2 duration-300 focus:bg-white focus:shadow-sm outline-none py-3 px-3 w-full bg-gray-200"
                    placeholder="Last name"
                    name="name"
                    type="text"
                  />
                </div>
              </div>

              <label className="text-sm font-normal text-neutral-600 mb-1 ml-1 mt-3 block">
                Gmail
              </label>
              <input
                className="text-sm  focus:border-[#49108B]  placeholder:text-sm placeholder:text-textColor bg-sectionbg rounded-lg border-2 duration-300 focus:bg-white focus:shadow-sm outline-none py-3 px-3 w-full"
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
                  className="focus:border-[#49108B] text-sm placeholder:text-sm placeholder:text-textColor bg-sectionbg rounded-lg border-2 duration-300 focus:bg-white focus:shadow-sm  outline-none py-3 px-3 w-full"
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <span
                  className="absolute top-[12px] right-5  text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <PiEye> </PiEye> : <PiEyeSlash> </PiEyeSlash>}
                </span>
              </div>

              <div>
                {registrationError && (
                  <p className="text-lg text-red-400 font-normal">
                    {" "}
                    {registrationError}{" "}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="text-base font-medium px-10 py-[10px] bg-[#49108B] rounded-md text-white mt-5 w-full inline-block duration-300"
              >
                {loading ? (
                  <ImSpinner9 className="animate-spin text-center inline-block" />
                ) : (
                  "Create account"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
