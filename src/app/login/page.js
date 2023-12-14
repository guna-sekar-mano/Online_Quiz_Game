"use client";
import { useState} from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAuthStore from "../authStore";
import { apiadminlogin } from "@/services/apilogin/apilogin";
const Login=()=>{
  const { setToken, checkIsLoggedIn } = useAuthStore();
  const router=useRouter();
  const [formdata,SetFormdata]=useState({});
  const Changehandler=(e)=>{
    SetFormdata({...formdata,[e.target.name]:e.target.value})
  }
  const handlelogin=async(event)=>{
    event.preventDefault();
    var res=await apiadminlogin(formdata);
    if(res.message=="success"&&res.token){
       setToken(res.token);
       toast.success("Successfully Login");
       router.push('/admin/dashboard');
    }
    else{
      toast.error("Invalid Email or Password");
    }
  }
  return(
    <div className=" bg-gray-100">
  <div className=" flex  min-h-screen items-center justify-center py-16">
    <div className="w-full max-w-md mx-auto p-6">
      <div className=" bg-white border border-gray-200 rounded-xl shadow-sm ">
        <div className="p-4 sm:p-7">
          <div className="text-start mb-5">
            <h1 className="block text-2xl font-bold text-gray-800 mb-2">Sign in</h1>
            <p className="mb-2">Welcome! Let&apos;s get started. Sign in to explore</p>
          
          </div>

          <div className="my-5">
          

            <form onSubmit={handlelogin}>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 ">Email address</label>
                  <div className="relative">
                    <input type="email" id="email" name="email" value={formdata.email||''} onChange={Changehandler} className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " required aria-describedby="email-error"/>
                   
                  </div>
                </div>
               
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm mb-2 ">Password</label>
                  </div>
                  <div className="relative">
                    <input type="password" id="password" name="password" value={formdata.password||''} onChange={Changehandler} className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " required aria-describedby="password-error"/>
                  </div>
                 
                </div>
                <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm ">Sign in</button>
              </div>
            </form>
       
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login