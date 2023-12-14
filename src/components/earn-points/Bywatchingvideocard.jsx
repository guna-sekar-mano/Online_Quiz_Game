"use client"
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Spinner,Modal,ModalContent } from '@nextui-org/react';
const Bywatchingvideocard=(props)=>{
  const {videoconfig,isOpen,onOpenChange,handlesavewatchearn} = props;
    const [isPlaying, setIsPlaying] = useState(true);
    const [playedSeconds, setPlayedSeconds] = useState(0);
    return(
      <div>
      <Modal 
      size='5xl'
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      placement='center'
    >
      <ModalContent>
        {() => (
        <div onContextMenu={(e)=>e.preventDefault()} className="bg-white py-60 rounded-3xl drop-shadow-xl shadow-xl  relative flex flex-col justify-center items-center overflow-hidden">
            <div className=' absolute top-0 right-1 rounded text-dark bg-blue-500 text-white  p-1  flex justify-start z-20'>
            <p>Current playback time: {Math.floor(playedSeconds)} seconds</p>
            </div>
            <div>
            <ReactPlayer
            url={videoconfig?.vlink}
           controls={false}
            playing={isPlaying}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            onProgress={(progress) => setPlayedSeconds(progress.playedSeconds)}
            onEnded={()=>handlesavewatchearn()}
            onReady={()=><Spinner/>}
            config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
                 
                  },
                },
              
              }
              
            
            }
            
           />
           </div>
           <div className='flex justify-center items-center gap-2 py-2 absolute bottom-0 z-20'>
           <button className='py-2 px-4 bg-blue-500 text-white rounded-full' onClick={()=>setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
          
           </div>
         
     
        </div>
      )}
      </ModalContent>
      </Modal>
</div>
    )
}
export default Bywatchingvideocard