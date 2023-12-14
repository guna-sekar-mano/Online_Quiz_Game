"use client"
import dynamic from "next/dynamic";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Bywatchingadcard= dynamic(() => import('../../../components/earn-points/Bywatchingadcard'))
const Layout= dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>})
import UseAds from "@/components/store/UseAds";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { apiinitwatchadandearn } from "@/services/apiearnpoints/apiwatchandearn";
const Bywatchingad=()=>{
    const router=useRouter();
    const {checkAdsEnabled}=UseAds();
    if(!checkAdsEnabled()){
        router.push('/')
    }
    const handleinitwatchadandearn=async()=>{
        const res=await apiinitwatchadandearn()
        var result =res?.watchadcatgory.map(category => {
            console.log(category.Adtotalseconds)
          var ifind=res?.resinit.filter((item)=> item.Historydata.EarnpointCategory==category.Adtotalseconds)
          return {
            Label: category.Adtotalseconds,
            Adlink: category.Adlink,
            Status: ifind.length===0? 'Incomplete' : 'Complete'
          };   
         })
        return result
    }
    const {data}=useQuery('initwatchadandearn',handleinitwatchadandearn,{refetchOnWindowFocus:false})
    return(
        <Layout>
            <section className="font-poppins">
                <div className="max-w-[85rem] w-full mx-auto px-6  sm:px-6 lg:px-8"> 
                    <div className="flex items-center justify-center">
                        <Bywatchingadcard data={data}/>
                    </div>
                </div>
            </section>  
        </Layout>
    )
}
export default Bywatchingad;