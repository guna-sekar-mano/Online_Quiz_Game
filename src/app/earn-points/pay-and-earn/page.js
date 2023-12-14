"use client"
import dynamic from "next/dynamic";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const PayandEarncard= dynamic(() => import('../../../components/earn-points/PayandEarncard'))
const Layout= dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>})
const PayandEarn=()=>{
    return(
        <Layout>
            <section className="font-poppins">
                <div className="max-w-lg w-full mx-auto px-6  sm:px-6 lg:px-8">
                  
                    <div className="flex items-center justify-center">
                        <PayandEarncard/>
                    </div>
                </div>
             
             </section>  
        </Layout>
    )
}
export default PayandEarn;