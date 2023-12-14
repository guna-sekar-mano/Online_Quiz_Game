'use client'
import { Dialog } from 'primereact/dialog';
const CreateandeditForm = (props) => {
    const {formDialog,hideDialog,formdata,Changehandler,formconfig,handleUpdateusers}=props;
    return (
        <div className="flex justify-between pb-5 flex-wrap gap-y-2">
          <Dialog visible={formDialog} maximizable style={{ width: '50rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="User Details" modal className="p-fluid" onHide={hideDialog}>
              <form onSubmit={handleUpdateusers}>
                 <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-full'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Status</label>
                      <select type="text" name='Status' value={formdata.Status || ''} onChange={Changehandler} id="input-label" className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " required>
                          <option value="Active">Active</option>
                          <option value="inactive">inactive</option>
                      </select>
                    </div>
      
                    <div className='col-span-full'>
                        <div className='d-flex '>
                            <button type="button" onClick={hideDialog} className="mr-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm">
                               <i className="fa-solid fa-xmark"></i> Cancel
                            </button>
                            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                             <i className="fa-solid fa-check"></i>  Save
                            </button>
                        </div>
                    </div>
                 </div>
              </form>
          </Dialog>
        </div>
    )
}
export default CreateandeditForm;