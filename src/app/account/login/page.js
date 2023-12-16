'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
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

    <Loginform handlechange={handlechange} userlogin={userlogin}/>
                      

    </Layout>
 )
}
export default Login;