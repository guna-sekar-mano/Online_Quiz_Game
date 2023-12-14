"use client"
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { apiinitlearnandearn } from "@/services/apiearnpoints/apilearnandearn";
import { useRouter } from "next/navigation";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const LearnandEarncard= dynamic(() => import('../../../components/earn-points/LearnandEarncard'))
const Layout= dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>})
const LearnandEarn=()=>{
  const router=useRouter();
   const handleinitlearnandearn=async()=>{
    const res=await apiinitlearnandearn()
    var result =res?.learncatgory.map(category => {
      var ifind=res?.resinit.filter((item)=> item.Historydata.EarnpointCategory==category)
      return {
        Label: category.toUpperCase(),
        Status: ifind.length===0? 'Incomplete' : 'Complete'
      };   
     })
    return result
   }
   const {data}=useQuery('initlearnandearn',handleinitlearnandearn,{refetchOnWindowFocus:false})
   const handlecheckinitlearnandearn=(item) => {
    if(item.Status!=='Complete'){
      router.push(`/earn-points/learn-and-earn/${item.Label}`)
    }
    else{
      alert("Already points earned")
    }
    
   }
    return(
        <Layout>
            <div className="font-poppins">
                <div className="max-w-lg w-full mx-auto px-6  sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1">
                    <div className="flex items-center justify-center">
                        <LearnandEarncard data={data} handlecheckinitlearnandearn={handlecheckinitlearnandearn}/>
                    </div>
                  </div>
                </div>
             
             </div>  
        </Layout>
    )
}
export default LearnandEarn;