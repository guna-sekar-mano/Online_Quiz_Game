'use client'
import { useState} from "react";
export default () => {
   const [tablebodydata, setTablebodydata] = useState([]);
   const [loading, setLoading] = useState(false);
   const [first, setFirst] = useState(0);
   const [rows, setRows] = useState(10);
   const [totalRecords, setTotalRecords] = useState(0);
   const [globalFilter, setGlobalFilter] = useState('');
 
   return {tablebodydata,setTablebodydata,loading,setLoading,first,setFirst,rows,setRows,totalRecords,setTotalRecords,globalFilter,setGlobalFilter}
 }