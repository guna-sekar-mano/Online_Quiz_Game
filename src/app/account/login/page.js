'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { apiuserlogin } from "@/services/apiaccount/apiaccount";
import useAuthStore from "@/components/store/useAuthStore";
import { apiupdateguestuser } from "@/services/apipractice/apipractice";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Loginform = dynamic(() => import('../../../components/account/Loginform'));
const Custoast = dynamic(() => import('../../../components/toast/Custoast'));
const Layout = dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>});

const Login=()=>{
  const {login}=useAuthStore();
  const router=useRouter();   
  const [formdata,setFormdata]=useState({});
  const handlechange=(e)=>setFormdata({...formdata,...{[e.target.name]:e.target.value}});
  const updateguestuser=async(id)=>{
    var {status}=await apiupdateguestuser(id)
    if(status=="ok"){
      router.push(`/practice/score`)
    }
  }
  const userlogin=async(e)=>{

    e.preventDefault();
    var res=await apiuserlogin(formdata);
    const local=JSON.parse(localStorage.getItem('Guestid'));
    if(res.status=="Login failed"){
      toast.custom((t) => (<Custoast t={t} label="Invalid email or password!" img="/images/icons/mail.png" 
      bgcolor="bg-red-600"
      />),{ duration: 3000 })
    }
    else if (res.status === "Login Success") {
      login(res.token);
      local?._id?updateguestuser(local):router.push('/game-rules'); 
    }
    else{
      toast.error("Try again later!")
    }
  }   
 return(
    <Layout>
      <section>
          <div className="max-w-[35rem] w-full mx-auto px-4  sm:px-6 lg:px-8">
              <div className="grid grid-cols-1">
                  <div className=" p-4 md:p-10 animate-fade-left">
                      <div className="mb-5 text-center flex justify-center">
                        <Image src={`/images/icons/boy.png`}  className="flex-shrink-0  w-[8rem]  text-center" width={200} height={200} alt=""  />
                      </div>
                      <Loginform handlechange={handlechange} userlogin={userlogin}/>
                      <div className="mt-3 text-center">
                          <Link href={'/account/register'} className="text-xs text-blue-950 hover:text-blue-500">New to SKILL GAMER? Create an account</Link>
                      </div>
                  </div>
              </div>
          </div>
     </section>

    </Layout>
 )
}
export default Login;