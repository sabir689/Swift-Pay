import React from 'react'

const SectionHeader = ({lable, align}) => {
  return (
    <div>
        <h1 className={`text-[30px] md:text-[40px] text-[#333333] mb-8 font-semibold ${align? `text-${align}` : 'text-center'}`}>{lable}</h1>
    </div>
  )
}

export default SectionHeader