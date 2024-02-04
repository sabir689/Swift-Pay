import axiosSecure from "./axiosSecure"

// get All My products
export const getMyPorducts=async(email)=>{
const {data}=axiosSecure(`/my-products?email=${email}`)
return data
}