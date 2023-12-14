'use client';
import React, { useState, useEffect } from 'react';
import { apiimportquestions } from '@/services/apiquestion/apiquestion';
import toast from 'react-hot-toast';
import AuthGuard from '@/app/AuthGuard';
const Importquestions=()=>{
    const user = AuthGuard();
    const [selectedFile, setSelectedFile] = useState(null);
    useEffect(() => {
    }, [selectedFile]);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
    };
    const uploadexcel=async(e) => {
      e.preventDefault();
      if (selectedFile) {
       var res=await apiimportquestions(selectedFile);
       if(res.length){
        toast.success("Successfully Questions uploded")
       }
      }
      else{
        toast.error("Click to upload or drag and drop a excel file")
      }
    }
    if(!user){
      return(
        <div>
          <p>loading.....</p>
        </div>
      )
    }
 return(
    <div>
      <div className="mx-4 my-3">
        <h1 className="font-bold text-xl">Import Questions</h1>
       </div>
       <div className="w-full  mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
                <div className="p-4 md:p-5">
                <form
                    onSubmit={uploadexcel}
                    className="flex items-center justify-center w-full"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">.xlsx</p>
                        {selectedFile?selectedFile.name:""}
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                     <button className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                    Upload
                </button>
                    </label>
                    
                </form>
               
                </div>
                
              </div>
            </div>
        </div>
    </div>
)
}
export  default Importquestions;