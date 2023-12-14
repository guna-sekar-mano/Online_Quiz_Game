'use client'
import Image from "next/image"
const Fullscreenloading=()=>{
    return(
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-sky-400 to-sky-500">
           <div>
           <Image src={`/images/icons/rocket-red.png`}  className="flex-shrink-0  w-[10rem] animate-fade-up animate-once" width={200} height={200} alt=""  />
           </div>

        </div>
    )
}
export default Fullscreenloading