import React from 'react'
import { Helmet } from "react-helmet-async"
import UseAuth from '../../hooks/UseAuth'
import { ImSpinner9 } from "react-icons/im";
import toast from 'react-hot-toast';


const ForgottenPass = () => {
  const { loading, resetPassword, setLoading } = UseAuth()

  const forgotePass = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    resetPassword(email)
    .then(()=>{
      toast((t,) => (
        
        <span>
          <p className='text-base font-normal'>Password reset initiated successfully. Please check your Gmail account {email}</p>
        <div className='flex item-center justify-center items-center'>
        <button className='text-base px-6 py-2 bg-neutral-300 rounded-md text-black mt-1  text-center duration-300' onClick={() =>{
            window.open('https://mail.google.com', '_blank');
            toast.dismiss(t.id);
            return;
          }}>
            Go to gmail
          </button>

          <button  onClick={()=> toast.dismiss(t.id)
          }
          className='text-base px-6 py-2 bg-neutral-300 rounded-md text-black mt-1  text-center duration-300 ml-3'>Cancel</button>
        </div>
        </span>
         
      ),
      {
        duration: 100000,
      }
      )
      setLoading(false)
      return
    })
    .catch(()=>{
    toast.error(`Unable to send the reset password link to ${email}. Please try again later.`)
    setLoading(false)
    return
    })

  }

  const check=()=>{
 
  }

  return (
    <div className='bg-sectionbg py-14'>
    <Helmet>
      <title> Forgotten password </title>
    </Helmet>
    <button onClick={check} className='bg-red-400'>check</button>
    <div className='container md:w-10/12/ lg:w-2/4 mx-auto px-4'>
      <div className='bg-white px-6 py-10 rounded-lg'>
        <h1 className='text-2xl font-medium text-black1 mb-5'>Password Recovery Center</h1>
        <form onSubmit={forgotePass}>
          <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Your Account Gmail</label>
          <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='gmail' name='email' type='email' required />
         
          <button type="submit"
          className='text-lg px-10 py-[14px] bg-neutral-300 rounded-lg text-black mt-5 w-full inline-block duration-300'>
            {
              loading?<ImSpinner9 className="animate-spin text-center inline-block"/> : "Send Code"
            }
          </button>
          
        </form>
      </div>
    </div>
  </div>
  )
}

export default ForgottenPass