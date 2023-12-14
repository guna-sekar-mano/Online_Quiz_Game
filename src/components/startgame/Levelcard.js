"use client"
import Image from "next/image";
const Levelcard=(props)=>{
  const {levelsdata,checklevels}=props;
  return(
    
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-10">
      {levelsdata?.map((item,index)=>
        <div key={index} onClick={()=>checklevels(item)} className={`animated-pop relative cursor-pointer ${item.bgcolor} text-white lg:py-6 px-6 rounded-3xl  lg:my-4 drop-shadow-xl shadow-xl w-full`}
        style={{ animationDelay: `${ index * 500}ms` }}>
        <div className="flex items-center justify-center ">
          <div className={`${item.textcolor} hidden  lg:flex items-center  absolute rounded-full py-4 px-4 shadow-xl bg-white lg:left-[35%] lg:-top-6`}>
              <span className="h-8 w-8 flex items-center justify-center text-3xl font-extrabold">{index+1}</span>
          </div>
          <div className="my-4 lg:my-20">
              <p className="text-lg lg:text-xl font-semibold lg:my-2 text-center">{item.Levellabel}</p>
          </div>
          <div className="absolute -top-4 -left-6 lg:-bottom-10 lg:top-auto lg:left-auto">
              <Image src={item.Status=="Active"?`/images/icons/key.png`:`/images/icons/lock.png`}  className={`flex-shrink-0 w-[5rem] lg:w-[6rem]  text-center ${item.Status=="Active"?'animate-rotate-y animate-infinite animate-duration-[2000ms] animate-ease-linear animate-alternate-reverse}':'animate-[wiggleanim_2s_linear_infinite]'}`} width={200} height={200} alt=""  />
          </div>
        </div>
      </div>
      )}
  </div>
  
           
  )
}
export default Levelcard;