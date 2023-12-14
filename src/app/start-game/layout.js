'use client';
import ProtectedRoute from "@/components/store/ProtectedRoute";
const Startgamelayout=({children})=>{
 

  return(
   
    <ProtectedRoute allowedRoles={['User']}>
       {children}
    </ProtectedRoute>
    
  )
}
export default Startgamelayout;