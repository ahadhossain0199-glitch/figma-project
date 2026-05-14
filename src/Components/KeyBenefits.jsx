import React from 'react'
import paint from '../assets/paint.png'
import Btn from './Btn'
import bg03 from '../assets/call.svg'
import Group from '../assets/Group 4.png'

const KeyBenefits = () => {
    return (
        <>
            <div className="container">
                <div className='flex gap-15 mt-17 items-center justify-between'>

               <div>

                <div>
                    <h5 className='text-1xl mt-8'>. Key Benefits</h5>
                    <h2 className='text-3xl font-semibold mt-2.5'>Key advantages that ensure your events stand out</h2>
                </div>
                <div className='flex gap-5 '>

                    <div className='mt-19 '>
                        <img src={paint} alt="paint" className='bg-[#734BDF] p-2 rounded-md' />
                    </div>
                    <div className='mt-18'>
                        <h2 className='text-2xl font-bold'>Expert-Led Keynote Sessions</h2>
                        <p className='font-regular '>Experience inspiring keynote sessions led by industry experts who share valuable insights, trends, and strategies to help you grow personally and professionally.</p>

                    </div>
                </div>

                <div className='flex gap-5 '>

                    <div className='mt-19 '>
                        <img src={paint} alt="paint" className='bg-[#734BDF] p-2 rounded-md' />
                    </div>
                    <div className='mt-18'>
                        <h2 className='text-2xl font-bold'>Expert-Led Keynote Sessions</h2>
                        <p className='font-regular '>Experience inspiring keynote sessions led by industry experts who share valuable insights, trends, and strategies to help you grow personally and professionally.</p>

                    </div>
                </div>
                <div className='flex gap-7.5  mb-50'>

                    <Btn className='mt-24'>View Our Schedule</Btn>
                    <div className='flex items-center gap-4 mt-24'>
                        <div className='flex items-center gap-4 '>
                            <img src={bg03} alt="" className=' text-white bg-[#734BDF] p-2 rounded-xl' />
                        </div>

                        <div>
                            <p className='font-bold text-[20px] text-[#161A2D]'>Call Now!</p>
                            <span className='text-nowrap text-[#737681] font-normal'>+00 123 456 789</span>
                        </div>
                    </div>
                </div>
               </div>
                <div>
                    <img src={Group} alt="" className='w-[704px] h-[501px]' />
                </div>
                </div>
                
                
            </div>


        </>
    )
}

export default KeyBenefits