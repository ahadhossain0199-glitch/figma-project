import React from 'react'
import Section from './Section'
import arrow from '../assets/arrow.svg'

const Image = () => {
  return (
    <div className='bg-[url(./assets/image.png)] bg-no-repeat bg-center bg-cover w-full h-200 relative'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-end h-full'>
        <div className='group hover:bg-white/10 h-full flex flex-col justify-end items-start p-6 duration-300 cursor-pointer'>
          <Section
            about='Panels'
            desc='text-white '
          />
          <h3 className='text-white '>
            Interactive Panel Discussions
          </h3>

          <p className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </p>

          <div className='flex items-center gap-2.25 
          hidden group-hover:flex duration-300'>
            <p className='text-base font-bold leading-6 text-white'>
              Read More
            </p>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>

        <div className='group hover:bg-white/10 h-full flex flex-col justify-end items-start p-6 duration-300 cursor-pointer'>
          <Section
            about='Networking'
            desc='text-white '
          />
          <h3 className='text-white '>
            Connect With Top Professionals
          </h3>

          <p className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </p>

          <div className='flex items-center gap-2.25 
          hidden group-hover:flex duration-300'>
            <p className='text-base font-bold leading-6 text-white'>
              Read More
            </p>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>

        <div className='group hover:bg-white/10 h-full flex flex-col justify-end items-start p-6 duration-300 cursor-pointer'>
          <Section
            about='Resources'
            desc='text-white '
          />
          <h3 className='text-white '>
            Exclusive Access Event Material
          </h3>

          <p className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </p>

          <div className='flex items-center gap-2.25 
          hidden group-hover:flex duration-300'>
            <p className='text-base font-bold leading-6 text-white'>
              Read More
            </p>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>

        <div className='group hover:bg-white/10 h-full flex flex-col justify-end items-start p-6 duration-300 cursor-pointer'>
          <Section
            about='Updates'
            desc='text-white '
          />
          <h3 className='text-white '>
            Real-Time Event Announcement
          </h3>

          <p className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </p>

          <div className='flex items-center gap-2.25 
          hidden group-hover:flex duration-300'>
            <p className='text-base font-bold leading-6 text-white'>
              Read More
            </p>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Image