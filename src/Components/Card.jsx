import React from 'react'

const Card = ({ icon, title, description, btntext, btnicon, border }) => {
  return (
    <>
      <div className='w-86.25 p-10 bg-white/10 group hover:bg-[#734BDF] rounded-[20px] duration-300 ease-linear cursor-pointer'>
        <div className='p-3.5 w-fit rounded-[10px] bg-[#734BDF] group-hover:bg-white hover:text-[#734BDF]'>
          <img src={icon} alt="" />
        </div>
        <h3 className='font-bold text-[20px] text-white mt-20 mb-3'>{title}</h3>
        <p className='font-normal text-white leading-[25.6px]'>{description}</p>
         <div className={` mt-7.5 ${border}`}></div>
        <button className='font-bold text-white mt-15 flex items-center gap-4 '>{btntext} <span><img src={btnicon} alt="" /></span></button>
      </div>
    </>
  )
}

export default Card