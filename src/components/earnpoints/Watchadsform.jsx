'use client'
const Watchadsform=(props)=>{
  const {showModal,formdata,changeHandler,handlesavewatchads,handleupdatewatchads}=props
  return(
  <div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
     <form  className="grid grid-cols-1 gap-4" onSubmit={showModal.formname=="Addform"?handlesavewatchads:handleupdatewatchads}>
        <div>
          <label className="font-semibold">Adtitle</label>
          <div>
           <input type="text" name="Adtitle" onChange={changeHandler} value={formdata.Adtitle||''} className="py-2 px-4 border rounded-lg w-full md:w-auto" placeholder="Enter Adtotalseconds" required/>
          </div>
        </div>
        <div>
          <label className="font-semibold">Adtotalseconds</label>
          <div>
           <input type="number" name="Adtotalseconds" onChange={changeHandler} value={formdata.Adtotalseconds||''} className="py-2 px-4 border rounded-lg w-full md:w-auto" placeholder="Enter Adtotalseconds" required/>
          </div>
        </div>
        <div>
          <label className="font-semibold">Adlink</label>
          <div>
            <input type="text" name="Adlink" onChange={changeHandler} value={formdata.Adlink||''} className="py-2 px-4 border rounded-lg w-full md:w-auto" placeholder="Enter Adlink" required/>
          </div>
       </div>
       <div>
        <button type="submit" className="py-2 px-4 border rounded-lg hover:border-gray-800 hover:bg-gray-800  hover:text-white">
          {showModal.formname=="Addform"?'Save':'Update'} 
        </button>
       </div>
     </form>
    </div>
  </div>
  )
}
export default Watchadsform
