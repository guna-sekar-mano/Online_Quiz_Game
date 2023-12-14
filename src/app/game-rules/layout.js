'use client';
import ProtectedRoute from "@/components/store/ProtectedRoute";
const Gameruleslayout=({children})=>{
 

  return(
   
    <ProtectedRoute allowedRoles={['User']}>
       {children}
    </ProtectedRoute>
    
  )
}
export default Gameruleslayout;