
'use client'
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { apisendotp, apiregisterUser } from "@/services/apiaccount/apiaccount";
import { useDisclosure } from "@nextui-org/react";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Registerform = dynamic(() => import('../../../components/account/Registerform'));
const Custoast = dynamic(() => import('../../../components/toast/Custoast'));
const Verifyotp = dynamic(() => import('../../../components/account/Verifyotp'));
const Layout = dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>});
const Register=()=>{
    
    const [formdata,setFormdata]=useState({});
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const handlechange=(e)=>setFormdata({...formdata,...{[e.target.name]:e.target.value}})
    const router=useRouter();
    const query=useSearchParams()
    const {isOpen, onOpen, onClose} = useDisclosure();
    const sendotp=async(e)=>{
        e.preventDefault();
        setLoading(true)
        var res=await apisendotp(formdata);
        if(res.status=="OTP Sent"){
         toast.custom((t) => (<Custoast t={t} label={res.status} img="/images/icons/thumb-up.png" 
           bgcolor="bg-green-600"
           />),{ duration: 3000 })
           onOpen()
           setLoading(false)
         //router.push('/account/login');
        }
        else if(res.status=="Already email exists"){
           toast.custom((t) => (<Custoast t={t} label="Already email exists or register to new email" img="/images/icons/mail.png" 
           bgcolor="bg-red-600"
           />),{ duration: 3000 })
        }
        else{
         toast.error("Try again later!")
        }
    }
    const userregister=async(e)=>{
        e.preventDefault();
        var res=await apiregisterUser({Email:formdata.Email,OTP:otp,RefId:query.get('refid')});
         if(res.status=="Sucessfully registered"){
          toast.custom((t) => (<Custoast t={t} label={res.status} img="/images/icons/thumb-up.png" 
            bgcolor="bg-green-600"
            />))
            onClose();
            router.push('/account/login');
         }

         else{
          toast.error("Invalid OTP")
         }
       
      }

    return(
       
        <Layout>
        <section className="py-10">
            <div className="max-w-[35rem] w-full mx-auto px-4  sm:px-6 lg:px-8">
                <div className="grid grid-cols-1">
                    <div className=" p-4 md:p-10 animate-fade-left">
                         <div className="mb-5 text-center flex justify-center">
                         <Image src={`/images/icons/boy.png`}  className="flex-shrink-0  w-[8rem]  text-center " width={200} height={200} alt=""  />
                         </div>
                         <Registerform loading={loading} handlechange={handlechange} sendotp={sendotp} />
                         <div className="mt-3 text-center">
                            <Link href={'/account/login'} className="text-xs text-blue-950 hover:text-blue-500">Already have an account? Sign in</Link>
                         </div>
                    </div>
                </div>
            </div>
        </section>
       <Verifyotp isOpen={isOpen} onClose={onClose} otp={otp} setOtp={setOtp} userregister={userregister}/>
     
        </Layout>
      
    )
}
export default Register;