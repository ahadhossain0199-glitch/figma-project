import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import Countdown from './Counter';

const Banner = () => {
  return (
 <div className='bg-[url(./assets/Background.png)] bg-cover bg-center bg-no-repeat p-50'>
      <div className=' text-center py-20 flex flex-col gap-10 items-center'>
        

      <h1 className='text-white text-[73px] leading-20.75 tracking-[0.152px] mt-40'>Connecting Minds to Shape<span className='block'> Tomorrow's Big Ideas
       Tomorrow's Big Ideas</span></h1>
      <p className='text-white '>Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—<br />
       exchanging ideas that spark growth, innovation, and meaningful change.</p>
         <div className='flex gap-10 mt--13'>
                <button className='font-bold bg-[#734BDF] text-white py-3.75 px-6 rounded-full'>Join the Conference</button>
                
              <div className='flex items-center gap-2 mt-4 cursor-pointer bg-white/10 p-3 rounded-full '>
                  

                <FaRegCirclePlay className='text-white bg-purple-500 border-none '/>
                
                <p className='text-white'>Watch Video</p>
                
              </div>
            </div>
              <p className='text-white'>Upcoming Speaker Reveal - Don't Miss Out</p>

              <Countdown />
        </div>
      </div>
  )
}

export default Banner
