'use client'

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import useAuthStore from "../store/useAuthStore";
import useCoins from "../store/useCoins";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useRouter } from "next/navigation";
const Header=({data})=>{
  const {isAuthenticated,userdetails,logout}=useAuthStore();
  const router=useRouter()
  const {coins}=useCoins();
  const { theme, setTheme } = useTheme('light');
  theme === 'system' ? setTheme('light') :setTheme('light');
  const profilelogout=()=>{
    logout();
    localStorage.clear();
 }
 return(
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  bg-blue-950  text-sm py-4  sticky top-0">
    <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-center md:justify-between sm:px-6 lg:px-8 flex-wrap" aria-label="Global">
      <div className="flex items-center justify-between">
        <Link className="cursor-pointer flex-none  font-semibold text-white  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" href="/"><span className="text-xl">SKILL</span> <span className="text-3xl">GAMER</span></Link>
      </div>
      <div>
        <div className="flex gap-8">
         {isAuthenticated==true&&userdetails()?.['Full Name']?(
         <>
         <a className="flex flex-nowrap justify-center items-center text-base text-white"><span> <Image src={`/images/icons/eth-front-color.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={200} height={200} alt=""  /> </span><span className="mt-2">
          {coins==0?data?.Points:coins}
          </span></a>
         <a className="flex flex-nowrap justify-center items-center text-base text-white"><span> <Image src={`/images/icons/heart-red.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={200} height={200} alt=""  /> </span><span className="mt-2">{data?.Lifes}</span></a>
         <Dropdown>
         <DropdownTrigger> 
          <div className="font-bold text-white cursor-pointer hover:text-gray-400  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] flex flex-nowrap justify-center items-center">
            <span className="mt-2 hidden md:block">{userdetails()?.['Full Name']}</span><span> <Image src={`/images/icons/boy-clay.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={200} height={200} alt=""  /> </span>
         </div>
         </DropdownTrigger>
         <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new" onClick={()=>router.push('/account/profile/track-your-activity')}>Track your Activity</DropdownItem>
          <DropdownItem key="copy" onClick={()=>router.push('/account/profile/earn-points-history')}>Earn points history</DropdownItem>
          <DropdownItem key="delete" onClick={profilelogout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
         </Dropdown>
         </>)
         :(<><Link href='/account/login' scroll={true} className="font-bold text-white  hover:text-gray-400 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] flex flex-nowrap justify-center items-center"> <span> <Image src={`/images/icons/boy-clay.png`}  className="flex-shrink-0  w-[2rem]  text-center " width={200} height={200} alt=""  /> </span> <span className="mt-2 hidden md:block">Sign in</span></Link></>)}
        </div>
      </div>
    </nav>
  </header>
  
 )
}
export default Header;