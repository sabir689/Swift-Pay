import axiosSecure from "./axiosSecure"
// Delete my product
export const deleteMyproduct=(id)=>{
    const {data}= axiosSecure.delete(`/myPorduct/${id}`)
    return data
}