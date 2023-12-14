"use client"
import { useSearchParams,useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { apigetstages } from "@/services/apistartgame/apistages";
import { useQuery } from "react-query";
import { Spinner } from "@nextui-org/react";
import UseStorege from "@/components/store/UseStorege";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Stagecard = dynamic(() => import('../../../components/startgame/Stagecard'));
const Custoast = dynamic(() => import('../../../components/toast/Custoast'));
const Layout = dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>});
const Lowpoints= dynamic(() => import('../../../components/error/Lowpoints'));
const Stages=()=>{
  const params=useSearchParams();
  const router=useRouter();
  const {clearlocalstorage}=UseStorege();
  const level=params.get('level');
  const getstages=async()=>{
    clearlocalstorage()
    var res=await apigetstages({Level:level});
    const {status,arr,arr1}=res;
    if(status=="Allowed" || status=="Low Points"){
      var result =status==='Low Points'?'Low Points': arr.map(item => {
        if (item.Stage) {
        return {
          Stage: item.Stage,
          Status: arr1.find(obj => (obj.Stage*1) + 1 ==(item.Stage*1)) ? arr1.filter(obj=>obj.Stage===item.Stage).length>0?'Completed':'Active' : arr1.filter(obj=>obj.Stage===item.Stage).length>0?'Completed':'Inactive'
        };
      }
      
      }).filter(Boolean);
      return result;
    }
    else{
      router.push('/')
      return [];
    }
  }
  const {data,isLoading}=useQuery("getstages",getstages,{refetchOnWindowFocus: false})
  if(data==='Low Points'){
    router.push('/earn-points')
  }
  const checkstage=(item)=>{
    if(item.Status==="Completed"){
      alert(`Stage ${item.Stage} has already been completed.`)
    }
    else if(item.Status=="Active" || item.Stage=='1'){
      router.push(`/start-game/ready?level=${level}&stage=${item.Stage}`)
    }
    else{
      toast.custom((t) => (<Custoast t={t} label="Kindly complete a previous stage to access this area" img="/images/icons/lock.png" bgcolor="bg-yellow-600"/>),{ duration: 3000 })
    }
  }
  if (isLoading) {

    return <div className="bg-gradient-to-r from-green-400 to-green-500 flex h-screen justify-center items-center"><Spinner/></div>;
  }
  if(data==='Low Points'){
    router.push('/earn-points')
  }
  return(

    <Layout bgcolor={'from-green-400 to-green-500'}>
        <section className="py-10">
            <div className="max-w-[80rem] w-full mx-auto px-4  sm:px-6 lg:px-8">
            {data==='Low Points'?<Lowpoints/>: (<div>  <div className="grid grid-cols-1">
                    <div className="flex items-center justify-center text-center w-full">
                        <button className="flex justify-center items-center py-4 px-12 bg-white text-gray-900 drop-shadow-xl shadow-xl rounded-xl text-lg relative">
                        <span className="absolute -top-6 -left-16">
                            <Image src={`/images/icons/crown.png`}  className="flex-shrink-0  w-[6rem]  text-center" width={200} height={200} alt=""  /></span> 
                        <span>{level}</span></button>
                    </div>
                </div>
               <Stagecard stagedata={data} checkstage={checkstage}/>
               </div>)}
            </div>
        </section>
   
   </Layout>
  
  )
}
export default Stages;