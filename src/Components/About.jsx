import React from 'react'
import Img01 from '../assets/img.png'
import Img02 from '../assets/img01.png'
import BG from '../assets/icon.svg'
import BG01 from '../assets/icon01.svg'
import BG02 from '../assets/call.svg'
import Btn from './Btn'

const About = () => {
  return (
    <>
      <div className="container flex justify-between items-center gap-20 mt-20">
        <div className='relative '>
            <div className=' mt-25'>
                <img src={Img01} alt="" />
            </div>
            <div className='absolute top-20 left-60'>
                <img src={Img02} alt="" />
            </div>
        </div>
            <div className='w-172'>
                            <div className='font-semibold  text-[#161A2D]'>
                                <span></span>
                                <h5 className='text-[14px]'>About Us</h5>
                            </div>
                            <h2 className='font-semibold text-[48px] text-[#161A2D] leading-[52.8px] tracking-[-0.96px] mt-2.5 mb-4.5'>Uncover our mission & purpose
                                behind this event</h2>
                            <p className='font-normal text-[#737681]'>Discover the vision that drives this event—a commitment to bringing together innovators,
                                leaders, and changemakers to share knowledge, spark inspiration, and create meaningful
                                connections.</p>
                            <div className='flex justify-between bg-[#F6F6F7] py-2.5 px-2 my-10 text-[#161A2D] font-bold rounded-[10px]'>
                                <button className='py-5 px-15 hover:bg-white rounded-[10px] duration-200 ease-linear'>Our Mission</button>
                                <button className='py-5 px-15 hover:bg-white rounded-[10px] duration-200 ease-linear'>Our Vision</button>
                                <button className='py-5 px-15 hover:bg-white rounded-[10px] duration-200 ease-linear'>Our Goal</button>

                            </div>
                            <p className='font-normal text-[#737681]'>Our vision is to build a global community where collaboration fuels innovation we aim encourage
                                fresh thinking, spark inspiring dialogues, and create a space.</p>
                            <div className='flex items-center gap-7.5 my-10 '>
                                <div className='flex items-center gap-4 font-bold text-[20px] text-[#161A2D]  '>
                                    <div className=''>
                                    <img src={BG} alt="" />
                                    </div>
                                    <p>Receive real-time event
                                        updates.</p>
                                </div>
                                <div className='flex items-center gap-4 font-bold text-[20px] text-[#161A2D] '>
                                    <div>
                                    <img src={BG01} alt="" />
                                    </div>
                                    <p>Receive real-time event
                                        updates.</p>
                                </div>
                            </div>
                            <div className='flex gap-7.5'>
                                <Btn>Learn More About</Btn>
                                <div className='flex gap-4 '>
                                    <img src={BG02} alt="" className=' p-2 text-white bg-[#734BDF] rounded-xl'/>
                                    <div>
                                        <p className='font-bold text-[20px] text-[#161A2D]'>Call Now!</p>
                                        <span className='text-nowrap text-[#737681] font-normal'>+00 123 456 789</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
     
        


      </>
    
  )
}

export default About