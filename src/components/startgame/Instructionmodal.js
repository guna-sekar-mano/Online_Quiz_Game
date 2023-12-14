"use client"
import { Dialog } from 'primereact/dialog';
import Link from 'next/link';
import Image from "next/image";
const Instructionmodal=(props)=>{
  const {level,stage,instructionModal,setinstructionModal}=props;
  return(
    <>
    <Dialog header="Game Instructions" visible={instructionModal} onHide={() => setinstructionModal(false)}>
        <div className="p-4 md:p-5">
           <div >
             
              <div>
              <ul className="space-y-3 text-sm mb-5">
              <li className="flex space-x-3">
                <span className="text-gray-800 dark:text-gray-400">
                <i className="fa-solid fa-check  text-blue-600"></i>  This is a FREE online test. Beware of scammers who ask for money to attend this test.
                </span>
              </li>
            
              <li className="flex space-x-3">
                <span className="text-gray-800 dark:text-gray-400">
                <i className="fa-solid fa-check  text-blue-600"></i>  Each question carries 1 mark; there are no negative marks.
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="text-gray-800 dark:text-gray-400">
                <i className="fa-solid fa-check  text-blue-600"></i>  DO NOT close the window.
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="text-gray-800 dark:text-gray-400">
                <i className="fa-solid fa-check  text-blue-600"></i> All the best!
                </span>
              </li>
            </ul>
            </div>
            </div>
            <div className="flex justify-center"> 
                <Link href={`/start-game/play?level=${level}&stage=${stage}`} className='flex items-center py-3 px-4 bg-gradient-to-tl from-gray-900 to-gray-950 text-white shadow rounded-xl'>
                    
                <span><Image src={`/images/icons/crown.png`}  className="flex-shrink-0  w-[1.5rem]  text-center" width={200} height={200} alt=""  /></span>    Play
                    
                    </Link>
           </div>
          </div>
   </Dialog>
   </>
  )
}
export default Instructionmodal;