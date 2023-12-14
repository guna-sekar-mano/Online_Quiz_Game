"use client"
import dynamic from "next/dynamic";
import { Spinner } from "@nextui-org/react";
import { useQuery } from "react-query";
import { apigetlearningquestions, apisavelearningquestions } from "@/services/apiearnpoints/apilearnandearn";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useCoins from "@/components/store/useCoins";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Layout= dynamic(() => import('../../../../components/layout/layout'),{loading:()=><Fullscreenloading/>})
const LearnandEarnquestionscard= dynamic(() => import('../../../../components/earn-points/LearnandEarnquestionscard'))

const LearnandEarncategory= ({ params })=> {
    const router=useRouter()
    const {setCoins}=useCoins();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const getlearnquestions=async() =>{
        var res=await apigetlearningquestions({category:params.category});
        if(res.status === 'Already points earned'){
          router.push('/earn-points/learn-and-earn')
        }
        else{
          return res
        }
    }
    const {data:questions,isLoading}=useQuery('getlearnquestions',getlearnquestions,{refetchOnWindowFocus:false})
    const savelearnquestions=async(e)=>{
        e.preventDefault();
        const res=await apisavelearningquestions({Category:params.category});
        if(res.status === 'Success'){
          setCoins(res?.Points)
          router.push('/earn-points/learn-and-earn')
          toast.success("You earned 20 points")
        }
        
        else{
          toast.error("Try again later")
        }
    }
    const handleNextClick = (event) => {
      event.preventDefault();
      if (currentQuestionIndex < questions?.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        router.push('/earn-points/learn-and-earn')
      }
    };
    return (
      <Layout bgcolor={"from-sky-400 to-sky-500"}>
       {isLoading?<Spinner/>:<LearnandEarnquestionscard questions={questions} savelearnquestions={savelearnquestions}
        currentQuestionIndex={currentQuestionIndex}
        handleNextClick={handleNextClick}
        />}
      </Layout>
    );
  }
  export default LearnandEarncategory