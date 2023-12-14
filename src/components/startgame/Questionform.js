'use client'
import Image from "next/image"

const Questionform=(props)=>{
    const {formRef,questions,currentQuestionIndex,
        handleNextClick,selectedoption,selectedOption,changeHandler,handlequizsubmit}=props;
   return(
    <div >
       <div className="flex flex-col">

             <div className="flex justify-center flex-wrap">
                 <div className="bg-red-600 text-white p-3 rounded-full font-bold text-sm shadow">
                   <p>Question {currentQuestionIndex+1} / {questions?.length}</p>
                 </div>
               
                
            </div>
        <div className="p-4 md:p-5 text-center">
            <h3 className="text-xl font-bold text-blue-950">
              {questions[currentQuestionIndex]?.Question}
            </h3>
            <div className="flex justify-center my-3">
            {questions[currentQuestionIndex]?.['Image for Question']&&<Image src={`${process.env.IMAGE_PATH}/${questions[currentQuestionIndex]?.['Image for Question']?questions[currentQuestionIndex]['Image for Question']:null}`}  className="flex-shrink-0  w-[24rem] rounded-md" width={400} height={400} alt="" />}
            </div>
           
            <form ref={formRef} onSubmit={currentQuestionIndex ==questions.length - 1?handlequizsubmit:handleNextClick}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 my-5">
                <label htmlFor={"hs-radio-in-form1"} className="flex p-5 cursor-pointer  w-full bg-white shadow  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 ">
                    <input type="radio"  name={'Q'+(currentQuestionIndex+1)} checked={selectedOption['Q'+(currentQuestionIndex+1)] === questions[currentQuestionIndex]?.['Option A']}  value={questions[currentQuestionIndex]?.['Option A'] || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id={"hs-radio-in-form1"} required/>
                    <span className="text-sm text-gray-800 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option A']}</span>
                </label>

                <label htmlFor={"hs-radio-in-form2"} className="flex p-5 cursor-pointer w-full bg-white shadow  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <input type="radio"  name={'Q'+(currentQuestionIndex+1)} checked={selectedOption['Q'+(currentQuestionIndex+1)] === questions[currentQuestionIndex]?.['Option B']}  value={questions[currentQuestionIndex]?.['Option B'] || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id={"hs-radio-in-form2"} required/>
                    <span className="text-sm text-gray-800 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option B']}</span>
                </label>
                <label htmlFor={"hs-radio-in-form3"} className="flex p-5 cursor-pointer w-full bg-white shadow  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <input type="radio"  name={'Q'+(currentQuestionIndex+1)} checked={selectedOption['Q'+(currentQuestionIndex+1)] === questions[currentQuestionIndex]?.['Option C']}  value={questions[currentQuestionIndex]?.['Option C'] || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id={"hs-radio-in-form3"} required/>
                    <span className="text-sm text-gray-800 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option C']}</span>
                </label>
                <label htmlFor={"hs-radio-in-form4"} className="flex p-5 cursor-pointer w-full bg-white shadow  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <input type="radio"  name={'Q'+(currentQuestionIndex+1)} checked={selectedOption['Q'+(currentQuestionIndex+1)] === questions[currentQuestionIndex]?.['Option D']}  value={questions[currentQuestionIndex]?.['Option D'] || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id={"hs-radio-in-form4"} required/>
                    <span className="text-sm text-gray-800  ring:border-blue-500 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option D']}</span>
                </label>
            </div>
         
            <button type="submit" className="py-2 px-4 inline-flex justify-start items-center gap-2 rounded-xl border border-transparent font-semibold bg-blue-950 text-white hover:bg-blue-600 focus:outline-none  ">
                {currentQuestionIndex ==questions.length - 1?'Submit':'Next'} <i className="fa-solid fa-arrow-right"></i>
            </button>
            </form>
          
          
        </div>
        
     </div>
    </div>
   )
}
export default Questionform;