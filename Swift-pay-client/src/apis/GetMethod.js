import axiosSecure from "./axiosSecure"

// get All My products
export const getMyPorducts=async(email)=>{
const {data}= await axiosSecure.get(`/myproduct?email=${email}`)
return data
}