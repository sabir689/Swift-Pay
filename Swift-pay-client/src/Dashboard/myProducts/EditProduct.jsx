import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GetProduct } from '../../apis/GetMethod'
import toast from 'react-hot-toast'
import { AuthContext } from '../../provider/AuthProvider'

const EditProduct = () => {
    const location = useLocation()
    const receivedData = location.state.data
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([])
    const { user } = useContext(AuthContext);

    console.log(product);
    useEffect(() => {
        setLoading(true)
        GetProduct(receivedData)
            .then(res => {
                setProduct(res)
                setLoading(false)
            })
            .catch(() => {
                toast.error('Unable to load data from the database. Please try again later.')
            })
    }, [])
    const handleSubmit = (e) => {

    }
    return (
        <div className=" mt-16 mb-10 border-[1px] border-gray-300 max-w-2xl px-3 rounded-lg mx-auto">
            <div>
                <p className="text-center text-2xl my-5 md:my-10 text-[#49108B] font-bold md:text-4xl">
                    Update Your Product
                </p>
                <form
                    onSubmit={handleSubmit}>
                    <div className="px-2 md:px-6 lg:px-5  grid gap-y-4 justify-center items-center mb-10">
                        <div className="w-full flex flex-col md:flex-row gap-4">
                            <div className='flex-1'>
                                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                                    Your Name
                                </label>
                                <input
                                    name='yourName'
                                    className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-3 px-3 w-full outline-none"
                                    type="text"
                                    placeholder="your name"
                                    required=""
                                    defaultValue={product?.name} />
                            </div>

                            <div className='flex-1'>
                                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                                    Email Address
                                </label>
                                <input
                                    name='email'
                                    className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-3 px-3 w-full outline-none cursor-not-allowed"
                                    readOnly
                                    type="Email"
                                    placeholder="your email"
                                    id="Email"
                                    value={user?.email}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='flex-1'>
                                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                                    Address
                                </label>
                                <input
                                    name='address'
                                    className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-3 px-3 w-full outline-none"
                                    type="text"
                                    placeholder="your address"
                                    id="address"
                                    defaultValue={product?.address} />

                            </div>

                            <div className='flex-1'>
                                <label className="text-lg mb-1 font-medium inline-block text-gray-500">
                                    Phone number
                                </label>
                                <input
                                    className=" text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-3 px-3 w-full"
                                    type="number"
                                    placeholder="phone"
                                    id="number"
                                    name="number"
                                    defaultValue={product?.number}
                                />
                            </div>
                        </div>


                        <div>
                            <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                                Product Name
                            </label>
                            <input
                                name='productName'
                                className=" text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-3 px-3 w-full outline-none"
                                type="text"
                                placeholder="Product Name"
                                defaultValue={product?.productName}
                            />
                        </div>

                        <div className=" flex flex-col md:flex-row gap-4">
                            <div className='flex-1'>
                                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                                    Product image
                                </label>
                                <input
                                    name="image"
                                    className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-2.5 px-3 w-full outline-none"
                                    type="file"
                                    defaultValue={product?.image}
                                />
                            </div>
                            <div className='w-full md:w-40'>
                                <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                                    Price
                                </label>
                                <input
                                    name=''
                                    className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-3 px-3 w-full outline-none"
                                    type="number"
                                    placeholder="price"
                                    id="price"
                                    defaultValue={product?.price}
                                />
                            </div>
                        </div>


                        <div>
                            <label className="text-lg mb-1  inline-block font-medium text-gray-500 ">
                                Category
                            </label>
                            <select
                                name='category'
                                className="text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300 focus:border-[#49108B] py-3 px-3 w-full outline-none"
                            >
                                <option> {product?.category}</option>
                                <option className="text-sm">Electronics</option>
                                <option className="text-sm">Photography</option>
                                <option className="text-sm">Fitness</option>
                                <option className="text-sm">Cafe Corner</option>
                                <option className="text-sm">Fashion</option>
                                <option className="text-sm">Art & Design</option>
                                <option className="text-sm">Outdoor</option>
                                <option className="text-sm">Appliances</option>
                                <option className="text-sm">Home & security</option>
                                <option className="text-sm">Home & Living </option>
                                <option className="text-sm">Home Automation</option>
                                <option className="text-sm">Home & Kitchen</option>
                            </select>
                        </div>

                        <div className=" w-full">
                            <label className="mb-1 text-lg font-medium inline-block text-gray-500">
                                Description
                            </label>
                            <textarea
                                name='description'
                                placeholder="Product description"
                                className=" text-lg rounded-md bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-3 px-3 h-32 w-full outline-none"
                                defaultValue={product?.description}>
                            </textarea>
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <button
                                type="submit"
                                className=" px-11 py-3 text-center text-white duration-300 bg-purple-600  border-gray-900 rounded-full inline-flex hover:bg-transparent hover:bg-blue-400  hover:text-white  text-xl font-medium "
                            >
                                save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditProduct