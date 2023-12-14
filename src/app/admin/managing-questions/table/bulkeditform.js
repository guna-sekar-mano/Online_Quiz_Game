'use client'
import { Dialog } from 'primereact/dialog';
import { TabView, TabPanel } from 'primereact/tabview';
const Bulkeditform=(props)=>{
    const {bulkformDialog,hidebulkDialog,formdata,Changehandler,handleBulkupdate}=props;
    return(
        <div  className="flex justify-between pb-5 flex-wrap gap-y-2">
          <Dialog visible={bulkformDialog} maximizable style={{ width: '50rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Question Details" modal className="p-fluid" onHide={hidebulkDialog}>
          <TabView>
              <TabPanel header="Update Level">
                    
              <form onSubmit={handleBulkupdate}>
                 <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-full'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Level</label>
                      <select name='Level'  onChange={Changehandler} id="input-label" className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " required>
                        <option disabled selected>Select a Level</option>
                        <option>Practice</option>
                        <option>Tutorial</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert</option>
                      </select>
                    </div>
            
                    <div className='col-span-full'>
                        <div className='d-flex '>
                            <button type="button" onClick={hidebulkDialog} className="mr-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm">
                               <i className="fa-solid fa-xmark"></i> Cancel
                            </button>
                            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                             <i className="fa-solid fa-check"></i>  Submit
                            </button>
                        </div>
                    </div>
                 </div>
              </form>
              </TabPanel>
              <TabPanel header="Update Stage">
                    
              <form onSubmit={handleBulkupdate}>
                 <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-full'>
                    <label htmlFor="input-label" className="block text-sm font-medium mb-2">Stage</label>
                      <input type="number" id="input-label" name='Stage'  onChange={Changehandler} className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>
            
                    <div className='col-span-full'>
                        <div className='d-flex '>
                            <button type="button" onClick={hidebulkDialog} className="mr-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm">
                               <i className="fa-solid fa-xmark"></i> Cancel
                            </button>
                            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                             <i className="fa-solid fa-check"></i>  Submit
                            </button>
                        </div>
                    </div>
                 </div>
              </form>
              </TabPanel>
          </TabView>
              
            
          </Dialog>
        </div>
    )
}
export default Bulkeditform;