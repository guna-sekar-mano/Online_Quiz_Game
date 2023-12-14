'use client';
import AuthGuard from "@/app/AuthGuard";
const Earnpointslayout=({children})=>{
    const user = AuthGuard();
    if(!user){
        return(
          <div>
            <p>loading.....</p>
          </div>
        )
    }
  return(
    <>
    {children}
    </>
  )
}
export default Earnpointslayout;