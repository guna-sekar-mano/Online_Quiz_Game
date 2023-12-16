"use client"
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { apiinitreferandearn } from "@/services/apiearnpoints/apireferandearn";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
import { Spinner } from "@nextui-org/react";
//import { useRouter } from "next/navigation";
const ReferandEarncard= dynamic(() => import('../../../components/earn-points/ReferandEarncard'))
const Layout= dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>})

const ReferandEarn=()=>{
   // const router=useRouter();
    const handleinitreferandearn=async()=>{
     const res=await apiinitreferandearn()
     var result =res?.refercatgory.map(category => {
       var ifind=res?.resinit.filter((item)=> item.Historydata.EarnpointCategory==category)
       return {
         Label: category.toUpperCase(),
         Status: ifind.length===0? 'Incomplete' : 'Complete'
       };   
      })
     return result
    }
    const {data,isLoading}=useQuery('initreferandearn',handleinitreferandearn,{refetchOnWindowFocus:false})
  
    return(
        <Layout>
            <section className="font-poppins">
                <div className="max-w-lg w-full mx-auto px-6  sm:px-6 lg:px-8">
                  
                    <div className="flex items-center justify-center">
                    {isLoading?<Spinner/>:<ReferandEarncard data={data}/>}
                    </div>
                </div>
    
             </section>  
        </Layout>
    )
}
export default ReferandEarn;