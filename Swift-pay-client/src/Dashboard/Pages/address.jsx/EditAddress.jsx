import React, { useContext } from 'react'
import { getUpdateAddress } from '../../../apis/GetUpdate'
import toast from 'react-hot-toast'
import { AuthContext } from '../../../provider/AuthProvider'
import UseUserBilling from '../../../apis/UseUserBilling'

const EditAddress = ({setEdit}) => {
    const { user } = useContext(AuthContext)
    const fullName = user.displayName
    const findSpace = fullName.indexOf(' ')
    const firstName = fullName.slice(0, findSpace)
    const lastName = fullName.slice(findSpace)
    const [refetch, isPending, error, data] = UseUserBilling()
    const handleAddress = (e) => {
        e.preventDefault()
        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const companyName = form.companyName.value
        const country = form.country.value
        const streetAddress = form.streetAddress.value
        const town = form.town.value
        const district = form.district.value
        const postCode = form.postCode.value
        const number = form.number.value
        const email = form.email.value
        const userInfo = { firstName, lastName, companyName, streetAddress, country, town, district, postCode, number, email }

        getUpdateAddress(user.email, userInfo)
            .then(() => {
                toast.success('Your billing information has been successfully updated')
                refetch()
                setEdit(false)
                return
            })
            .catch(() => {
                toast.error("Oops! Something went wrong while updating your billing information. ")
            })
    }

    return (
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
                            defaultValue={data?.billing?.firstName? data?.billing?.firstName : firstName}
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
                            defaultValue={data?.billing?.lastName ? data?.billing?.lastName:  lastName}
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
                            defaultValue={data?.billing?.companyName}
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
                            placeholder="Country"
                            defaultValue={data?.billing?.country}
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
                            defaultValue={data?.billing?.streetAddress}

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
                            defaultValue={data?.billing?.town}
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
                            defaultValue={data?.billing?.district}
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
                            defaultValue={data?.billing?.postCode}
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
                            defaultValue={data?.billing?.number}
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
                            defaultValue={data?.billing?.email}
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

export default EditAddress