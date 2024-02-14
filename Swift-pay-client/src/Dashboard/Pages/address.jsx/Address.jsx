import React, { useContext } from 'react'
import { AuthContext } from '../../../provider/AuthProvider'
import { FiEdit } from "react-icons/fi";
const Address = () => {
    const { user } = useContext(AuthContext)
    const fullName = user.displayName
    const findSpace = fullName.indexOf(' ')
    const firstName = fullName.slice(0, findSpace)
    const lastName = fullName.slice(findSpace)
    const handleAddress = (e) => {
        e.preventDefault()
        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const companyName = form.companyName.value
        const country= form.country.value
        const streetAddress = form.streetAddress.value
        const town = form.town.value
        const district = form.district.value
        const postCode = form.postCode.value
        const number = form.number.value
        const email = form.email.value
        const userInfo={firstName, lastName, companyName, streetAddress, country, town, district, postCode, number, email}
        console.log(userInfo);
    }
    
   

    return (
        <div className='mt-10 px-5 max-w-3xl mx-auto'>
           <div className='border-b border-neutral-300 pb-2 mb-4 flex items-center justify-between gap-10'>
           <h1 className='text-xl font-medium text-neutral-700  '>Billing address</h1>
           <div onClick={()=> handleEdit(true)}>
            <FiEdit className='text-2xl text-neutral-600 cursor-pointer'> </FiEdit>
           </div>
           </div>
            <div>
                <form onSubmit={handleAddress}>
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
                                defaultValue={firstName}
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
                                defaultValue={lastName}
                                required
                            />
                        </div>
                    </div>

                    {/* Company and country */}
                    <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
                        <div className='flex-1'>
                            <label className="mb-1 text-base font-normal inline-block text-gray-500">
                                Company name (optional)

                            </label>
                            <input
                                name='companyName'
                                className="text-base rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none"
                                type="text"
                                placeholder="Company name"

                            />
                        </div>

                        <div className='flex-1'>
                            <label className="mb-1 text-base font-normal inline-block text-gray-500">
                                Country / Region
                                <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input
                                name='country'
                                className="text-base rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none "
                                type="text"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>

                    {/* state and address */}
                    <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
                        <div className='flex-1'>
                            <label className="mb-1 text-base font-normal inline-block text-gray-500">
                                Street address
                                <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input
                                name='streetAddress'
                                className="text-base rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none"
                                type="text"
                                placeholder="Street address"

                            />
                        </div>

                        <div className='flex-1'>
                            <label className="mb-1 text-base font-normal inline-block text-gray-500">
                                Town / City
                                <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input
                                name='town'
                                className="text-base rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none "
                                type="townCity"
                                placeholder="Town / City"
                                required
                            />
                        </div>
                    </div>

                    {/* District and post code */}
                    <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
                        <div className='flex-1'>
                            <label className="mb-1 text-base font-normal inline-block text-gray-500">
                                District
                                <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input
                                name='district'
                                className="text-base rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none"
                                type="text"
                                placeholder="District"
                            />
                        </div>

                        <div className='flex-1'>
                            <label className="mb-1 text-base font-normal inline-block text-gray-500">
                                Postcode / ZIP (optional)
                                {/* <span className='text-[#FF0000]'>*</span> */}
                            </label>
                            <input
                                name='postCode'
                                className="text-base rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none "
                                type="townCity"
                                placeholder="Postcode / ZIP"
                            />
                        </div>
                    </div>

                    {/* District and post code */}
                    <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
                        <div className='flex-1'>
                            <label className="mb-1 text-base font-normal inline-block text-gray-500">
                                Phone Number
                                <span className='text-[#FF0000]'>*</span>
                            </label>
                            <input
                                name='number'
                                className="text-base rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none"
                                type="text"
                                placeholder="Phone Number"
                                required
                            />
                        </div>

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
        </div>
    )
}

export default Address