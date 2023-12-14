"use client"
import Image from "next/image";
import Link from "next/link";
const Levelcard=(props)=>{
  const {levelsdata}=props;
  return(

  <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 ">

    <div className="animated-pop relative flex items-center justify-center text-center  bg-gradient-to-r py-6 lg:py-20 from-gray-800 to-gray-900   shadow rounded-3xl text-white"
           style={{ animationDelay: `0ms` }}>
            <div>
              <div className="flex items-center justify-center lg:block">
                <div className="flex justify-center">
                <Image src={`/images/icons/key.png`}  className="flex-shrink-0 w-[8rem] lg:w-[15rem]  text-center absolute -top-10 lg:static -left-6" width={200} height={200} alt=""  />
                </div>
                <div>
                  <h3 className="text-xl lg:text-5xl font-semibold drop-shadow-xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">PRACTICE</h3>
                </div>
              
              </div>
              
            </div>
      </div>
   
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
      {levelsdata.map((item,index)=>
        <Link href={`/practice/ready?c=${item.Level}`} key={index} className={`animated-pop relative cursor-pointer bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 rounded-3xl   drop-shadow-xl shadow-xl w-full`}
        style={{ animationDelay: `${ (index + 1) * 500}ms` }}>
        <div className="flex items-center justify-center ">
       
          <div className="my-4 lg:my-20">
              <p className="text-lg lg:text-xl font-semibold lg:my-2 text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{item.Level}</p>
          </div>
        
        </div>
      </Link>
      )}
      </div>
     
  </div>
  
           
  )
}
export default Levelcard;