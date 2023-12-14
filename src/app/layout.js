"use client"
import { useEffect } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import  { Toaster } from 'react-hot-toast';
import '@fortawesome/fontawesome-free/css/all.min.css';
//primereact
import "primereact/resources/themes/tailwind-light/theme.css";     
import "primereact/resources/primereact.min.css";  
export default function RootLayout({ children }) {
  useEffect(()=>{
    import('preline');
   },[]);
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        <Toaster/>
        </body>
    </html>
  )
}
