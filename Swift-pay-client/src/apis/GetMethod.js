import { useQuery } from "@tanstack/react-query"
import axiosSecure from "./axiosSecure"

// get All My products
export const getMyPorducts = async (email) => {
    const { data } = await axiosSecure.get(`/myproducts?email=${email}`)
    return data
}

// get Single Users
export const getSingleUser = async (email) => {
    const { data } = await axiosSecure.get(`/api/users?email=${email}`)
    return data
}

// get Single Product info
export const GetProduct = async (id) => {
    const { data } = await axiosSecure.get(`/editproduct/${id}`)
    return data
}

// Update Product info
export const uploadProduct = async (id, product) => {
    const { data } = await axiosSecure.put(`/updateproduct/${id}`, product)
    return data
}
// export const BillingInfo =  (email) => {
//     const { refetch, isPending, error, data } = useQuery({
//         queryKey: ['userBilling'],
//         queryFn: async () => {
//             const res = await fetch(`http://localhost:5000/userBillingInfo?email=${email}`)
//             return res.json()
//         }
//     })
//     // const {data}= await axiosSecure.get(`/userBillingInfo?email=${email}`)
//     return [refetch, isPending, error, data]
// }