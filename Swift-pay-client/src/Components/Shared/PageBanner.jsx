import React from 'react'

const PageBanner = ({lable}) => {
  return (
    <div className=" flex items-center justify-center h-[200px] bg-[url('https://i.ibb.co/866GK1p/bg.jpg')] bg-no-repeat bg-cover bg-center">
    <p className=" text-4xl text-center font-semibold ">{lable} </p>
  </div>
  )
}

export default PageBanner