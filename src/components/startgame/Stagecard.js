"use client"
import Image from "next/image";
const Stagecard=(props)=>{
  const {stagedata,checkstage,}=props;
  return(

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-10">
    
      {stagedata?.map((item,index)=>  
         <div key={index} onClick={()=>checkstage(item)} className={`animated-pop  relative cursor-pointer ${item?.Status=='Completed'?'bg-yellow-400':item?.Status=='Active' || item?.Stage=='1'?'bg-purple-500':'bg-white'} text-blue-950 lg:py-6 px-6 rounded-3xl mb-2 lg:my-4 drop-shadow-xl shadow-xl w-full`}
         style={{ animationDelay: `${ index * 500}ms` }}>
            <div className="flex flex-col items-center  justify-between">
                <div className="hidden lg:block">
                    <p className="text-xl font-semibold my-2 text-center">STAGE</p>
                </div>
                <div className=" text-blue-950  my-4 lg:my-14">
                    <span className="flex items-center justify-center text-xl lg:text-3xl font-extrabold"><span className="block lg:hidden mr-1">STAGE</span> {item?.Stage}</span>
                </div>
                <div className="absolute -top-4 -left-6 lg:-bottom-10 lg:top-auto lg:left-auto">
                    <Image src={item?.Status=='Active' || item?.Stage=='1' || item?.Status=='Completed'?`/images/icons/medal.png`:`/images/icons/lock.png`}  className="flex-shrink-0  w-[6rem]  text-center " width={200} height={200} alt=""  />
               </div>
           </div>
        </div>
        )}
       
    </div>
     
  )
}
export default Stagecard;