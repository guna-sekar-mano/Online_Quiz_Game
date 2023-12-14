'use client'
import React from "react";
import Link from "next/link";
const SidebarView=()=>{
 return(
  <>
<div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden ">
    <div className="flex items-center py-4">

      <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
        <span className="sr-only">Toggle Navigation</span>
        <i className="fa-solid fa-bars w-5 h-5"></i>
      </button>


      <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
        <li className="flex items-center text-sm text-gray-800">
          Application Layout /  Dashboard
        </li>
     
      </ol>
   
    </div>
  </div>
  <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-gray-800 border-r border-gray-700 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0">
    <div className="px-6">
      <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">Quiz Admin</a>
    </div>

    <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <ul className="space-y-1.5">
        <li>
          <Link className="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-md" href="/admin/dashboard">
          <i className="fa-solid fa-house"></i>
            Dashboard
          </Link>
        </li>
       
        <li className="hs-accordion" id="account-accordion">
          <a  className="cursor-pointer hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-md hover:bg-gray-700 hover:text-white">
           <i className="fa-solid fa-gift w-3.5 h-3.5"></i>
          
            Quiz Zone

            <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>

            <svg className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
          </a>

          <div id="account-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul className="pt-2 pl-2">
              <li>
                <Link className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-700 hover:text-white" href="/admin/managing-questions" >
                 Manage Questions
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-700 hover:text-white" href="/admin/import-questions">
                  Import Questions
                </Link>
              </li>
           
            </ul>
          </div>
        </li>
        <li>
          <Link className="cursor-pointer flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-700 hover:text-white  space-y-2" href="/admin/users">
      
           <i className="fa-solid fa-user"></i>
            Users
          </Link>
        </li>
        <li className="hs-accordion" id="account-accordion">
          <a  className="cursor-pointer hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-md hover:bg-gray-700 hover:text-white">
           <i className="fa-solid fa-coins w-3.5 h-3.5"></i>
          
           Earn Points

            <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>

            <svg className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
          </a>

          <div id="account-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul className="pt-2 pl-2">
              <li>
                <Link className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-700 hover:text-white" href="/admin/earnpoints/watch-and-earn" >
                 Watch Ad and Earn
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-700 hover:text-white" href="/admin/earnpoints/earnpoints-history" >
                 Earn Point History
                </Link>
              </li>
            
           
            </ul>
          </div>
        </li>
       
        <li><Link href='/admin/settings' className="cursor-pointer flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-700 hover:text-white  space-y-2">
      
          <i className="fa-solid fa-gear w-3.5 h-3.5"></i>
          Settings
        </Link></li>
      </ul>
    </nav>
  </div>

  </>
 )
}
export default SidebarView;