import axiosSecure from "./axiosSecure"
export const ImageHost= async(featureImag)=>{
    const formData= new FormData()
     formData.append('image', featureImag)
     const {data}= await axiosSecure.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`, formData)
     return data
}