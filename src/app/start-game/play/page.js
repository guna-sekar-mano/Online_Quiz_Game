"use client"
import {useEffect, useState,useRef } from "react";
import { useSearchParams,useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { apistartgameinit,apisavestartgameresult } from "@/services/apistartgame/apistartgame";
import useAuthStore from "@/components/store/useAuthStore";
import toast from "react-hot-toast";
import UseStorege from "@/components/store/UseStorege";
import { useBeforeunload } from 'react-beforeunload';
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Questionform = dynamic(() => import('../../../components/practice/Questionform'));
const Custoast = dynamic(() => import('../../../components/toast/Custoast'));
const Layout = dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>});
var testinit= typeof window !== 'undefined'&&localStorage.getItem('testinit');
const Play=()=>{
  const {userdetails}=useAuthStore();
  const {clearlocalstorage}=UseStorege()
  const params=useSearchParams();
  const router=useRouter();
  const [questions,setQuestions]=useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [Answers,setAnswers]=useState({})
  //timer
  const [timer, setTimer] = useState(0); // 25 minutes in seconds 900
  const [formattedTime, setFormattedTime] = useState('00:00:00');
  const formRef = useRef(null);
  
  let isMounted=true;
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.hidden) {
        // The page is hidden (switched tabs or minimized)
        // You can also perform other actions here
   
          if ('Notification' in window && 'permissions' in navigator) {

            let permission = Notification.permission;
            if (permission !== 'granted') {
              // If permission is not granted, request it
              permission = await Notification.requestPermission();
            }
    
            if (permission === 'granted') {
              // Display a notification
              new Notification('Quiz Game Tab switched or window minimized!');
              
        
            }
           
          }
          clearlocalstorage();
          router.push('/')
         
        
      }
    };

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  useBeforeunload(() => "Are you sure you want to leave?");
  useEffect(()=>{
   
    testinit?true:router.push('/')
  
 },[])


  useEffect(()=>{

    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      var response = confirm('Are you sure you want to leave?');
      if (response) {
        clearlocalstorage();
        router.push('/')
    
      } else {
        history.go(1);
      }
    };
    return () => {
      window.onpopstate = null;
  };

  },[])
  useEffect(()=>{

    if(isMounted&& JSON.parse(localStorage.getItem('getquestionsonetime'))!=true){
     getquestions();
    }
   return(()=>{
     isMounted=false;
   })
   },[])
  useEffect(() => {
 

   /* if (timer === 0) {
      if (formRef.current) { 
        localStorage.removeItem('userAnswers');
        localStorage.removeItem('currentQuestionIndex');
        localStorage.removeItem('timer');
        localStorage.removeItem('setonetimer');

      }
    } else {*/
    let timerInterval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer <= 0) {
            clearInterval(timerInterval);
            return 0;
          }
          return prevTimer + 1;
        });
      }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);
  useEffect(() => {
    // Convert timer value to HH:MM:SS format
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    setFormattedTime(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  }, [timer]);
  useEffect(() => {
    if (isMounted) {
    // Check if there are stored answers and a stored current question index
    const storedAnswers = localStorage.getItem('userAnswers');
    const storedCurrentIndex = localStorage.getItem('currentQuestionIndex');
    const storedTimer = localStorage.getItem('timer');
    if (storedAnswers && storedCurrentIndex) {
      setAnswers(JSON.parse(storedAnswers));
      setCurrentQuestionIndex(parseInt(storedCurrentIndex));
      setTimer(parseInt(storedTimer));
    }
  }
  return () => {
    isMounted = false;
  };
  }, []);
  
  useEffect(() => {
    // Save user answers and current question index to local storage
    localStorage.setItem('userAnswers', JSON.stringify(Answers));
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
    localStorage.setItem('timer', timer.toString());
  }, [Answers, currentQuestionIndex,timer]);
  const getquestions=async()=>{
     const {status,questions}=await apistartgameinit({Level:params.get('level'),Stage:params.get('stage')});
     if(status=="Test Started"){
      setQuestions(questions);
      if(!JSON.parse(localStorage.getItem('setonetimer'))){
          setTimer(1)
          setFormattedTime('00:00:00')
          localStorage.setItem('setonetimer', JSON.stringify(true));
        }
     }
     else{
      router.push('/');
     }
  }
  const handleNextClick = (event) => {
    event.preventDefault();
    if (currentQuestionIndex < questions?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("End of Quiz. You can submit your answers here.");
    }
  };
  const handleindexClick = (index) =>setCurrentQuestionIndex(index);

  const selectedoption=e=>{
    setSelectedOption({...selectedOption,[e.target.name]:e.target.value});
  }
  const changeHandler = e => {
    setAnswers({...Answers,[e.target.name]:{Selected_Answer:e.target.value,Question_Id:questions[currentQuestionIndex]?._id}});
  }
  const handlequizsubmit=async(event)=>{
    event.preventDefault();
    var localanswer= JSON.parse(localStorage.getItem('userAnswers'));
    var data={
      Game_Time:formattedTime,
      Results:[localanswer],
      userId:userdetails().userId,
      'Full Name':userdetails()['Full Name'],
      Email:userdetails().Email,
      Level:decodeURIComponent(params.get('level')),
      Stage:decodeURIComponent(params.get('stage')),
      Game_Type:"Start Game"
    };
    var res=await apisavestartgameresult(data);
    if(res.status=="Test Completed"){
      toast.custom((t) => (<><Custoast t={t} label={res.status} img="/images/icons/crown.png" 
      bgcolor="bg-green-600"
      /></>),{ duration: 3000 })
      router.push(`/start-game/score?id=${JSON.stringify(res.datas._id)}`)
    }
    else{
      toast.error("Error occured,so resubmit a test")
    }
  }
  return(

    <Layout bgcolor={'from-sky-400 to-sky-500'}>
    <section className="py-10 font-poppins">
        <div className="max-w-[80rem] w-full mx-auto px-4  sm:px-6 lg:px-8 animate-fade-left">

            <div className="grid grid-cols-1 mt-5">
                <div className="">
                  <Questionform formRef={formRef} formattedTime={formattedTime} questions={questions} 
                    currentQuestionIndex={currentQuestionIndex} 
                    handleindexClick={handleindexClick}
                    handleNextClick={handleNextClick}
                    selectedoption={selectedoption} selectedOption={selectedOption} changeHandler={changeHandler}
                    handlequizsubmit={handlequizsubmit}
                    />
                </div>
            </div>
        </div>
    </section>
   </Layout>
 
  )
}
export default Play;