import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiEyeSlash, PiEye } from 'react-icons/pi'
import { Helmet } from "react-helmet-async"
import UseAuth from '../../hooks/UseAuth'
import toast from 'react-hot-toast'
import { ImSpinner9 } from "react-icons/im";

const Register = () => {
  const { loading, createUser, updateUserProfile, setLoading } = UseAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [registrationError, setRegistrationError] = useState('')
  const validation = {
    'capital': /[A-Z]/,
    'spacelSymble': /[\W_]+/,
    'number': /\d/
  };
  const registration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value
    const confirmPassword = form.confirmPassword.value
    setRegistrationError('')
    if (password.length < 6) {
      setRegistrationError('password must be at least 6 characters long.')
      return
    }
    else if (password !== confirmPassword) {
      setRegistrationError('Password and confirm password do not match.')
      return
    }
    else if (!validation.capital.test(password)) {
      setRegistrationError('At least one uppercase letter')
      return
    } else if (!validation.spacelSymble.test(password)) {
      setRegistrationError('At least one special character')
      return
    } else if (!validation.number.test(password)) {
      setRegistrationError('Password at least one number.')
      return
    }
    createUser(email, password)
      .then(() => {
        updateUserProfile(name)
          .then(() => {
            toast.success('Account created successfully!')
            return
          })
      })
      .catch((error) => {
        toast.error(error.message.slice(22, 42) + '.')
        setLoading(false)
        return
      })
  }

  return (
    <div className='bg-sectionbg py-14'>
      <Helmet>
        <title> Regitation </title>
      </Helmet>
      <div className='container md:w-10/12/ lg:w-2/4 mx-auto px-4'>
        <div className='bg-white px-6 py-10 rounded-lg'>
          <h1 className='text-2xl font-medium text-black1 mb-5'>Create your Account</h1>
          <form onSubmit={registration}>
            <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Full Name</label>
            <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Name' name='name' type='text' />

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
            <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-4 block'>Confirm Password</label>
            <div className='h-16 relative'>
              <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='write same password' name='confirmPassword' type={showPassword ? 'text' : 'password'} required />
            </div>
            <div>
              {
                registrationError && <p className='text-lg text-red-400 font-normal'> {registrationError} </p>
              }
            </div>
            
            <button type="submit"
          className='text-lg px-10 py-[14px] bg-neutral-300 rounded-lg text-black mt-5 w-full inline-block duration-300'>
            {
              loading?<ImSpinner9 className="animate-spin text-center inline-block"/> : "Register"
            }
          </button>


            <h1 className='text-center text-lg font-normal text-black1  my-3'>Already have an account?
              <Link to='/login' className='text-lg hover:underline hover:text-hover duration-300 ml-2 font-normal text-primery inline-block'>Login</Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Register