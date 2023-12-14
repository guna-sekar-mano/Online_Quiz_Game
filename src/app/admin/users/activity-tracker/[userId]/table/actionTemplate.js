"use client"
const ActionTemplate=(props)=>{
  const {viewdetailsresult,rowData,downloadcertificate}=props;
    return (
       <div className="hs-dropdown relative inline-flex">
        <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm ">
          <i className="fa-solid fa-ellipsis"></i>
        </button>
        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-32 hidden z-10 mt-2 min-w-[15rem] bg-white shadow rounded-lg p-2" aria-labelledby="hs-dropdown-default">
          <a onClick={()=>viewdetailsresult(rowData)} className="cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 ">
           <i className="fa-solid fa-square-poll-vertical"></i> View Detailed Results
          </a>
          <a onClick={()=>downloadcertificate(rowData)} className="cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 ">
           <i className="fa-solid fa-medal"></i> Download Certificate
          </a>
        </div>
      </div>
    );
  }

export default ActionTemplate;