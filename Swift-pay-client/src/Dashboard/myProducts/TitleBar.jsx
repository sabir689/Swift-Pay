import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const TitleBar = ({title, total}) => {
    return (
        <div>
            <div className='flex items-center justify-between gap-10 pb-3 border-b mb-7'>
                <h1 className='task relative text-2xl font-medium text-neutral-500'>{title} <span className='text-neutral-500 text-xl font-normal'>{total}</span></h1>
                <div className='cursor-pointer'>

                   <div  className='border-[2px] p-1.5 rounded-full border-neutral-400'>
                   <Link to='/dashboard/sellPost'>
                        <FaPlus className='text-neutral-500 text-xl' />
                    </Link>
                   </div>
                </div>
            </div>
            
        </div>
    )
}

export default TitleBar