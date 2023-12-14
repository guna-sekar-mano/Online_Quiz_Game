"use client"
import { useState } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import ProtectedRoute from "@/components/store/ProtectedRoute";
import Fullscreenloading from "@/components/loading/Fullscreenloading";
import { apigettrackyouractivity } from "@/services/apiprofile/apiprofile";
const Layout = dynamic(() => import('../../../../components/layout/layout'),{loading:()=><Fullscreenloading/>});
const Trackyouractivitycard=dynamic(() => import('../../../../components/account/trackactivity/Trackyouractivitycard'));
const Trackyouractivity=()=>{
    const [totalRecords, setTotalRecords] = useState(0);
    const [page, setPage] = useState(1);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [globalFilter, setGlobalFilter] = useState('');
    const handlegettrackyouractivity = async () => {
      const res = await apigettrackyouractivity({first,rows,globalFilter});
      setTotalRecords(res.totallength)
      return res;
    };
    const { data } = useQuery(["gettrackyouractivity",page,rows,globalFilter], handlegettrackyouractivity,{ refetchOnWindowFocus: false } );
    const onGlobalFilter = (e) => {
        setGlobalFilter(e.target.value);
      };
    const onPage = (page) => {
        setPage(page)
        setFirst(rows *(page -1)); //skip
        setRows(rows); //limit
    };
  return (
    <Layout>
        <ProtectedRoute allowedRoles={['User']}>
          <div className="max-w-[85rem] w-full mx-auto px-4  sm:px-6 lg:px-8">
            <div className="mt-5">
                <Trackyouractivitycard onGlobalFilter={onGlobalFilter} data={data?.datas} totalRecords={totalRecords} page={page} rows={rows} onPage={onPage}/>
            </div>
          </div>
       </ProtectedRoute>
    </Layout>
  )
}
export default Trackyouractivity;