"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
import {  useDisclosure } from "@nextui-org/react"
import { useState } from "react"
import toast from "react-hot-toast"
import { apisavewatchandearn } from "@/services/apiearnpoints/apiwatchandearn"
import useCoins from "../store/useCoins"
const Bywatchingvideocard= dynamic(() => import('./Bywatchingvideocard'))
const Bywatchingadcard=(props)=>{
   const {data}=props
   const {isOpen,onOpenChange,onOpen, onClose} = useDisclosure();
   const [videoconfig,setVideoconfig] = useState({});
   const {setCoins}=useCoins();
   const handleads=(item)=>{
      if(item.Status!=='Complete'){
         setVideoconfig({vlength:item?.Label,vlink:item?.Adlink})
         onOpen()
      }else{
         alert('Already points earned')
      }
   }
   const handlesavewatchearn=async()=>{
      var res=await apisavewatchandearn(videoconfig)
      if(res.status === 'Success'){
         setCoins(res?.Points)
         data[data.findIndex(d=>d.Label===videoconfig?.vlength)].Status="Complete"
         toast.success(`You earned ${videoconfig?.vlength} points`)
         onClose()
      }
      else{
         toast.error("Try again later")
      } 
   }
    return(
      <>
        <div className="bg-white p-10 px-14 rounded-3xl drop-shadow-xl shadow-xl  relative flex flex-col justify-center items-center">
         
            <div className="absolute -top-6 py-3 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-xl font-semibold flex items-center">
            <Image src={`/images/icons/video-camera-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={50} height={50} alt=""  /> WATCH AD AND EARN

            </div>
            <div className="my-5">
            
            {data&&data.map((item,index)=> 
               <div className="flex justify-between gap-6" key={index}>
                  <div onClick={()=>handleads(item)} className="flex justify-center items-center mt-3 cursor-pointer w-full  py-2 px-4 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                  {item?.Label} SECOND

                  </div>
                  <div className="flex items-center justify-center mt-3 cursor-pointer  py-2 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                  <Image src={item?.Status=="Complete"?`/images/icons/tick-front-color.png`:`/images/icons/eth-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center animate-[rotatey_3s_linear_infinite] coin-3d-rotate" width={50} height={50} alt=""  /> {item?.Label}
                  </div>
               </div>
               )}
             
            </div>
            
        </div>
        <Bywatchingvideocard videoconfig={videoconfig} isOpen={isOpen} onOpenChange={onOpenChange} handlesavewatchearn={handlesavewatchearn}/>
        </>
    )
}
export default Bywatchingadcard