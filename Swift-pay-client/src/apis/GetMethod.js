import axiosSecure from "./axiosSecure"
// get All My products
export const getMyPorducts=async(email)=>{
const {data}= await axiosSecure.get(`/myproducts?email=${email}`)
return data
}

// get Single Product info
export const GetProduct= async(id)=>{
    const {data}= await axiosSecure.get(`/editproduct/${id}`)
    return data
}

// Update Product info
export const uploadProduct= async(id,product)=>{
    const {data}= await axiosSecure.put(`/updateproduct/${id}`, product)
    return data
}