import axiosSecure from "./axiosSecure"

// get All My products
export const getMyPorducts=async(email)=>{
const {data}= await axiosSecure(`/myproducts?email=${email}`)
return data
}