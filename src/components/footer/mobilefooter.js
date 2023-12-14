'use client'
import Link from "next/link";
const Mobilefooter=()=>{
  return(

<footer className="mt-auto bg-gradient-to-r from-indigo-500 to-indigo-600  hidden sticky bottom-0  rounded-t-2xl py-2 text-white text-center text-xs">
   <div className="flex justify-between gap-6 mx-8">
      <Link href="/">
        <div><i className="fa-solid fa-house"></i></div>
        <div>Home</div>
      </Link>
      <Link  href="/quiz-play/categories?c=test">
        <div><i className="fa-solid fa-list"></i></div>
        <div>Category</div>
        
      </Link>
      <div>
        <div><i className="fa-solid fa-user"></i></div>
        <div>Log in</div>
      </div>
   </div>
</footer>

  )
}
export default Mobilefooter;