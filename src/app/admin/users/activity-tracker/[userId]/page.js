'use client'
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import {useEffect, useRef, useState } from "react";
const Headerpanel = dynamic(() => import('./table/headerpanel'));
const Activitytable = dynamic(() => import('./table/activitytable'));
const Viewdetailsresult = dynamic(() => import('./table/viewdetailsresult'));
const Downloadcertificate = dynamic(() => import('./table/downloadcertificate'));
import { apigetactivitybyuser,apigetdetailedactivityresult } from "@/services/apiusers/apiusers";
import AuthGuard from "@/app/AuthGuard";
const Activitytracker=()=>{
  const user = AuthGuard();
   const {userId}=useParams();
   const [tablebodydata, setTablebodydata] = useState([]);
   const [loading, setLoading] = useState(false);
   const [first, setFirst] = useState(0);
   const [rows, setRows] = useState(10);
   const [totalRecords, setTotalRecords] = useState(0);
   const [globalFilter, setGlobalFilter] = useState('');
   //forms
   const [formDialog, setformDialog] = useState(false);
   const [viewdata, setViewdata] = useState([]);
   const [certdata,setcertdata]=useState({});
   const [certificateDialog,setcertificateDialog]=useState(false);
   const pdfTemplateRef=useRef(null);
   useEffect(()=>{
    let isMounted=true;
    if(isMounted){
      getuseractivityvyuserid();
    }
    return(()=>{
      isMounted=false;
    })
   },[first,rows,globalFilter]);
   const getuseractivityvyuserid=async()=>{
      setLoading(true);
      var res=await apigetactivitybyuser({userId,first,rows,globalFilter});
      setTablebodydata(res.datas);
      setTotalRecords(res.totallength);
      setLoading(false);
   }
   const onPage = (event) => {
      setFirst(event.first);
      setRows(event.rows);
    };
   const onGlobalFilter = (e) => {
      setGlobalFilter(e.target.value);
   };

   const viewdetailsresult = async(rowData) => {
      var res=await apigetdetailedactivityresult({_id:rowData._id});
      setViewdata(res);
      setformDialog(true);
   };
   const downloadcertificate=(rowData)=>{
    setcertdata(rowData);
    setcertificateDialog(true);
   }
   const hideDialog = () => {
      setformDialog(false);
    };
    const hidecertDialog = () => {
      setcertificateDialog(false);
    };
   const handleGeneratePdf =() => {
      const html2pdf = require('html2pdf.js/dist/html2pdf');
      const element = pdfTemplateRef.current;
      const options = {
        filename: `${new Date().getTime()}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: {unit: 'pt', format: 'a4', orientation: 'l'},
      };
      html2pdf().set(options).from(element).save();

  };
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
       <h1 className="font-bold text-xl">Activity Tracker / {userId}</h1>
     </div>
     <div className="bg-white rounded-lg shadow p-5">
       <Headerpanel onGlobalFilter={onGlobalFilter}/>
       <Activitytable tablebodydata={tablebodydata} loading={loading} first={first}
         rows={rows} totalRecords={totalRecords} onPage={onPage} globalFilter={globalFilter}
         viewdetailsresult={viewdetailsresult} downloadcertificate={downloadcertificate}
       />
       <Viewdetailsresult formDialog={formDialog} viewdata={viewdata} hideDialog={hideDialog}/>
       <Downloadcertificate certificateDialog={certificateDialog} certdata={certdata} hidecertDialog={hidecertDialog} pdfTemplateRef={pdfTemplateRef} handleGeneratePdf={handleGeneratePdf}/>
     </div>
   </div>
 )
}
export default Activitytracker;