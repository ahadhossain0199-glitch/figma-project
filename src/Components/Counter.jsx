import React, { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2026-05-30T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      
      <h2 className="text-white">
        <div className="flex gap-4 justify-center mb-38">

        <div className="bg-white/10 p-10 font-bold text-3xl">
        {timeLeft.days} days 
        </div>
        <div  className="bg-white/10 p-10 font-bold text-3xl">
        {timeLeft.hours} hours 

        </div>

        <div  className="bg-white/10 p-10 font-bold text-3xl">

         {timeLeft.minutes} mint 
        </div>
        <div  className="bg-white/10 p-10 font-bold text-3xl">

         {timeLeft.seconds} sec
        </div>
        </div>
      </h2>
    </div>
  );
};

export default Countdown;