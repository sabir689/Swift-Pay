import React, { useContext, useEffect, useState } from 'react'
import { getMyPorducts } from '../../apis/GetMethod'
import { AuthContext } from '../../provider/AuthProvider'
const Products = () => {
    const [myProduct, setMyProducts]= useState([])
    const [loading, setLoading]=useState(false)
    const {user}=useContext(AuthContext)
    // const userEmail=user?.email
    // console.log(userEmail);
    useEffect(()=>{
        setLoading(true)
        getMyPorducts(user?.email)
        .then((res)=>{
            setMyProducts(res)
            setLoading(false)
        })

    },[])
  
    console.log(myProduct);
   
  return (
    <div>Products</div>
  )
}

export default Products