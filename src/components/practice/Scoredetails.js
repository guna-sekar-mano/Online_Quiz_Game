"use client"
import Image from "next/image";
const Scoredetails=(props)=>{
    const {checksession}=props;
  return(
    <div className="grid grid-cols-1">
    <div className="flex flex-col justify-center items-center text-center">
     
     <h1 className="text-white text-3xl lg:text-6xl italic [text-shadow:_0_3px_0_rgb(0_0_0_/_20%)] animate-fade-left animate-once mb-10">HURRAH?</h1>
     <h1 className="text-white text-xl lg:text-3xl italic [text-shadow:_0_3px_0_rgb(0_0_0_/_20%)] animate-fade-left animate-once mb-10">You have completed the practice</h1>
     
     <div className="flex items-center justify-center text-center w-full animate-[wiggleanim_2s_linear_infinite]">
           <button onClick={checksession} className="flex justify-center items-center py-6 px-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white drop-shadow-xl shadow-xl rounded-xl text-xl lg:text-3xl relative">

           <span>KNOW your score ?</span>
           <span className="absolute -bottom-12 lg:top-auto lg:-right-12 lg:bottom-auto">
               <Image src={`/images/icons/puzzle-gold.png`}  className="flex-shrink-0  w-[5rem]  text-center" width={200} height={200} alt=""  />
           </span> 
           </button>
       </div>
 

     
    </div>
</div>
  )
}
export default Scoredetails;