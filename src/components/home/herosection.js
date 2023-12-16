'use client'
import Image from "next/image";
const Herosection=(props)=>{
  const {handletutorial,checksession}=props;
  return(
   
 <section>
    <div className="max-w-[85rem] w-full mx-auto px-6 sm:px-6 lg:px-8">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-14">
          <div onClick={handletutorial}className="animated-pop relative flex items-center justify-center text-center cursor-pointer bg-gradient-to-r py-6 lg:py-20 from-gray-800 to-gray-900   shadow rounded-3xl text-white"
           style={{ animationDelay: `0ms` }}>
            <div>
              <div className="flex items-center justify-center lg:block">
                <div className="flex justify-center">
                <Image src={`/images/icons/key.png`}  className="flex-shrink-0 w-[8rem] lg:w-[15rem]  text-center absolute -top-10 lg:static -left-6" width={150} height={150} alt="" decoding="async"   priority={true}/>
                </div>
                <div>
                  <h3 className="text-xl lg:text-5xl font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">PRACTICE</h3>
                </div>
              
              </div>
              
            </div>
          </div>
          <div onClick={checksession}  className="animated-pop relative flex items-center justify-center text-center cursor-pointer  bg-gradient-to-r py-6 lg:py-20 from-red-700 to-red-800   shadow rounded-3xl text-white"
          style={{ animationDelay: `500ms` }}>
            <div>
              <div className="flex items-center justify-center lg:block">
                <div  className="flex justify-center">
                  <Image src={`/images/icons/trophy.png`}  className="flex-shrink-0 w-[8rem] lg:w-[15rem] text-center absolute -top-10 lg:static -left-6" width={150} height={150} alt="" decoding="async"  priority={true}/>
                </div>
                <div>
                <h3 className="text-lg lg:text-5xl font-semibold  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">START GAME</h3>
                </div>
              </div>
            
              
            </div>
          </div>
      </div>
    </div> 
    
 </section>

  )
}
export default Herosection;