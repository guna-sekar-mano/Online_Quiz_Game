'use client';
import ProtectedRoute from "@/components/store/ProtectedRoute";
import useCoins from "@/components/store/useCoins";
import { useRouter } from "next/navigation";
const Earnpointslayout=({children})=>{
  const router=useRouter()
  const {coins}=useCoins();
  if(coins!==0){
   router.back()
  }
  return(
    <ProtectedRoute allowedRoles={['User']}>
       {children}
    </ProtectedRoute>
  )
}
export default Earnpointslayout;