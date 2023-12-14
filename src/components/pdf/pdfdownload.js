"use client"
const Pdfdownload=(props)=>{
  const {certdata,userdata}=props;
  return (
    <div className="m-3 p-3 border-4 border-blue-500 rounded max-h-full">
      <div className="border-2 border-dashed border-green-500 p-10 py-20">
         <div>
           <i className="fa-solid fa-medal text-indigo-500 text-7xl"></i>
         </div>
        <div className="flex justify-center pb-3">
          <h1 className="font-bold text-5xl text-green-600">Quiz App</h1>
        </div>
        <div className="flex justify-center py-3">
          <div className="text-center">
            <p className="text-lg mb-3">This is certify that</p>
            <h1 className="font-bold text-2xl mb-3">{certdata?.['Full Name']} {userdata?.['StudentCollegename']?<><span>and </span><span className="font-bold">Reg No:{userdata?.['StudentRegNo']}</span> </> :null}</h1>
            <h1 className="text-xl mb-3">
               {userdata?.['StudentCollegename']?<><span>Student of </span><span className="font-bold"> {userdata?.['StudentCollegename']}</span> </> :null}
              has sucessfully completed the <span className="font-bold">{certdata?.['Sub Category']} - Level {certdata?.['Level']}</span> in <span className="font-bold">{certdata?.['Category']}</span></h1>

          </div>
        </div>
        <div className="flex justify-center py-3">
          <div className="text-center">
           
            <h1 className="text-xl mb-3">You got <span className="font-bold">{certdata?.['CorrectAnswerCount']}</span> answer correct</h1>

          </div>
        </div>
        <div className="flex justify-between pt-20">
         <div>
          <p>Sign</p>
          <h1 className="font-semibold text-lg">Director</h1>
         </div>
         <div>
          <p>Sign</p>
          <h1 className="font-semibold text-lg">CEO</h1>
         </div>
        </div>
        
      </div>

    </div>
  );
}
export default Pdfdownload;