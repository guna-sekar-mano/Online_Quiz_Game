'use client'
import { useEffect, useState } from "react";
import AuthGuard from "@/app/AuthGuard";
import dynamic from 'next/dynamic';
const Headerpanel = dynamic(() => import('./table/headerpanel'));
const Questiontable = dynamic(() => import('./table/Questiontable'));
const CreateandeditForm = dynamic(() => import('./table/createandeditform'));
const Bulkeditform = dynamic(() => import('./table/bulkeditform'));
import { apigetallquestions, apisavequestion, apiupdatequestion, apideletequestion,apibulkupdatequestion } from "@/services/apiquestion/apiquestion";
import toast from "react-hot-toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
const Managequestions = () => {
  const user = AuthGuard();
  const [tablebodydata, setTablebodydata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [globalFilter, setGlobalFilter] = useState('');
  const [selectedProducts, setSelectedProducts] = useState(null);
  //form
  const [formDialog, setformDialog] = useState(false);
  const [formdata, setFormdata] = useState({});
  const [formconfig, setFormconfig] = useState({ cusfun: "handleSavequestions" })
  ///bulk form
  const [bulkformDialog, setBulkformDialog] = useState(false);
  const getallquestion = async () => {
    setLoading(true);
    var res = await apigetallquestions({ first, rows, globalFilter });
    setTablebodydata(res.datas);
    setTotalRecords(res.totallength);
    setLoading(false);
  }
  useEffect(() => {
      getallquestion();
  }, [first, rows, globalFilter,user])
 
  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  const onGlobalFilter = (e) => {
    setGlobalFilter(e.target.value);
  };
  const openNew = () => {
    setFormdata({});
    setFormconfig({ cusfun: "handleSavequestions" })
    setformDialog(true);
  };
  const edittable = (rowData) => {
    setFormdata({ ...rowData });
    setFormconfig({ cusfun: "handleUpdatequestions" })
    setformDialog(true);
  };
  const editbulktable = () => {
    setFormdata({});
    setBulkformDialog(true);
  };
  const hideDialog = () => {
    setformDialog(false);
  };

  const hidebulkDialog = () => {
    setBulkformDialog(false);
  };
  const Changehandler = (e) => {
    if (e.target.files) {
      setFormdata({ ...formdata, [e.target.name]: { file: e.target.files[0], fakepath: e.target.value } })
    }
    else {
      setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
  }
  const handleSavequestions = async (event) => {
    event.preventDefault();
    const res = await apisavequestion(formdata);
    if (res) {
      setTablebodydata([res, ...tablebodydata]);
      setFormdata({});
      setformDialog(false);
      toast.success("Data has been saved successfully");
    }
    else {
      toast.error("error! data not saved");
    }
  }
  const handleUpdatequestions = async (event) => {
    event.preventDefault();
    const res = await apiupdatequestion(formdata);
    if (res) {
      const index = tablebodydata.findIndex((item) => item._id === res._id);
      tablebodydata[index] = res;
      setTablebodydata(tablebodydata);
      setFormdata({});
      setformDialog(false);
      toast.success("Data has been updated successfully");
    }
    else {
      toast.error("error! data not updated");
    }
  }
  const deleteconfirm = (rowData) => {
    confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => handleDeletequestion(rowData),

    });
  }
  const handleDeletequestion = async (id) => {
    var res = await apideletequestion({ id });
    if (res.status == "Ok") {
      getallquestion();
      toast.success("Data has been deleted successfully");
    }
    else if (res.status == "Error") {
      toast.error("Records not found in database");
    }
    else {
      toast.error("error! data not deleted");
    }
  }
  const handleBulkupdate = async (event) => {
    event.preventDefault();
    console.log(formdata)
    if(selectedProducts){
     var ids=selectedProducts.map(d=>d._id);
     var res=await apibulkupdatequestion({_id:ids,datas:formdata});
     if (res.status == "Ok") {
      getallquestion();
      setBulkformDialog(false);
      setFormdata({});
      toast.success("Data has been Updated successfully");
     }
     else if (res.status == "Error") {
      toast.error("Records not found in database");
     }
     else {
        toast.error("error! data not Updated");
      }
    }
    else{
      toast.error("please select a table records");
    }
  }
  if (!user) {
    return (
      <div>
        <p>loading.....</p>
      </div>
    )
  }
  return (
    <div>
      <div className="mx-4 my-3">
        <h1 className="font-bold text-xl">Manage Questions</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-5">
        <Headerpanel onGlobalFilter={onGlobalFilter} selectedProducts={selectedProducts} openNew={openNew} editbulktable={editbulktable} />
        <Questiontable tablebodydata={tablebodydata} loading={loading} first={first}
          rows={rows} totalRecords={totalRecords} onPage={onPage} globalFilter={globalFilter}
          selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}
          edittable={edittable} deleteconfirm={deleteconfirm}
        />
        <CreateandeditForm formDialog={formDialog} hideDialog={hideDialog} formdata={formdata}
          Changehandler={Changehandler} formconfig={formconfig} handleSavequestions={handleSavequestions} handleUpdatequestions={handleUpdatequestions}
        />
        <Bulkeditform bulkformDialog={bulkformDialog} hidebulkDialog={hidebulkDialog} formdata={formdata} Changehandler={Changehandler} handleBulkupdate={handleBulkupdate} />
      </div>
      <ConfirmDialog />
    </div>
  )
}
export default Managequestions;