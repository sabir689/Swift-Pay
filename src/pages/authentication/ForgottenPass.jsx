import React from 'react'

import { Helmet } from "react-helmet-async"

const ForgottenPass = () => {

  const forgotePass = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
  }

  return (
    <div className='bg-sectionbg py-14'>
    <Helmet>
      <title> Forgotten password </title>
    </Helmet>
    <div className='container md:w-10/12/ lg:w-2/4 mx-auto px-4'>
      <div className='bg-white px-6 py-10 rounded-lg'>
        <h1 className='text-2xl font-medium text-black1 mb-5'>Password Recovery Center</h1>
        <form onSubmit={forgotePass}>
          <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Your Account Gmail</label>
          <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='gmail' name='email' type='email' required />
         
          <input type="submit" value="Send Code" className='text-lg px-10 py-[14px] bg-neutral-300 rounded-lg text-black mt-5 w-full inline-block duration-300' />
          
        </form>
      </div>
    </div>
  </div>
  )
}

export default ForgottenPass