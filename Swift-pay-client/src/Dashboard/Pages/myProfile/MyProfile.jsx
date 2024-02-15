import { useEffect, useState } from "react"
import { FiEdit } from "react-icons/fi"
import { getSingleUser } from "../../../apis/GetMethod"
import UseAuth from "../../../hooks/UseAuth"
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import UpdateProfile from "./UpdateProfile";
const MyProfile = () => {
    const { user } = UseAuth()
    const [isEdit, setIdEdit] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const emailAddress = user?.email
    console.log(emailAddress);
    const [userData, setUserData] = useState([])

    useEffect(() => {
        getSingleUser(user?.email)
            .then(res => {
                setUserData(res)
            })
    }, [user?.email])

    return (
        <div className='mt-10 p-5 max-w-xl mx-auto shadow-md rounded-md'>
            <div className='border-b border-neutral-300 pb-2 mb-4 flex items-center justify-between gap-10'>
                <h1 className='text-xl font-medium text-neutral-700'>{isEdit ? 'Edit Profile' : 'My Profile'}</h1>
                <div onClick={() => setIdEdit(!isEdit)}>
                    <FiEdit className='text-2xl text-neutral-600 cursor-pointer hover:text-purple-600 duration-300'> </FiEdit>
                </div>
            </div>
            <div>
                {
                    isEdit ? <UpdateProfile user={user} /> :
                        <div className="my-5">
                            {
                                userData.map(user =>
                                    <div>
                                        <div className="flex items-center justify-between gap-10">
                                            <div className="flex-1">
                                                <h1 className="text-[17px] font-medium inline-block text-gray-400">Full Name:</h1>
                                                <h1 className="text-lg font-medium text-gray-800">{`${user?.firstName} ${user?.lastName}`}</h1>
                                            </div>
                                            <div className="flex-1">
                                                <h1 className="text-[17px] font-medium inline-block text-gray-400">Email Address:</h1>
                                                <h1 className="text-lg font-medium text-gray-800">{user?.email}</h1>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between gap-10 mt-5">
                                            <div className="flex-1">
                                                <h1 className="text-[17px] font-medium inline-block text-gray-400">Address:</h1>
                                                <h1 className="text-lg font-medium text-gray-800">{user?.address}</h1>
                                            </div>
                                            <div className="flex-1">
                                                <h1 className="text-[17px] font-medium inline-block text-gray-400">Gender:</h1>
                                                <h1 className="text-lg font-medium text-gray-800">{user?.gender}</h1>
                                            </div>
                                        </div>
                                        <div className="flex  justify-between gap-10 mt-5">
                                            <div className="flex-1">
                                                <h1 className="text-[17px] font-medium inline-block text-gray-400">User Role:</h1>
                                                <h1 className="text-lg font-medium text-gray-800">{user?.role}</h1>
                                            </div>
                                            <div className="flex-1">
                                                <h1 className="text-[17px] font-medium inline-block text-gray-400">Account password:</h1>
                                                <div className="relative">
                                                    <input type={showPassword ? 'text' : 'password'} className="text-sm rounded bg-transparent border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#49108B] focus:outline-none py-1 px-2  outline-none" defaultValue={user?.password} />
                                                    <div onClick={() => setShowPassword(!showPassword)} className="absolute right-16 top-0.5 cursor-pointer">
                                                        {
                                                            showPassword ? <IoMdEye className="text-2xl" /> : <IoMdEyeOff className="text-2xl" />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    )
}
export default MyProfile