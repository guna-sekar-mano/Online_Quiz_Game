"use client"
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { apigetactivelevels } from "@/services/apistartgame/apilevels";
import UseStorege from "@/components/store/UseStorege";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Levelcard = dynamic(() => import('../../../components/startgame/Levelcard'));
const Custoast = dynamic(() => import('../../../components/toast/Custoast'));
const Layout = dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>});
const Levels=()=>{
 
  const router=useRouter();
  const {clearlocalstorage}=UseStorege()
  const levels=[
    {Level:'Tutorial',textcolor:"text-blue-950",bgcolor:"bg-blue-950"},
    {Level:'Beginner',textcolor:"text-orange-600",bgcolor:"bg-orange-600"},
    {Level:'Intermediate',textcolor:"text-blue-600",bgcolor:"bg-blue-600"},
    {Level:'Advanced',textcolor:"text-purple-600",bgcolor:"bg-purple-600"},
    {Level:'Expert',textcolor:"text-red-600",bgcolor:"bg-red-600"}
  ]
  const getactivelevels=async()=>{
    clearlocalstorage();
    var res=await apigetactivelevels();
    var result =res.status==='Low Points'?'Low Points':levels.map((item,index) => {
        var i=res.filter((obj)=> obj.Max==5)
        return {
          ...item,
          Levellabel: item.Level.toUpperCase(),
          Status: res.find(obj => obj.Level == item.Level&&obj.Max==5) || i.length==index || index==0? 'Active' : 'Inactive'
        };   
    })
    return result;
  }
  const { data,isLoading } = useQuery('activeLevels', getactivelevels,{refetchOnWindowFocus: false});
  const checklevels=async(item)=>{
    if(item.Level=='Tutorial'){
       router.push(`/start-game/stages?level=${item.Level}`);
    }
    else{
      if(item.Status=="Active"){
        router.push(`/start-game/stages?level=${item.Level}`);
      }
      else{
        toast.custom((t) => (<Custoast t={t} label="Kindly complete a previous level to access this area" img="/images/icons/lock.png" 
        bgcolor="bg-yellow-600"
        />),{ duration: 3000 })
      }
    }
  }
  if(data==='Low Points'){
    router.push('/earn-points')
  }

  return(
   <Layout>
    {data!=='Low Points'&& (<section className="py-10">
          <div className="max-w-[80rem] w-full mx-auto px-6  sm:px-6 lg:px-8">

              <div>
                <div className="grid grid-cols-1">
                <div className="flex items-center justify-center">
                  <button className="py-3 px-6 bg-gradient-to-r from-gray-900 to-gray-950 text-white drop-shadow-xl shadow-xl rounded-xl text-2xl">SELECT LEVEL</button>
                </div>
              </div>
    
              {!isLoading&&(<Levelcard levelsdata={data} checklevels={checklevels}/>)}
            
            </div>
          </div>
      </section>)}
   </Layout>
  
  )
}
export default Levels;