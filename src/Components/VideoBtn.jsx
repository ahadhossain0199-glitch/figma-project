import React from 'react'
import playButton from '../assets/play-button.png'

const VideoBtn = () => {
  return (
  <div className='bg-[url(./assets/video-img.png)] bg-no-repeat bg-center bg-cover w-full lg:h-[800px] h-100 flex items-center justify-center'>

      <div className='bg-[#734BDF] rounded-full flex items-center justify-center md:w-25 w-20 md:h-25 h-20 animate-pulse cursor-pointer'>
        <div>
          <img src={playButton} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default VideoBtn

