import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiEyeSlash, PiEye } from 'react-icons/pi'
import { Helmet } from "react-helmet-async"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const registration = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value

  }

  return (
    <div className='bg-sectionbg py-14'>
    <Helmet>
      <title> Login </title>
    </Helmet>
    <div className='container md:w-10/12/ lg:w-2/4 mx-auto px-4'>
      <div className='bg-white px-6 py-2 rounded-lg'>
        <h1 className='text-2xl font-medium text-black1 mb-5'>Login Your Account</h1>
        <form onSubmit={registration}>
          <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Gmail</label>
          <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='gmail' name='email' type='email' required />

          <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-4 block'>Password</label>
          <div className='h-16 relative'>
            <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Password' name='password' type={showPassword ? 'text' : 'password'} required />
            <span className='absolute top-4 right-5 text-2xl' onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword ? <PiEye> </PiEye> : <PiEyeSlash> </PiEyeSlash>
              }
            </span>
          </div>
          <Link to='/reset-your-password' className='text-base font-normal text-black1 mb-1 ml-1 mt-0 hover:text-red-400 block'>Forgotten password? </Link>
          <input type="submit" value="Login" className='text-lg px-10 py-[14px] bg-neutral-300 rounded-lg text-black mt-5 w-full inline-block duration-300' />
          <h1 className='text-center text-lg font-normal text-black1  my-3'> Don't you have an account?
            <Link to='/regitation' className='text-lg hover:underline hover:text-hover duration-300 ml-2 font-normal text-primery inline-block'>Registration</Link>
          </h1>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login