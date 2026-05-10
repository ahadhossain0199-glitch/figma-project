import React from 'react'
import Btn from './Btn'

const Picnic = () => {
  return (
   
    <div className='py-25 lg:px-0 px-5'>
      <div className="container">
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 pt-20 pb-15'>
         <div className='group bg-[#F6F6F7] rounded-[20px] relative overflow-hidden cursor-pointer'>
            <div className='text-sm font-semibold  bg-[#734BDF] uppercase py-2 px-11 rotate-45 translate-x-3 translate-y-3 absolute -right-6 top-3 hidden group-hover:block transition-all duration-500 ease-out'>Popular</div>
            <div className='p-2.5'>
              <div className='p-8'>
                <div>
                  <h2>Basic Package</h2>
                  <p>Perfect for first-time attend</p>
                </div>
                <div className='flex gap-0 pt-9 pb-6.25'>
                  <h1 className='text-[48px] font-bold leading-13 text-black'>$49</h1>
                  <p className='flex items-end'>/One-Time</p>
                </div>
              </div>
              <div className='bg-white rounded-[10px] p-10'>
                <div>What's Included:</div>
                <p className='pt-2'>It could relate to a subscription</p>
                <div className='flex flex-col gap-3.75 mt-10 py-10 border border-t-black/10'>
                  <div className='flex items-center gap-1.5'>
                    <p>Entry to all standard sessions</p>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <p>Reserved seating in select session</p>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <p>Meet & greet with speakers</p>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <p>Premium networking lounge</p>
                  </div>
                </div>
                <Btn className='w-full mt-8'>Get Basic Pass</Btn>
              </div>
            </div>
          </div>
          <div className='group bg-[#F6F6F7] rounded-[20px] relative overflow-hidden cursor-pointer'>
            <div className='text-sm font-semibold  bg-[#734BDF] uppercase py-2 px-11 rotate-45 translate-x-3 translate-y-3 absolute -right-6 top-3 hidden group-hover:block transition-all duration-500 ease-out'>Popular</div>
            <div className='p-2.5'>
              <div className='p-8'>
                <div>
                  <h2>Standard Pass</h2>
                  <p>Perfect for first-time attend</p>
                </div>
                <div className='flex gap-0 pt-9 pb-6.25'>
                  <h1 className='text-[48px] font-bold leading-13 text-black'>$59</h1>
                  <p className='flex items-end'>/One-Time</p>
                </div>
              </div>
              <div className='bg-white rounded-[10px] p-10'>
                <h1>What's Included:</h1>
                <p className='pt-2'>It could relate to a subscription</p>
                <div className='flex flex-col gap-3.75 mt-10 py-10 border border-t-black/10'>
                  <div className='flex items-center gap-1.5'>
                    <p>Entry to all standard sessions</p>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <p>Reserved seating in select session</p>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <p>Meet & greet with speakers</p>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <p>Premium networking lounge</p>
                  </div>
                </div>
                <Btn className='w-full mt-8'>Get Standard Pass</Btn>
              </div>
            </div>
          </div>
          <div className='group bg-[#F6F6F7] rounded-[20px] relative overflow-hidden cursor-pointer'>
            <div className='text-sm font-semibold  bg-[#734BDF] uppercase py-2 px-11 rotate-45 translate-x-3 translate-y-3 absolute -right-6 top-3 hidden group-hover:block transition-all duration-500 ease-out'>Popular</div>
            <div className='p-2.5'>
              <div className='p-8'>
                <div>
                  <h2>Premium Pass</h2>
                  <p>Perfect for first-time attend</p>
                </div>
                <div className='flex gap-0 pt-9 pb-6.25'>
                  <h1 className='text-[48px] font-bold leading-13 text-black'>$69</h1>
                  <p className='flex items-end'>/One-Time</p>
                </div>
              </div>
              <div className='bg-white rounded-[10px] p-10'>
                <h1>What's Included:</h1>
                <p className='pt-2'>It could relate to a subscription</p>
                <div className='flex flex-col gap-3.75 mt-10 py-10 border border-t-black/10'>
                  <div className='flex items-center gap-1.5'>
                    <p>Entry to all standard sessions</p>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <p>Reserved seating in select session</p>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <p>Meet & greet with speakers</p>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <p>Premium networking lounge</p>
                  </div>
                </div>
                <Btn className='w-full mt-8'>Get Premium Pass</Btn>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-10'>
          <div className='flex items-center gap-2.5'>
            <p>Get 30 day free trial</p>
          </div>
          <div className='flex items-center gap-2.5'>
            <p>No any hidden fee pay</p>
          </div>
          <div className='flex items-center gap-2.5'>
            <p>You can cancel anytime</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Picnic
