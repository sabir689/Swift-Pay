import React from 'react'

const Address = () => {
    return (
        <div className='mt-10 px-5'>
            <h1 className='text-xl font-medium text-neutral-700 mb-4 border-b border-neutral-300 pb-2'>Billing address</h1>
            <div>
                <form>

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
                                required
                            />
                        </div>
                    </div>
                    
                    {/* Company and country */}
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
                                required
                                id="Email"

                            />
                        </div>
                    </div>



                </form>
            </div>
        </div>
    )
}

export default Address