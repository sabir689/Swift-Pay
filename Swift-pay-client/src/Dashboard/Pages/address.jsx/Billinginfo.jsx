import React from 'react'
import UseUserBilling from '../../../apis/UseUserBilling';

const Billinginfo = () => {
    const [refetch, isPending, error, data] = UseUserBilling()
    console.log(data?.brilling?.firstName);
    return (
        <div>
            <div className=''>
                <h1 className='text-base mt-3 font-normal text-black'>Full Name: <span className='font-medium'>{data?.billing?.firstName+' '+data?.billing?.lastName}</span></h1>
                <h1 className='text-base mt-3 font-normal text-black'>Full Name: <span className='font-medium'>{data?.billing?.companyName}</span></h1>

                <h1 className='text-base mt-3 font-normal text-black'>Full Name: <span className='font-medium'>{data?.billing?.companyName}</span></h1>

                <h1 className='text-base mt-3 font-normal text-black'>Full Name: <span className='font-medium'>{data?.billing?.country}</span></h1>

                <h1 className='text-base mt-3 font-normal text-black'>Full Name: <span className='font-medium'>{data?.billing?.streetAddress}</span></h1>

                <h1 className='text-base mt-3 font-normal text-black'>Full Name: <span className='font-medium'>{data?.billing?.town}</span></h1>

                <h1 className='text-base mt-3 font-normal text-black'>Full Name: <span className='font-medium'>{data?.billing?.district}</span></h1>

                <h1 className='text-base mt-3 font-normal text-black'>Full Name: <span className='font-medium'>{data?.billing?.postCode}</span></h1>

                <h1 className='text-base mt-3 font-normal text-black'>Full Name: <span className='font-medium'>{data?.billing?.number}</span></h1>

                <h1 className='text-base mt-3 font-normal text-black'>Full Name: <span className='font-medium'>{data?.billing?.email}</span></h1>
                
            </div>
        </div>
    )
}

export default Billinginfo