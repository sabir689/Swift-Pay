import React, { useContext } from 'react'
import UseUserBilling from '../../../apis/UseUserBilling';
import AuthProvider, { AuthContext } from '../../../provider/AuthProvider';

const Billinginfo = () => {
    const {user}=useContext(AuthContext)
    const [refetch, isPending, error, data] = UseUserBilling()
    return (
        <div>
            <div className=''>
                <h1 className='text-base mt-3 font-normal text-gray-600'>Full Name : <span className='font-medium'>{data?.billing?.firstName ? data?.billing?.firstName:  user?.firstName} {data?.billing?.lastName ? data?.billing?.lastName : user?.lastName}</span></h1>
                <h1 className='text-base mt-3 font-normal text-gray-600'>Company Name : 
                <span className='font-medium'>{data?.billing?.companyName}</span></h1>
               
                <h1 className='text-base mt-3 font-normal text-gray-600'>Country  : <span className='font-medium'>{data?.billing?.country}</span></h1>
 
                <h1 className='text-base mt-3 font-normal text-gray-600'> Address : <span className='font-medium'>{data?.billing?.streetAddress}</span></h1>
 
                <h1 className='text-base mt-3 font-normal text-gray-600'>City/town : <span className='font-medium'>{data?.billing?.town}</span></h1>
 
                <h1 className='text-base mt-3 font-normal text-gray-600'>District : <span className='font-medium'>{data?.billing?.district}</span></h1>
 
                <h1 className='text-base mt-3 font-normal text-gray-600'>Post Code : <span className='font-medium'>{data?.billing?.postCode}</span></h1>

                <h1 className='text-base mt-3 font-normal text-gray-600'>Phone number : <span className='font-medium'>{data?.billing?.number}</span></h1>

                <h1 className='text-base mt-3 font-normal text-gray-600'>Email Address : <span className='font-medium'>{data?.billing?.email}</span></h1>
                
            </div>
        </div>
    )
}

export default Billinginfo