import React from 'react'

const UpdateProfile = ({user}) => {
    const handleProfile = (e) => {

    }
  return (
    <div>
         <form onSubmit={handleProfile}>
                    {/* First and Last Name */}
                    <div className="w-full flex flex-col md:flex-row gap-4">
                        <div className='flex-1'>
                            <label className="mb-1 text-base font-normal inline-block text-gray-500">
                                First Name <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input
                                name='firstName'
                                className="text-base rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none"
                                type="text"
                                placeholder="First Name"
                                defaultValue={user.firstName}
                                required
                            />
                        </div>

                        <div className='flex-1'>
                            <label className="mb-1 text-base font-normal inline-block text-gray-500">
                                Last Name <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input
                                name='lastName'
                                className="text-base rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none "
                                type="text"
                                placeholder="Last Name"
                                defaultValue={user.lastName}
                                required
                            />
                        </div>
                    </div>



                    {/* District and post code */}
                    <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
                    <div className='flex-1'>
                            <label className="mb-1 text-base font-normal inline-block text-gray-500">
                                Email address
                                <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input
                                name='email'
                                className="text-base rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none "
                                type="text"
                                placeholder="Email addres"
                            defaultValue={user?.email}
                            />
                        </div>
                        
                        <div className='flex-1'>
                            <label className="mb-1 text-base font-normal inline-block text-gray-500">
                                Address
                                <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input
                                name='number'
                                className="text-base rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none"
                                type="text"
                                placeholder="Address"
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <button type="submit"
                            className=" px-11 py-3 text-center text-white duration-300 bg-purple-600  border-gray-900 rounded-full inline-flex  hover:bg-blue-400  hover:text-white  text-xl font-medium "
                        >
                            save Changes
                        </button>
                    </div>
                </form>
    </div>
  )
}

export default UpdateProfile