'use client'
import  {  useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { Toaster,toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { apigetpointandlifes } from "@/services/apipointandlifes/apipointandlifes";
import Fullscreenloading from '../loading/Fullscreenloading';
const RootLayout= dynamic(() => import('../../app/layout'),{loading:()=><Fullscreenloading/>});
const Header= dynamic(() => import('../header/header'));
const Footer= dynamic(() => import('../footer/footer'));
const Mobilefooter= dynamic(() => import('../footer/mobilefooter'));
import useAuthStore from '../store/useAuthStore';
import useCoins from '../store/useCoins';
const Layout=({children,bgcolor})=>{
    const {isAuthenticated}=useAuthStore();
    const {setCoins}=useCoins();
    const [color,setcolor]=useState(null)
    useEffect(() => {
      window.fullScreen = true;
  
    }, []);
    useEffect(() => {
      toast.dismiss();
      setcolor(bgcolor)
    }, [bgcolor, color]);
    
    useEffect(() => {
      const channel = new BroadcastChannel('tabCommunicationChannel');
      channel.postMessage({
        status: 'Tab 1',
      });
      channel.onmessage = () => {
     
        const check=confirm("Close All other tabs and access this area")
        if(check){
          window.open("https://www.google.com", "_self");
          window.close();
        }
        else{
          channel.postMessage({
            status: 'Hello from Tab 1!',
          
          });
        }
      };
      
      return () => {
        channel.close();
      };
    }, []);
    const getpointandlifes=async()=>{
      if(isAuthenticated){
      const res= await apigetpointandlifes();
      setCoins(res.Points)
      return res;
      }
    }

    const {data}=useQuery('getpointandlifes',getpointandlifes, {refetchOnWindowFocus: false})

 return(
 
  <RootLayout bgcolor={bgcolor}>
      <ThemeProvider attribute="class">
   
              <div className={`flex flex-col justify-between h-screen font-BalisongUltra`}>
                <Header data={data??{}}/>
                <main>
                  {children}
                </main>
                <div>
                  <Footer/>
                  <Mobilefooter/>
    
                </div>
              </div>
          <Toaster position="top-right" reverseOrder={true}/>
          
      </ThemeProvider>
      </RootLayout>
    
  
 )
}
export default Layout;