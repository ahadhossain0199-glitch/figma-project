import React from 'react'
import facbook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import footericon from '../assets/footericon.png'
import picon from '../assets/picon.png'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_100%)] pt-20 px-5 lg:px-0'>
        <div className="container">

   
                <div className='flex flex-wrap justify-between items-center px-5 lg:px-0'>
                    <div>
                        <h2 className='text-5xl text-white w-full md:w-159.5 pb-5 md:pb-0'>
                            Join our newsletter for event
                            important announcement</h2>
                    </div>
                    <div className='w-100'>
                        <div className='flex items-center gap-4'>
                            <div className='w-14.5 h-10'>
                                <img src={footericon} alt="" className='w-full h-full'/>
                            </div>
                            <p className='text-white'>Stay informed with instant updates delivered straight to
                                your inbox.</p>

                        </div>
                        <div className='mt-5.5 py-5 rounded-[20px] bg-white/10 w-full'>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-[5fr_7fr] gap-0 border border-t-white/10 border-l-0 border-r-0 border-b-0 lg:py-20 py-10 lg:mt-20 mt-15'>
                    <div className='md:w-90 w-full'>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <p className='text-white py-10'>Experience a world-class conference designed
                            to inspire innovation, empower professionals,
                            and connect leaders from around the globe.</p>
                        <div className="flex items-center gap-3.75">
                            <div className='cursor-pointer'>
                                <img src={picon} alt="" />
                            </div>
                            <div className='cursor-pointer'>
                                <img src={picon} alt="" />
                            </div>
                            <div className='cursor-pointer'>
                                <img src={facbook} alt="" />
                            </div>
                            <div className='cursor-pointer'>
                                <img src={instagram} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap justify-between gap-0 text-white'>
                        <div className='pt-15' >
                            <h3 className='text-white pb-7.5 '>Quick Links</h3>
                            <ul className='text-base font-normal'>
                                <li className='pb-6 cursor-pointer'>Home</li>
                                <li className='pb-6 cursor-pointer'>About Us</li>
                                <li className='pb-6 cursor-pointer'>Speakers</li>
                                <li className='pb-6 cursor-pointer'>Events</li>
                                <li className='pb-6 cursor-pointer'>Contact Us</li>
                            </ul>
                        </div>
                        <div className='pt-15 lg:pt-0'>
                            <h3 className='text-white pb-7.5'>Quick Links</h3>
                            <ul className='text-base font-normal'>
                                <li className='pb-6 cursor-pointer'>Home</li>
                                <li className='pb-6 cursor-pointer'>About Us</li>
                                <li className='pb-6 cursor-pointer'>Speakers</li>
                                <li className='pb-6 cursor-pointer'>Events</li>
                                <li className='pb-6 cursor-pointer'>Contact Us</li>
                            </ul>
                        </div>
                        <div className='pt-15 '>
                            <h3 className='text-white pb-7.5'>Schedules</h3>
                            <ul className='text-base font-normal'>
                                <li className='pb-6 cursor-pointer'>Event Management</li>
                                <li className='pb-6 cursor-pointer'>Live Streaming</li>
                                <li className='pb-6 cursor-pointer'>Virtual Event Setup</li>
                                <li className='pb-6 cursor-pointer'>Keynote Sessions</li>
                                <li className='pb-6 cursor-pointer'>Networking Programs</li>
                            </ul>
                        </div>
                        <div className='pt-15 lg:pt-0'>
                            <h3 className='text-white pb-7.5'>Get In Touch</h3>
                            <ul className='text-base font-normal'>
                                <li className='pb-6 cursor-pointer'>+00 123 456 789</li>
                                <li className='pb-6 cursor-pointer'>support@domainname.com</li>
                                <li className='pb-6 border border-t-white/10 border-l-0 border-r-0 border-b-0'></li>
                                <li className='w-60 cursor-pointer'>45/2 Central Business Innovation
                                    Near International Trade Tower</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='opacity-10' />
            <p className='text-white py-10 text-center'>Copyright © 2025 All Rights Reserved.</p>
        </div>
    )
}
export default Footer
