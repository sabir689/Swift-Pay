import React from 'react'
import Container from '../../Components/Shared/Container'
import UseOrderTrack from '../../apis/UseOrderTrack'
import toast from 'react-hot-toast'
// import { getOrderProduct } from '../../apis/GetMethod'

const OrderTrack = () => {
    const handleTrack=(e)=>{
        e.preventDefault()
        const form= e.target 
        const orderId=form.orderId.value;
        UseOrderTrack(orderId)
        .then((mess)=>{
            toast.success('order data fetch success')
            console.log(mess);
        })
        .catch(()=>{
            toast.error((error)=>{
                console.log(error);
                toast.error('fetcing fai')
            })
        })
    }
    // const [refetch, isPending, error, data]=UseOrderTrack()

    // console.log(data);
    return (
        <Container>
            <div className='my-28 w-full lg:max-w-3xl mx-auto'>
                <h1 className='text-3xl font-semibold text-center text-neutral-700 mb-3'>Order Tracking</h1>
                <p className='text-base font- text-center text-neutral-600'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                <form  onSubmit={handleTrack}
                className='mt-7'>
                    <label className="mb-1 pl-1 block text-lg font-normal text-neutral-700">
                        Order ID
                    </label>
                    <input
                        className="text-lg rounded bg-transparent border border-neutral-500  duration-300  py-2.5 px-4 w-full outline-none"
                        type="text"
                        name='orderId'
                        placeholder="Order ID"
                    />
                    <button className='px-7 py-3  text-white duration-200 bg-purple-600  border-gray-900 w-full mt-3 hover:bg-gray-500 hover:text-white  text-lg'>Track</button>
                </form>
            </div>
        </Container>
    )
}

export default OrderTrack