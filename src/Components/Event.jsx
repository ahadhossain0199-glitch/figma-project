import React from 'react'
import customer01 from '../assets/customer.png'

const Event = () => {
  return (
    <>
    <section className=' bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_100%)] text-white mt-30'>

      <div className="container">
        <div className='py-20'>

        <h2 className=' text-center mt-25'>. Our Event Schedule</h2>
        <h1 className='text-center text-3xl font-semibold mt-7'>Explore the complete schedule forspa <br /> our event </h1>
        </div>
        <div className='item-center text-center'>

        <div className='bg-white/10 md:rounded-full rounded-xl flex flex-wrap items-center justify-center md:gap-7.5 gap-3 md:p-2.5 p-2 md:my-20 my-15 md:w-125 w-full mx-auto'>
              <h4 className='text-white hover:text-black font-bold md:text-[20px] leading-5.5 hover:bg-white rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer'>Day 01</h4>
              <h4 className='text-white hover:text-black font-bold md:text-[20px] leading-5.5 hover:bg-white rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer'>Day 02</h4>
              <h4 className='text-white hover:text-black font-bold md:text-[20px] leading-5.5 hover:bg-white rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer'>Day 03</h4>
            </div>
        </div>
      </div>

           <div className='flex flex-col justify-center items-center gap-10'>
              <div className='flex flex-wrap lg:gap-14 gap-5 border border-b-white/10 border-l-0 border-r-0 border-t-0 pb-5'>
                <div className='flex gap-7.5 items-center'>
                  <div>
                    <img src={customer01} alt="" />
                  </div>
                  <div>
                    <div className='text-white'>9:00 AM - 5:30 PM</div>
                    <p className='text-white pt-2'>22 March 2025</p>
                  </div>
                </div>
                <div>
                  <div className='text-white'>
                    Professional Skills Development Workshop
                  </div>
                  <p className='text-white pt-2 md:w-136 w-full'>
                    Unlock your potential and elevate your career with our Professional Skills
                    Development designed students, working professionals.
                  </p>
                </div>
                <div className="flex items-center gap-3.75">
                  
                  <div>
                    <p className='text-white'>
                    <span className='block'>Street, Block 12</span> Sector 4, Ipsum City
                  </p>
                  
                  </div>
                </div>

              </div>

              <div className='flex flex-wrap lg:gap-14 gap-5 border border-b-white/10 border-l-0 border-r-0 border-t-0 pb-5'>
                <div className='flex gap-7.5 items-center'>
                  <div>
                    <img src={customer01} alt="" />
                  </div>
                  <div>
                    <divdiv className='text-white'>9:00 AM - 5:30 PM</divdiv>
                    <p className='text-white pt-2'>22 March 2025</p>
                  </div>
                </div>
                <div>
                  <div className='text-white'>
                    Professional Skills Development Workshop
                  </div>
                  <p className='text-white pt-2 md:w-136 w-full'>
                    Unlock your potential and elevate your career with our Professional Skills
                    Development designed students, working professionals.
                  </p>
                </div>
                <div className="flex items-center gap-3.75">
                  
                  <div>
                    <p className='text-white'>
                    <span className='block'>Street, Block 12</span> Sector 4, Ipsum City
                  </p>
                  
                  </div>
                </div>

              </div>

              <div className='flex flex-wrap lg:gap-14 gap-5 border border-b-white/10 border-l-0 border-r-0 border-t-0 pb-5'>
                <div className='flex gap-7.5 items-center'>
                  <div>
                    <img src={customer01} alt="" />
                  </div>
                  <div>
                    <div className='text-white'>9:00 AM - 5:30 PM</div>
                    <p className='text-white pt-2'>22 March 2025</p>
                  </div>
                </div>
                <div>
                  <div className='text-white'>
                    Professional Skills Development Workshop
                  </div>
                  <p className='text-white pt-2 md:w-136 w-full'>
                    Unlock your potential and elevate your career with our Professional Skills
                    Development designed students, working professionals.
                  </p>
                </div>
                <div className="flex items-center gap-3.75">
                  <div>
                    <img src={location} alt="" />
                  </div>
                  <div>
                    <p className='text-white'>
                    <span className='block'>Street, Block 12</span> Sector 4, Ipsum City
                  </p>
                  
                  </div>
                </div>

              </div>

              <div className='flex flex-wrap lg:gap-14 gap-5 border border-b-white/10 border-l-0 border-r-0 border-t-0 pb-5'>
                <div className='flex gap-7.5 items-center'>
                  <div>
                    <img src={customer01} alt="" />
                  </div>
                  <div>
                    <div className='text-white'>9:00 AM - 5:30 PM</div>
                    <p className='text-white pt-2'>22 March 2025</p>
                  </div>
                </div>
                <div>
                  <div className='text-white'>
                    Professional Skills Development Workshop
                  </div>
                  <p className='text-white pt-2 md:w-136 w-full'>
                    Unlock your potential and elevate your career with our Professional Skills
                    Development designed students, working professionals.
                  </p>
                </div>
                <div className="flex items-center gap-3.75">
                  
                  <div>
                    <p className='text-white'>
                    <span className='block'>Street, Block 12</span> Sector 4, Ipsum City
                  </p>
                  
                  </div>
                </div>

              </div>

            </div>
    </section>
    </>
  )
}

export default Event