'use client'
import  { Toaster } from 'react-hot-toast';
import dynamic from "next/dynamic";
const Header= dynamic(() => import('../../components/header/header'));
const SidebarView= dynamic(() => import('../../components/sidebar/sidebar'));
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient()
export default function Layout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-50 my-auto">
        <Header/>   
        <SidebarView/>
        <div className="w-full my-5 px-4 sm:px-6 md:px-8 lg:pl-72 flex min-h-screen flex-col justify-between">
          <main>
              {children}
              <Toaster/>
          </main>
        </div>
      </div>
    </QueryClientProvider>

  )
}