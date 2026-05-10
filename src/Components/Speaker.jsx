import React from 'react'
import speaker01 from '../assets/speaker01.png'
import speaker02 from '../assets/speaker02.png'
import speaker03 from '../assets/speaker03.png'

const Speaker = () => {
  return (
       <div className='py-25 px-5 lg:px-0'>
            <div className="container">
                <div>
                   
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-7.5 pt-20 pb-16'>
                    <div>

                       <img src={speaker01} alt="" />
                       
                       
                    </div>
                    <div>
                       <img src={speaker02} alt="" />
                     
                       
                   </div>
                    <div>
                        
                        <img src={speaker03} alt="" />
                       
                       
                   </div> 
                </div>
                <div className='flex items-center justify-center gap-4 '>
                    
                    <p className='text-sm font-semibold leading-5.5 text-gray'>Join our speaker and help weave innovation, quality, and success together worldwide.</p>
                </div>
            </div>

        </div>
  )
}

export default Speaker
