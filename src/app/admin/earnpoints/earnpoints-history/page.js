'use client'
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apigetallearnpointhistory } from "@/services/apiearnpoints/earnpointhistory";
import useTableState from "@/components/store/useTableState";
import dynamic from "next/dynamic";
const Earnpointshistorylist= dynamic(() => import('../../../../components/earnpoints/Earnpointshistorylist'));
const Earnpointshistory=()=>{
  const [totalRecords, setTotalRecords] = useState(0);
  const {page,setPage, first,setFirst,rows,setRows,globalFilter,setGlobalFilter} = useTableState();
  const handlegetearnpointhistory=async()=>{
    const res=await apigetallearnpointhistory({first,rows:10,globalFilter});
    setTotalRecords(res.totallength)
    return res
  }
  const {data}=useQuery({queryKey:['getearnpointhistory',page,rows,globalFilter],queryFn:handlegetearnpointhistory,refetchOnWindowFocus:false})
  const onPage = (page) => {
    setPage(page)
    setFirst(10 *(page -1)); //skip
    setRows(10); //limit
  };
  return(
  <div>
      <div className="flex justify-between items-center flex-wrap">
          <h1 className="font-bold">Earnpoints History</h1>
          <div className="flex gap-2">
            <input className="py-2 px-4 border rounded-xl" type="text" placeholder="Global search......" onChange={(e)=>setGlobalFilter(e.target.value)}/>
          </div>
       </div>
       <Earnpointshistorylist data={data?.datas} totalRecords={totalRecords} page={page} rows={10} onPage={onPage}/>
  </div>
  )
}
export default Earnpointshistory