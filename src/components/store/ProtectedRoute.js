'use client'
import { useRouter } from "next/navigation";
import useAuthStore from "./useAuthStore";
const ProtectedRoute = ({ children, allowedRoles }) => {

    const router = useRouter();
    const {isAuthenticated,decodeToken,logout} = useAuthStore();
    const userRole = decodeToken() ? decodeToken().Role : null;
    const tokenExpiration = decodeToken() ? decodeToken().exp : null;
    const currentTimestamp = Math.floor(Date.now() / 1000);
  
    if (tokenExpiration && tokenExpiration < currentTimestamp) {
      typeof location !== 'undefined' ?logout():null;
      return null;
    }
    if (!isAuthenticated) {
      typeof location !== 'undefined' ?router.push('/account/login'):null;
      return null;
    }

    if (!allowedRoles.includes(userRole)) {
      typeof location !== 'undefined' ?router.push('/'):null;
      return null;
    }
  
    return children;
  };
  
  export default ProtectedRoute;