import React from 'react'
import Card from './Card'
import imgicon01 from '../assets/01.svg'
import imgicon02 from '../assets/02.svg'
import imgicon03 from '../assets/03.svg'
import imgicon04 from '../assets/04.svg'
import imgicon5 from '../assets/arrow.svg'
import star from '../assets/star.svg'

const CoreCard = () => {
  return (
       <>
      <section className='py-25 bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_100%)] mt-50 '>
        <div className="container">
          <div className='text-center w-204 mx-auto'>
            <div>
              <div className='w-2 h-2 rounded-full'></div>
              <h5 className='font-semibold text-white'>Core Feature</h5>
            </div>
            <h2 className='font-semibold  text-[48px] text-white leading-[52.8px] tracking-[-0.96px]'>Core features that power our
              exceptional services</h2>
          </div>
          <div className='flex justify-between mt-20 mb-16'>
            <Card
              icon={imgicon01}
              title='Event Planning Manage'
              description='Deliver seamless virtual experience
              with high-quality streaming and
              interactive tools.'
              btntext='Read More '
              btnicon={imgicon5}
              border='border-t border-[#737681]'
            />
            <Card
              icon={imgicon02}
              title='Conference Coordination'
              description='Deliver seamless virtual experience
              with high-quality streaming and
              interactive tools..'
              btntext='Read More '
              btnicon={imgicon5}
              border='border-t border-[#737681]'
            />
            <Card
              icon={imgicon03}
              title='Venue Booking & Setup'
              description='Deliver seamless virtual experience
              with high-quality streaming and
              interactive tools.'
              btntext='Read More '
              btnicon={imgicon5}
              border='border-t border-[#737681]'
            />
            <Card
              icon={imgicon04}
              title='Post-Event Analytics'
              description='Deliver seamless virtual experience
              with high-quality streaming and
              interactive tools.'
              btntext='Read More '
              btnicon={imgicon5}
              border='border-t border-[#737681]'
            />
          </div>
          <div className=' text-center'>
            <p className='font-normal text-white leading-[25.6px]'>Join our team and help weave innovation, quality, and success together worldwide.</p>
            <div className='font-bold text-white text-[20px] flex items-center gap-3.5 justify-center mt-5.5 '>
              <span>4.9/5</span>
              <div className='flex'>
                <div>
                  <img src={star} alt="" />
                </div>
                <div>
                  <img src={star} alt="" />
                </div>
                <div>
                  <img src={star} alt="" />
                </div>
                <div>
                  <img src={star} alt="" />
                </div>
                <div>
                  <img src={star} alt="" />
                </div>
              </div>
              <span>Our 4200 Review</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default CoreCard