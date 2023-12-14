
'use client'
import { useEffect, useState,Suspense } from "react";
import AuthGuard from "@/app/AuthGuard";
import dynamic from 'next/dynamic';
const Headerpanel = dynamic(() => import('./table/headerpanel'));
const Userstable = dynamic(() => import('./table/Userstable'),{  loading: () => <h1 className="animate-pulse">Loading Users...</h1>});
const CreateandeditForm = dynamic(() => import('./table/createandeditform'));
import { apigetfullusers,apiupdateusers } from "@/services/apiusers/apiusers";
import toast from "react-hot-toast";
const Users=()=>{
    const user = AuthGuard();
    const [tablebodydata, setTablebodydata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [globalFilter, setGlobalFilter] = useState('');
    const [selectedProducts, setSelectedProducts] = useState(null);
    //forms
    const [formDialog, setformDialog] = useState(false);
    const [formdata, setFormdata] = useState({});
    const [formconfig, setFormconfig] = useState({ cusfun: "handleSavequestions" });

    useEffect(() => {
      var isMounted = true;
      if (isMounted) {
        getallusers();
      }
      return () => {
        isMounted = false;
      };
    }, [first, rows, globalFilter])
    const getallusers = async () => {
      setLoading(true);
      var res = await apigetfullusers({ first, rows, globalFilter });
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
    const edittable = (rowData) => {
        setFormdata({ ...rowData });
        setFormconfig({ cusfun: "handleUpdatequestions" })
        setformDialog(true);
    };
    const hideDialog = () => {
      setformDialog(false);
    };
    const Changehandler = (e) => {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
    const handleUpdateusers=async(event)=>{
      event.preventDefault();
      var res=await apiupdateusers(formdata);
      if (res) {
        const index = tablebodydata.findIndex((item) => item._id === res._id);
        tablebodydata[index] = res;
        setTablebodydata(tablebodydata);
        setFormdata({});
        setformDialog(false);
        toast.success("User has been updated successfully");
      }
      else {
        toast.error("error! data not updated");
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
        <h1 className="font-bold text-xl">Users Details</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-5">
        <Headerpanel onGlobalFilter={onGlobalFilter} selectedProducts={selectedProducts}/>
        
        <Userstable tablebodydata={tablebodydata} loading={loading} first={first}
          rows={rows} totalRecords={totalRecords} onPage={onPage} globalFilter={globalFilter}
          selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}
          edittable={edittable}
        />
   
         <CreateandeditForm formDialog={formDialog} hideDialog={hideDialog} formdata={formdata}
          Changehandler={Changehandler} formconfig={formconfig} handleUpdateusers={handleUpdateusers}
        />
       
      </div>
    </div>
   )
}
export default Users;