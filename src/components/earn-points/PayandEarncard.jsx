"use client"
import Image from "next/image"
const PayandEarncard=()=>{

    return(
        <div className="bg-white p-10 px-14 rounded-3xl drop-shadow-xl shadow-xl  relative flex flex-col justify-center items-center">
         
            <div className="absolute -top-6 py-3 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-xl font-semibold flex items-center">
            <Image src={`/images/icons/card-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={50} height={50} alt=""  /> PAY AND EARN
            </div>
            <div className="my-5">
             <div className="flex justify-between gap-6">
                <div className="flex justify-center items-center mt-3 cursor-pointer w-full  py-2 px-4 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                   20 RUPEES
                </div>
                <div className="flex items-center justify-center mt-3 cursor-pointer  py-2 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                <Image src={`/images/icons/eth-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={50} height={50} alt=""  /> 20
                </div>
             </div>
             <div className="flex justify-between gap-6">
                <div className="flex justify-center items-center mt-3 cursor-pointer w-full  py-2 px-2 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                  40 RUPEES 
                </div>
                <div className="flex items-center justify-center mt-3 cursor-pointer  py-2 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                <Image src={`/images/icons/eth-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={50} height={50} alt=""  /> 40
                </div>
             </div>
             <div className="flex justify-between gap-6">
                <div className="flex justify-center items-center mt-3 cursor-pointer w-full py-2 px-4 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                  60 RUPEES
                </div>
                <div className="flex items-center justify-center mt-3 cursor-pointer  py-2 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                <Image src={`/images/icons/eth-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={50} height={50} alt=""  /> 60
                </div>
             </div>
             <div className="flex justify-between gap-6">
                <div className="flex justify-center items-center mt-3 cursor-pointer w-full py-2 px-2 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                80 RUPEES
                </div>
                <div className="flex items-center justify-center mt-3 cursor-pointer  py-2 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                <Image src={`/images/icons/eth-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={50} height={50} alt=""  /> 80
                </div>
             </div>
             <div className="flex justify-between gap-6">
                <div className="flex justify-center items-center mt-3 cursor-pointer w-full py-2 px-4 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                 100 RUPEES
                </div>
                <div className="flex items-center justify-center mt-3 cursor-pointer  py-2 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                <Image src={`/images/icons/eth-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={50} height={50} alt=""  /> 100
                </div>
             </div>
           
            </div>
            
        </div>
    )
}
export default PayandEarncard