import axiosSecure from "./axiosSecure"
export const getUpdateAddress=async(email,info)=>{
    const {data}= await axiosSecure.put(`/addressUpdate/${email}`, info)
    return data
}