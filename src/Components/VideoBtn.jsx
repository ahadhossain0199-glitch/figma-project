import React from 'react'
import playButton from '../assets/play-button.png'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Video from '../assets/laughing-video.mp4'

const VideoBtn = () => {


  const [open, setOpen] = React.useState(false);
  const handleopen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '10000',
  height:'800',
  outlin: 'none',
 
};



  return (
  <div className='bg-[url(./assets/video-img.png)] bg-no-repeat bg-center bg-cover w-full lg:h-[800px] h-100 flex items-center justify-center'>

      <div className='bg-[#734BDF] rounded-full flex items-center justify-center md:w-25 w-20 md:h-25 h-20 animate-pulse cursor-pointer'>
        <div onClick={handleopen}>
          <img src={playButton} alt="" />
        </div>
      </div>

          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <video src={Video}  autoPlay></video>
        </Box>
      </Modal>
      
    </div>

    
  )
}

export default VideoBtn

