import axiosSecure from "./axiosSecure"
// get All My products
export const getMyPorducts=async(email)=>{
const {data}= await axiosSecure.get(`/myproducts?email=${email}`)
return data
}

export const GetProduct= async(id)=>{
    const {data}= await axiosSecure.get(`/editproduct/${id}`)
    return data
}