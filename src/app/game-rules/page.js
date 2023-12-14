"use client"
import dynamic from "next/dynamic";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Gamerulescard= dynamic(() => import('../../components/gamerules/Gamerulescard'))
const Layout= dynamic(() => import('../../components/layout/layout'),{loading:()=><Fullscreenloading/>})
const Gamerules=()=>{
    return(
        <Layout>
            <section className="font-poppins py-10">
                <div className="max-w-[60rem] w-full mx-auto px-6  sm:px-6 lg:px-8">
                   
                    <div>
                        <Gamerulescard/>
                    </div>
                </div>
             
             </section>  
        </Layout>
    )
}
export default Gamerules;