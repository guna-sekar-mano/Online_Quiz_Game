"use client"
import Image from "next/image"
const LearnandEarncard=(props)=>{
   const {data, handlecheckinitlearnandearn} = props;
    return(
        <div className="bg-white p-10 px-14 rounded-3xl drop-shadow-xl shadow-xl  relative flex flex-col justify-center items-center">
         
            <div className="absolute -top-6 py-3 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-xl font-semibold flex items-center">
            <Image src={`/images/icons/notebook-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={50} height={50} alt=""  /> LEARN AND EARN
            </div>
            <div className="my-5">
           {data&&data.map((item,index) => 
             <div className="flex justify-between gap-6" key={index}>
                <div onClick={()=>handlecheckinitlearnandearn(item)} className="flex justify-center items-center mt-3 cursor-pointer w-full py-2 px-1 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                  20 {item?.Label}
                </div>
                <div className="flex items-center justify-center mt-3 cursor-pointer  py-2 px-6 bg-gradient-to-r grow text-center from-blue-950 to-blue-950 text-white drop-shadow-xl shadow-xl rounded-xl text-base lg:text-md font-semibold">
                <Image src={item?.Status=="Complete"?`/images/icons/tick-front-color.png`:`/images/icons/eth-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center animate-[rotatey_3s_linear_infinite] coin-3d-rotate" width={50} height={50} alt=""  /> 20
                </div>
             </div>
              )}
            </div>
           
        </div>
    )
}
export default LearnandEarncard