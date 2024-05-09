
import { useRef } from 'react';
import './useRefPlayer.css'

const UseRefPlayer = () => {


const videoRef = useRef();

const handlePlay = () => {
    videoRef.current.play();
};
const handlePause = () => {
    videoRef.current.pause();
};

  return (
    <div className='video-container'>
      <div className="grid-btn">
        <button className="btn" onClick={handlePlay}>
            Play
        </button>
        <button className="btn btn-pause" onClick={handlePause}>
            Pause
        </button>
      </div>
      <video ref={videoRef}>
        <source src='/video/video.mp4' />
      </video>
    </div>
  )
}

export default UseRefPlayer
