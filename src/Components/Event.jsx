import React, { useState } from 'react'
// Components

import Section from './Section'
import Tab01 from './Tab01'
import Tab02 from './Tab02'
import Tab03 from './Tab03'

const Event = () => {

  const [activeDay, setActiveDay] = useState("Day 01");

  const renderActiveDay = () => {
    if (activeDay === "Day 01")
      return <Tab01 />;
    if (activeDay === "Day 02")
      return <Tab02 />;
    if (activeDay === "Day 03")
      return <Tab03 />;
    return null;
  }

  return (
    <div className='bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_100%)] py-25 lg:px-0 px-5'>
      <div className="container">
        <Section 
          paragraph='Our Event Schedule'
          title='Explore the complete schedule for
                our event'
          className="md:w-187 w-full mx-auto text-center"
        />
      
        <div className='bg-white/10 md:rounded-full rounded-xl flex flex-wrap items-center justify-center gap-7.5  md:p-2.5 p-2 md:my-20 my-15 md:w-125 w-full mx-auto'>

          <h4
            onClick={() => setActiveDay("Day 01")}
            className={`font-bold md:text-[20px] leading-5.5 rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer
    
              ${activeDay === "Day 01"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white/70"
              }`}
          >
            Day 01
          </h4>

          <h4
            onClick={() => setActiveDay("Day 02")}
            className={`font-bold md:text-[20px] leading-5.5 rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer
    
              ${activeDay === "Day 02"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white/70"
              }`}
          >
            Day 02
          </h4>

          <h4
            onClick={() => setActiveDay("Day 03")}
            className={`font-bold md:text-[20px] leading-5.5 rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer
    
              ${activeDay === "Day 03"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white/70"
              }`}
          >
            Day 03
          </h4>

        </div>

        <div> {renderActiveDay()} </div>

      </div>
    </div>
  );
};

export default Event;