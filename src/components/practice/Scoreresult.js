"use client"
const Scoreresult=(props)=>{
    const {result,playagain}=props;
  return(
    <div className="grid grid-cols-1">
    <div className="flex flex-col justify-center items-center text-center">
     
       <h1 className="text-white text-4xl italic [text-shadow:_0_3px_0_rgb(0_0_0_/_20%)] animate-fade-left animate-once mb-10">your score is</h1>
      
        <div className="flex justify-center items-center py-12 px-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white drop-shadow-xl shadow-xl rounded-xl text-xl lg:text-5xl relative">

           <span>{result?.CorrectAnswerCount}</span>
          
        </div>
        <div className="mt-5">
         <button className="[text-shadow:_0_3px_0_rgb(0_0_0_/_20%)] text-2xl" onClick={playagain}>Next Stage</button>
        </div>
    
    </div>
</div>
  )
}
export default Scoreresult;