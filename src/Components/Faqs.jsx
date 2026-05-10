import React from 'react'
import FaqImag from '../assets/speaker01.png'
import Call from '../assets/call.svg'
import Plus from './Plus'
const Faqs = () => {
 return (
    <div className='py-25 px-5 lg:px-0'>
        <div className="container">
            <div className='grid lg:grid-cols-[4fr_8fr] grid-cols-1 gap-10'>
                <div className='relative'>
                    <div>
                        <img src={FaqImag} alt="faqsImage" />
                    </div>
                    <div className='absolute bottom-0 right-0 bg-white p-5 rounded-tl-xl rounded-bl-[65px] rounded-tr-[65px]'>
                        <div className=' bg-[#734BDF] rounded-[10px] p-6'>
                            <h2 className='text-white pb-12.5'>
                                <span className='block'>Your Questions,</span>
                                Clearly Answer
                            </h2>
                            <div className=' text-white bg-[#734BDF] p-2 rounded-xl'>
                                <img src={Call} alt="phone3" className='  ' />
                            </div>
                            <p className='pt-4 text-white'>
                                +00 123 456 789
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2
                    about="FAQ's"
                    heading='What our customers say about their
                    experience'
                    />
                    <div>
                        <Plus
                            title="1. How does the complete event register process actually work?"
                            decs="Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                            interest you most, and customize your learning experience throughout the day."
                        />
                        <Plus
                            title="2. Where is the main event venue located precisely?"
                            decs="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis facere reiciendis ab aperiam perspiciatis architecto id vero impedit est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis facere reiciendis ab aperiam perspiciatis architecto id vero impedit est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis facere reiciendis ab aperiam perspiciatis architecto id vero impedit est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis facere reiciendis ab aperiam perspiciatis architecto id vero impedit est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis facere reiciendis ab aperiam perspiciatis architecto id vero impedit est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis facere reiciendis ab aperiam perspiciatis architecto id vero impedit est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis facere reiciendis ab aperiam perspiciatis architecto id vero impedit est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis facere reiciendis ab aperiam perspiciatis architecto id vero impedit est!"
                        />
                        <Plus
                            title="3. Can attendees freely switch between sessions and tracks?"
                            decs="Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                            interest you most, and customize your learning experience throughout the day."
                        />
                        <Plus
                            title="4. Does the event provide virtual participation options online?"
                            decs="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis facere reiciendis ab aperiam perspiciatis architecto id vero impedit est!"
                        />
                        <Plus
                            title="5. What is the event refund and cancellation policy?"
                            decs="Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                            interest you most, and customize your learning experience throughout the day."
                        />
                    </div>
                </div>

            </div>
      </div>
      
    </div>
  )
}

export default Faqs
