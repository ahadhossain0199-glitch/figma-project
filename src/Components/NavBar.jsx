import React from 'react'
import Logo from '../assets/logo.png'
import Btn from './Btn'
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
  return (
    <>
          <nav className='py-6.5 absolute top-0 left-0 w-full bg-white/10 z-1'>
        <div className="container">
            <div className='flex justify-between items-center'>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className='flex gap-7.5 text-[#FFFFFF] font-medium'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Schedule</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                <Btn>Join the Conference</Btn>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar
