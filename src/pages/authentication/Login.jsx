import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiEyeSlash, PiEye } from 'react-icons/pi'
import { Helmet } from "react-helmet-async"
import UseAuth from '../../hooks/UseAuth'
import { ImSpinner9 } from "react-icons/im";
import toast from 'react-hot-toast'
import PageBanner from '../../Components/Shared/PageBanner'
const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { loading, signIn, setLoading } = UseAuth()
  const registration = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value
    signIn(email, password)
      .then(() => {
        toast.success('Login successful. Redirecting to the account page')
        return
      })
      .catch((error) => {
        toast.error('Invalid gmail, Please check your credentials')
        setLoading(false)
        return
      })
  }
  return (
    <div>
      <PageBanner lable='Login Your Account' />
      <div className='bg-sectionbg py-14'>
        <Helmet>
          <title> Login </title>
        </Helmet>
        <div className='container md:w-10/12/ lg:w-2/4 mx-auto px-4'>
          <div className='bg-white px-6 py-2 rounded-lg'>
            <h1 className='text-3xl font-semibold text-black mb-1 ml-1 mt-5 block'>Log In</h1>
            <h1 className=' text-lg font-normal text-neutral-600 '> New to Swift Pay?
              <Link to='/regitation' className='text-lg hover:underline text-cyan-500  duration-300 ml-2 font-normal text-primery inline-block'>Create an account</Link>
            </h1>
            <form onSubmit={registration}>
              <label className='text-base font-normal text-neutral-600 mb-1 ml-1 mt-5 block'>Gmail</label>
              <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-3 w-full' placeholder='gmail' name='email' type='email' required />

              <label className='text-base font-normal text-neutral-600 mb-1 ml-1 mt-4 block'>Password</label>
              <div className='h-14 relative'>
                <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-3 w-full' placeholder='Password' name='password' type={showPassword ? 'text' : 'password'} required />
                <span className='absolute top-4 right-5 text-2xl' onClick={() => setShowPassword(!showPassword)}>
                  {
                    showPassword ? <PiEye> </PiEye> : <PiEyeSlash> </PiEyeSlash>
                  }
                </span>
              </div>
              <Link to='/reset-your-password' className='text-base font-normal text-neutral ml-1 hover:text-cyan-500 block'>Forgotten password? </Link>
              <button type="submit"
                className='text-lg font-medium px-10 py-[14px] bg-neutral-300 rounded-lg text-black mt-5 w-full inline-block duration-300'>
                {
                  loading ? <ImSpinner9 className="animate-spin text-center inline-block" /> : "Login"
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login