import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../provider/AuthProvider'
import { FiEdit } from "react-icons/fi";
import { getUpdateAddress } from '../../../apis/GetUpdate';
import toast from 'react-hot-toast';
import UseUserBilling from '../../../apis/UseUserBilling';
import EditAddress from './EditAddress';
import Billinginfo from './Billinginfo';
const Address = () => {
    const [eidt, setEdit] = useState(false)

    const [refetch, isPending, error, data] = UseUserBilling()
    console.log(data?.brilling?.firstName);

    console.log(eidt);

    return (
        <div className='mt-10 px-5 max-w-3xl mx-auto'>
            <div className='border-b border-neutral-300 pb-2 mb-4 flex items-center justify-between gap-10'>
                <h1
                    className={
                        eidt
                            ? "text-2xl font-semibold text-[#49108B] "
                            : "text-2xl font-semibold text-[#49108B]"
                    }
                >
                    {eidt ? "Edit billing address" : "Billing address"}
                </h1>
                <div onClick={() => setEdit(!eidt)}>
                    <FiEdit className='text-2xl text-neutral-600 cursor-pointer'> </FiEdit>
                </div>
            </div>

            {
                eidt ?
                    <EditAddress /> :
                    <Billinginfo/>
            }


        </div>
    )
}

export default Address