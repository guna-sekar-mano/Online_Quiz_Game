'use client'
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import useAuthStore from "@/components/store/useAuthStore";
import { apigetstartgameresult } from "@/services/apistartgame/apistartgame";
import { useQuery } from "react-query";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Scoredetails = dynamic(() => import('../../../components/practice/Scoredetails'));
const Scoreresult = dynamic(() => import('../../../components/practice/Scoreresult'))
const Layout = dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>})
 const Score=()=>{
 const {isAuthenticated}=useAuthStore();
 const params=useSearchParams()
 const router=useRouter();
 const getgamescore=async()=>{
  var res=await apigetstartgameresult({_id:JSON.parse(params.get('id'))});
  return res
}
const { data } = useQuery('score', getgamescore,{refetchOnWindowFocus: false});
 const playagain=()=>{
    router.push(`/start-game/stages?level=${data.Level}`)
 }
 const checksession=()=>{
  isAuthenticated?router.push('/start-game/levels'):router.push('/account/login')
};
 return(

    <Layout bgcolor={'from-sky-400 to-sky-500'}>
        <section className="py-10">
        <div className="max-w-[80rem] w-full mx-auto px-4  sm:px-6 lg:px-8 animate-fade-left">
           {isAuthenticated?<Scoreresult result={data} playagain={playagain}/> :<Scoredetails checksession={checksession}/>}
          
            
            <div className="grid grid-cols-1 mt-16">
                 <div className="animated-pop"  style={{ animationDelay: `${ 1* 500}ms` }}>
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
export default Score;

