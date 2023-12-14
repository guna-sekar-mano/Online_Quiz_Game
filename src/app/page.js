'use client'
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Fullscreenloading from '@/components/loading/Fullscreenloading';
const Herosection= dynamic(() => import('../components/home/herosection'));
const Layout = dynamic(() => import('../components/layout/layout'),{loading:()=><Fullscreenloading/>});
import useAuthStore from '@/components/store/useAuthStore';
import UseStorege from '@/components/store/UseStorege';
import { useEffect } from 'react';
export default function Home() {
  const {isAuthenticated}=useAuthStore();
  const {clearlocalstorage}=UseStorege();
  const router=useRouter();
  useEffect(()=>{
    clearlocalstorage()
  },[])
  const checksession=async()=>{
    clearlocalstorage();
    isAuthenticated?router.push('/game-rules'):router.push('/account/login')
  };
  const handletutorial=()=>{
    clearlocalstorage();
    router.push('/practice/levels')
  }
  return (
    <Layout>
      <Head>
        {/* Other meta tags and head elements */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <Herosection handletutorial={handletutorial} checksession={checksession}/>
    </Layout>
  )
}
