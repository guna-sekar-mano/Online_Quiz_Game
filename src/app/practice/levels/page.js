"use client"
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Levelcard = dynamic(() => import('../../../components/practice/Levelcard'));
const Layout = dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>});
import { useEffect } from "react";
import UseStorege from "@/components/store/UseStorege";
const Level=()=>{
  const {clearlocalstorage}=UseStorege();
  const levelsdata=[
    {Level:'Aptitude'},
    {Level:'Tech'},
    {Level:'Gk'},
    {Level:'English'},
    {Level:'Science'},
    {Level:'Maths'}
  ];
  useEffect(()=>{
    clearlocalstorage();
  },[])

  return(
  
   <Layout bgcolor={'from-sky-400 to-sky-500'}>
    <section className="py-10">
        <div className="max-w-[80rem] w-full mx-auto px-6  sm:px-6 lg:px-8">
          
            <Levelcard levelsdata={levelsdata}/>    
            <div className="grid grid-cols-1 mt-8">
                 <div className="animated-pop"  style={{ animationDelay: `${ (levelsdata.length + 1) * 500}ms` }}>
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
export default Level;