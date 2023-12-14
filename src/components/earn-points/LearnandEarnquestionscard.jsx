"use client"
import Image from "next/image";
const LearnandEarnquestionscard=(props)=>{
  const {questions, savelearnquestions, currentQuestionIndex,handleNextClick}=props;
    return(
        <div className="font-poppins py-10 text-justify">
           <div className="max-w-5xl w-full mx-auto px-6  sm:px-6 lg:px-8">
           <div className="flex flex-col">
                <div className="flex justify-between items-center flex-wrap lg:flex-nowrap relative">
                  <div className="flex items-center flex-wrap lg:flex-nowrap gap-2 max-w-4xl">
                      <div>
                      <div className="bg-blue-950 text-white h-16 w-16 rounded-full font-bold text-xl shadow flex justify-center items-center">
                        <p>{(currentQuestionIndex+1).toString().padStart(2, '0')}</p>
                      </div>
                      </div>
                      <div>
                          <h3 className="text-lg lg:text-xl font-medium text-gray-900 break-before-all text-justify">
                          {questions[currentQuestionIndex]?.Question}
                          </h3>
                      </div>
                  </div>
                
                </div>
                <div className="p-2">
           
           
           
            <form className="flex flex-col lg:flex-row justify-between  flex-wrap"  onSubmit={currentQuestionIndex ==questions.length - 1?savelearnquestions:handleNextClick}>
            <div>
            <div className="flex  my-3">
            {questions[currentQuestionIndex]?.['Image for Question']&&<Image src={`${process.env.IMAGE_PATH}/${questions[currentQuestionIndex]?.['Image for Question']?questions[currentQuestionIndex]['Image for Question']:null}`}  className="flex-shrink-0  h-[6rem] w-auto rounded-md" width={400} height={400} alt="" />}
            </div>
           
                <div className="grid grid-cols-1  gap-y-3 my-5">
                    <label htmlFor={"hs-radio-in-form1"} className={`flex  items-center  cursor-pointer  w-full group relative p-1`}>
                       
                        <input type="radio"  name={'Q'+(currentQuestionIndex+1)}  value={questions[currentQuestionIndex]?.['Option A'] || ''}  className="hidden" id={"hs-radio-in-form1"} />
                        <div className={`bg-blue-950 group-hover:bg-green-500 text-white h-10 w-10 rounded-full font-bold text-lg shadow flex justify-center items-center`}>
                          <p>A</p>
                        </div>
                        <span className="text-base font-medium text-gray-900 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option A']}</span>
                    </label>

                    <label htmlFor={"hs-radio-in-form2"} className={`flex  items-center  cursor-pointer  w-full group relative p-1 `}>
                       
                        <input type="radio"  name={'Q'+(currentQuestionIndex+1)} className="hidden" id={"hs-radio-in-form2"} />
                        <div className={`bg-blue-950 group-hover:bg-green-500 text-white h-10 w-10 rounded-full font-bold text-lg shadow flex justify-center items-center`}>
                          <p>B</p>
                        </div>
                        <span className="text-base font-medium text-gray-900 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option B']}</span>
                    </label>
                    <label htmlFor={"hs-radio-in-form3"} className={`flex  items-center  cursor-pointer  w-full group relative p-1`}>
                       
                        <input type="radio"  name={'Q'+(currentQuestionIndex+1)} value={questions[currentQuestionIndex]?.['Option C'] || ''}  className="hidden" id={"hs-radio-in-form3"} />
                        <div className={`bg-blue-950 group-hover:bg-green-500 text-white h-10 w-10 rounded-full font-bold text-lg shadow flex justify-center items-center`}>
                          <p>C</p>
                        </div>
                        <span className="text-base font-medium text-gray-900 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option C']}</span>
                    </label>
                    <label htmlFor={"hs-radio-in-form4"} className={`flex  items-center  cursor-pointer  w-full group relative p-1 `}>
                        
                        <input type="radio"  name={'Q'+(currentQuestionIndex+1)}  className="hidden" id={"hs-radio-in-form4"} />
                        <div className={`bg-blue-950 group-hover:bg-green-500 text-white h-10 w-10 rounded-full font-bold text-lg shadow flex justify-center items-center`}>
                          <p>D</p>
                        </div>
                        <span className="text-base font-medium text-gray-900 ml-3 dark:text-gray-400">{questions[currentQuestionIndex]?.['Option D']}</span>
                    </label>
                    <div className="mt-3">
              <h1 className="text-base font-medium"><span className="font-bold">Answer: </span>{questions[currentQuestionIndex]?.['Correct Answer']}</h1>
              <h1 className="text-base font-medium"><span className="font-bold">Explanation: </span>{questions[currentQuestionIndex]?.['Explanation']}</h1>
            </div>
            <div className="flex justify-center items-center">
          
              <Image src={`/images/icons/rocket-red.png`}  className="flex-shrink-0  w-[8rem]  text-center" width={200} height={200} alt=""  />
              <button type="submit">
                <Image src={`/images/icons/play-red.png`}  className="flex-shrink-0  w-[3rem]  text-center" width={200} height={200} alt=""  />
              </button>
             </div>
                    
                </div>
            </div>

           
            </form>
           
          
        </div>
            </div>
            
           </div>
        </div>
    )
}
export default LearnandEarnquestionscard