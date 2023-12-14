"use client"
import dynamic from "next/dynamic";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import useCoins from "@/components/store/useCoins";
const Earnpointcard= dynamic(() => import('../../components/earn-points/Earpoincard'),{loading:()=><Spinner className="flex justify-center items-center min-h-screen"/>})
const Layout= dynamic(() => import('../../components/layout/layout'),{loading:()=><Spinner className="flex justify-center items-center min-h-screen"/>})
const Earnpoints=()=>{
    const router=useRouter()
    const {coins}=useCoins();
    if(coins!==0){
     router.back()
    }
    return(
        <Layout>
            <section className="font-poppins py-10">
                <div className="max-w-lg w-full mx-auto px-6  sm:px-6 lg:px-8">
                
                    <div className="flex items-center justify-center">
                        <Earnpointcard/>
                    </div>
                </div>
             
             </section>  
        </Layout>
    )
}
export default Earnpoints;