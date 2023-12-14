'use client'
import { Dialog } from 'primereact/dialog';
const Downloadcertificate=(props)=>{
    const {certificateDialog,certdata,hidecertDialog,pdfTemplateRef,handleGeneratePdf}=props;
  return(
    <div className="flex justify-between pb-5 flex-wrap gap-y-2">
    <Dialog visible={certificateDialog} maximizable style={{ width: '75rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="View Detailed Results" modal className="p-fluid" onHide={hidecertDialog}>
         <div className="m-3 p-3 border-4 border-blue-500 rounded max-h-full" ref={pdfTemplateRef}>
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
            <h1 className="font-bold text-2xl mb-3">{certdata?.['Full Name']}</h1>
            <h1 className="text-xl mb-3">has sucessfully completed the <span className="font-bold">{certdata?.['Sub Category']} - Level {certdata?.['Level']}</span> in <span className="font-bold">{certdata?.['Category']}</span></h1>

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
      <div className="text-center mx-auto mb-3">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl" onClick={handleGeneratePdf}><i className="fa-solid fa-certificate"></i> Download Certificate</button>
      </div>
    </Dialog>
    </div>

  )
}
export default Downloadcertificate;