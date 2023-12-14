'use client'
import dynamic from "next/dynamic";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apideletewatchads, apigetwatchads, apisavewatchads, apiupdatewatchads } from "@/services/apiearnpoints/apiwatchad";
import useTableState from "@/components/store/useTableState";
import useFormState from "@/components/store/useFormState";
import { Sidebar } from 'primereact/sidebar';
import { ConfirmDialog,confirmDialog } from 'primereact/confirmdialog';
const Watchadlist= dynamic(() => import('../../../../components/earnpoints/Watchadlist'));
const Watchadsform= dynamic(() => import('../../../../components/earnpoints/Watchadsform'));
const Watchadandearan=()=>{
  const queryClient = useQueryClient();
  const {page,setPage, first,setFirst,rows,setRows} = useTableState();
  const {formdata,setformdata,showModal,setShowModal}=useFormState();
  const handlegetwatchads=async()=>await apigetwatchads({first,rows});
  const {data}=useQuery({queryKey:['getwatchadandearn',page,rows],queryFn:handlegetwatchads,refetchOnWindowFocus:false})
  const onPage = (page) => {
    setPage(page)
    setFirst(rows *(page -1)); //skip
    setRows(rows); //limit
  };
  const changeHandler = e => {
    setformdata({...formdata,[e.target.name]:e.target.value});
  }
  const newwachad=()=>{
    setShowModal({visible:true,formname:'Addform'})
    setformdata({})
  }
 const handlesavewatchads=async(e)=>{
  e.preventDefault();
  var res=await apisavewatchads(formdata)
  data?.datas.push(res)
  handlehide()
  setformdata({})
 }
 const handlehide=()=>{
  setShowModal({visible:false})
 }
 const editwachad=(item)=>{
  setShowModal({visible:true,formname:'Editform'})
  setformdata(item)
  
 }
 const handleupdatewatchads=async(e)=>{
  e.preventDefault();
  var res=await apiupdatewatchads(formdata)
  data.datas[data?.datas.findIndex(d=>d._id===res._id)]=res
  setformdata({})
  handlehide()
 }
 const handledeleteaccept=async(_id)=>{
  var res= await apideletewatchads({_id})
  if(res.status=="Record has been successfully deleted"){
    queryClient.refetchQueries(['getwatchadandearn', page, rows])
  }
  else{
    alert(res.status)
  }
 }
 const handledelete=(_id)=>{
    confirmDialog({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptClassName: 'p-button-danger',
        accept:()=>handledeleteaccept(_id),
      
    });

 }

 return(
    <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Watch Ads List</h1>
          <div className="flex gap-2">
            <button type="button" className="py-2 px-4 border rounded-lg border-gray-800 bg-gray-800 text-white" onClick={newwachad}><i className="fa-solid fa-square-plus"></i> Add</button>
          </div>
       </div>
       <Sidebar visible={showModal.visible} onHide={()=>handlehide()} position="right"  className="!w-full lg:!w-[20rem]" dismissable={false}>
          <Watchadsform showModal={showModal} formdata={formdata} changeHandler={changeHandler} 
          handlesavewatchads={handlesavewatchads}
          handleupdatewatchads={handleupdatewatchads}
         />
        </Sidebar>
         <Watchadlist data={data?.datas} totalRecords={data?.totallength} page={page} rows={rows} onPage={onPage} editwachad={editwachad} handledelete={handledelete}/>
         <ConfirmDialog />
    </div>
 )
}
export default Watchadandearan
