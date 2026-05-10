import React from 'react'
import { Children } from 'react'

const Btn = ({children , className}) => {
  return (
    <button className={` text-white bg-[#734BDF] font-bold py-3.75 px-6 rounded-full ${className}`}>
        {children}
    </button>
  )
}

export default Btn