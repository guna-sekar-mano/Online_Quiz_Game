'use client';
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Countcard= dynamic(() => import('./countcard'));
const Chart= dynamic(() => import('./chart'));
import AuthGuard from "@/app/AuthGuard";
import { apigetdashboardcardcount } from "@/services/apidashboard/apidashboard";
const Dashboard=()=>{
    const user = AuthGuard();
    const [cardcount,setCardcount]=useState({});
    const [chartdata,setChartdata]=useState([])
    useEffect(()=>{
      var isMounted=true;
      if(isMounted){
        getcountcard();
      }
      return(()=>isMounted=false);
    },[])

    const getcountcard=async()=>{
      var res=await apigetdashboardcardcount();
      var {chartdatas,...remainingdata}=res[0];
      setCardcount(remainingdata);
      setChartdata(chartdatas)
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
          <Countcard cardcount={cardcount}/>
          <Chart chartdata={chartdata}/>
    </div>
)
}
export  default Dashboard;