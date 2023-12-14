'use client'
import {Snippet} from "@nextui-org/snippet";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Profilecard=(props)=>{
    const {userdetails,profilelogout}=props
    const router=useRouter()
    return(
        <section className="py-10 font-poppins">
          <div className="max-w-[60rem] w-full mx-auto px-4  sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 animate-fade-left">
                <div className="p-5 py-10 bg-white shadow rounded-lg">
                    <div className="grid grid-cols-12 gap-6">
                     <div className="mb-3 text-center col-span-full lg:col-span-4">
                        <div>
                          <div className="flex justify-center">
                          <Image
                            src={`/images/profile.png`}
                            className="w-[5rem]  text-center mb-2"
                            width={200}
                            height={200}
                            alt=""
                          />
                          </div>
                          
                        
                            <Snippet symbol="User ID:">{userdetails()?.['userId']}</Snippet>
                          
                        </div>
                     </div>
                      <div className="col-span-full lg:col-span-8 flex items-center justify-center">
                       <div>
                        <div className="flex gap-2 lg:gap-6 mb-5 flex-wrap">
                          <div><span className="font-bold">Name:</span> {userdetails()?.['Full Name']}</div>
                          <div><span className="font-bold">Email:</span> {userdetails()?.['Email']}</div>
                        </div>
                          <div className="flex gap-2 lg:gap-6 items-center flex-wrap">
                          
                          <div onClick={()=>router.push('/account/profile/track-your-activity')} className="py-3 px-4 cursor-pointer bg-gradient-to-r from-gray-900 to-gray-950 text-white drop-shadow-xl shadow-xl rounded-xl text-lg w-full lg:w-auto text-center">Track your Activity</div>
                          <div onClick={()=>router.push('/account/profile/earn-points-history')} className="py-3 px-4 cursor-pointer bg-gradient-to-r from-gray-900 to-gray-950 text-white drop-shadow-xl shadow-xl rounded-xl text-lg w-full lg:w-auto text-center">Earn points history</div>
                          <button onClick={profilelogout} className="py-3 px-4 bg-gradient-to-r from-gray-900 to-gray-950 text-white drop-shadow-xl shadow-xl rounded-xl text-lg w-full lg:w-auto text-center">Logout</button>
                          </div>
                          </div>
                       
                      </div>
                      
                    </div>
                </div>
                
              </div>
          </div>
       </section>
    )
}
export default Profilecard