"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import UseAds from "../store/UseAds"
const Earnpointcard=()=>{
  const router=useRouter()
  const {setIsAdsEnabled}=UseAds()
 
    return(
        <div className="bg-white p-10 px-14 rounded-3xl drop-shadow-xl shadow-xl  relative flex flex-col justify-center items-center">
         
            <div className="absolute -top-6 py-3 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-xl font-semibold flex items-center">
            <Image src={`/images/icons/eth-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={50} height={50} alt=""  />  EARN POINTS
            </div>
            <div className="my-5">
              <div onClick={()=>router.push('/earn-points/learn-and-earn')} className="flex items-center justify-center mt-3 cursor-pointer w-full py-4 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-md lg:text-xl font-semibold">
                BY LEARNING
              </div>
              <div onClick={()=>router.push('/earn-points/refer-and-earn')}  className="flex items-center justify-center cursor-pointer mt-3 w-full py-4 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-md lg:text-xl font-semibold">
                BY REFERING
              </div>
              <div onClick={()=>{setIsAdsEnabled();router.push('/earn-points/by-watching-ad');}}  className="flex items-center justify-center cursor-pointer mt-3 w-full py-4 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-md lg:text-xl font-semibold">
                BY WATCHING AD
              </div>
              <div onClick={()=>router.push('/earn-points/pay-and-earn')} className="flex items-center justify-center mt-3 cursor-pointer w-full py-4 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-md lg:text-xl font-semibold">
                PAY AND EARN
              </div>
            </div>
        </div>
    )
}
export default Earnpointcard