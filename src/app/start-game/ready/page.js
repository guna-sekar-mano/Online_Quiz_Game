"use client"
import { useSearchParams,useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Layout = dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>});
const Ready=()=>{
  const params=useSearchParams();
  const router=useRouter();
  const inittest=()=>{
    localStorage.setItem('testinit',true);
    router.push(`/start-game/play?level=${params.get('level')}&stage=${params.get('stage')}`)
  }
  return(

   <Layout bgcolor={'from-sky-400 to-sky-500'}>
    <section className="py-10">
        <div className="max-w-[80rem] w-full mx-auto px-6  sm:px-6 lg:px-8">
          
             <div className="grid grid-cols-1">
                 <div className="flex flex-col justify-center items-center text-center">
                  
                  <h1 className="text-white text-5xl italic [text-shadow:_0_3px_0_rgb(0_0_0_/_20%)] animate-fade-left animate-once">ARE YOU READY?</h1>
                  <div className="animate-[wiggleanim_2s_linear_infinite]">
                  <Image src={`/images/icons/rocket-red.png`}  className="flex-shrink-0  w-[10rem] animate-fade-up animate-once animate-delay-500" width={200} height={200} alt=""  />
                  </div>
                  <div className="transform scale-100 transition-transform duration-300 hover:scale-110">
                  <div onClick={inittest} className=" cursor-pointer mt-5 text-6xl italic [text-shadow:_0_3px_0_rgb(0_0_0_/_20%)] animate-fade-left animate-once animate-delay-1000">Start</div>
                  </div>
                  
                  
                 </div>
             </div>
            <div className="grid grid-cols-1 mt-8">
                 <div className="animated-pop"  style={{ animationDelay: `${ 3* 500}ms` }}>
                  <div className="flex justify-center">
                    <Link href={'/'} className="flex items-center text-xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">
                      <span><Image src={`/images/icons/play-red.png`}  className="flex-shrink-0  w-[2rem]  text-center rotate-180" width={200} height={200} alt=""  /></span>
                      <span className="mt-auto"> BACK TO HOME</span>
                      </Link>
                  </div>
                 </div>
            </div>
        </div>
    </section>
   </Layout>
   
  )
}
export default Ready;