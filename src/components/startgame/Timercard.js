"use client"

import Image from "next/image";
const Timercard=(props)=>{
  const {formattedTime}=props;
  return(
    <div className="grid grid-cols-1">
    <div className="flex items-center justify-center text-center w-full">
      <div className="flex items-center justify-center ">
       <span><Image src={`/images/icons/clock.png`}  className="flex-shrink-0  w-[4.5rem]  text-center " width={200} height={200} alt=""  /></span>
       <span className="text-white text-xl font-semibold">{formattedTime} </span>
      </div>
    </div>
  </div>
  )
}
export default Timercard;