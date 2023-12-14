"use client"
import {useEffect, useState,useRef } from "react";
import { useRouter , useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { apipracticeinit,apipracticeresult,apisavepracticeresult } from "@/services/apipractice/apipractice";
import toast from "react-hot-toast";
import UseStorege from "@/components/store/UseStorege";
import useAuthStore from "@/components/store/useAuthStore";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
const Questionform = dynamic(() => import('../../../components/practice/Questionform'));
const Custoast = dynamic(() => import('../../../components/toast/Custoast'));
const Layout = dynamic(() => import('../../../components/layout/layout'),{loading:()=><Fullscreenloading/>});

const Play=()=>{
  const {isAuthenticated,userdetails}=useAuthStore();
  const {clearlocalstorage}=UseStorege();
  const router=useRouter();
  const params=useSearchParams();
  const [questions,setQuestions]=useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [Answers,setAnswers]=useState({})
  //timer
  const [timer, setTimer] = useState(0); // 25 minutes in seconds 900
  const [formattedTime, setFormattedTime] = useState('00:00:00');
  const formRef = useRef(null);
  let isMounted=true;
  var testinit= typeof window !== 'undefined'&&localStorage.getItem('testinit');

  useEffect(()=>{
  
 
    window.onbeforeunload = function (e) {
     e.preventDefault();
     return e.returnValue = "";
      
    }
    return(()=>{
      window.onbeforeunload = null
    })
  },[])
  useEffect(()=>{

    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      var response = confirm('Are you sure you want to exit?');
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
     testinit=='true'?getquestions():router.push('/')
    }
   return(()=>{
     isMounted=false;
   })
   },[])
  useEffect(() => {

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
     const res=await apipracticeinit({Category:params.get('t')});
     setQuestions(res.questions);
     if(!JSON.parse(localStorage.getItem('setonetimer'))){
        setTimer(1)
        setFormattedTime('00:00:00')
        localStorage.setItem('setonetimer', JSON.stringify(true));
      }
     //localStorage.setItem('getquestionsonetime', JSON.stringify(true));
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
      Category:params.get('t'),
      userId:userdetails()?.userId,
      'Full Name':userdetails()?.['Full Name'],
      Email:userdetails()?.Email,
      Game_Type:"Practice"
    
    };
    var res=isAuthenticated?await apisavepracticeresult(data):await apipracticeresult(data);
    if(res.status=="Test Completed"){
      toast.custom((t) => (<Custoast t={t} label={res.status} img="/images/icons/crown.png" 
      bgcolor="bg-green-600"
      />),{ duration: 3000 })
      localStorage.setItem('Guestid',JSON.stringify(res.datas));
      router.push(`/practice/score`)
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
                  <Questionform formRef={formRef} 
                  formattedTime={formattedTime}
                  questions={questions} 
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