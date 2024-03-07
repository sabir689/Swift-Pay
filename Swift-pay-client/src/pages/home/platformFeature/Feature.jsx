import React from 'react'
import { Link } from 'react-router-dom'

const Feature = ({ item }) => {
    const { title, text, icon: Icon } = item
    return (
        <div className='shadow bg-white rounded-md hover:shadow-lg border-[1px] p-5 flex flex-col justify-between group'>
            <div>
                <Icon className='text-5xl text-cyan-500 w-full'> </Icon>
                <h1 className='text-xl md:text-2xl font-medium text-neutral-700 mb-1 mt-3 text-center group-hover:text-cyan-500 duration-300'>{title}</h1>
                <p className='text-[15px] md:text-base font-normal text-neutral-500 text-center'>{text}</p>
            </div>
            <Link to={item.link} className='text-base font-medium mt-2 text-center block text-cyan-500 '>Learn More</Link>
        </div>
    )
}
export default Feature