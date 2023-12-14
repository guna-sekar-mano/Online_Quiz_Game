"use client"
import dynamic from "next/dynamic";
import ProtectedRoute from "@/components/store/ProtectedRoute";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Layout = dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>});
const Profile=()=>{

  return (
   
    <Layout>
        <ProtectedRoute allowedRoles={['User']}>
          
       </ProtectedRoute>
    </Layout>
   
  )
}
export default Profile;