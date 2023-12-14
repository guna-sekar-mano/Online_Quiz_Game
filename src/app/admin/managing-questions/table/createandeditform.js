'use client'
import { Dialog } from 'primereact/dialog';
import Image from 'next/image';
const CreateandeditForm = (props) => {
    const {formDialog,hideDialog,formdata,Changehandler,formconfig,handleSavequestions,handleUpdatequestions}=props;
    return (
        <div className="flex justify-between pb-5 flex-wrap gap-y-2">
          <Dialog visible={formDialog} maximizable style={{ width: '50rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Question Details" modal className="p-fluid" onHide={hideDialog}>
              <form onSubmit={formconfig.cusfun=="handleSavequestions"?handleSavequestions:handleUpdatequestions}>
                 <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-full lg:col-span-6'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Category</label>
                      <input type="text" name='Category' value={formdata.Category || ''} onChange={Changehandler} id="input-label" className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " required/>
                    </div>
                    <div className='col-span-full lg:col-span-6'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Sub Category</label>
                      <input type="text" name='Sub Category' value={formdata['Sub Category'] || ''} onChange={Changehandler} id="input-label" className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " required/>
                    </div>
                    <div className='col-span-full'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Question</label>
                      <textarea  id="input-label" name='Question' value={formdata['Question'] || ''} onChange={Changehandler} className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " required></textarea>
                    </div>
                    <div className='col-span-full'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Image for Question</label>
                      <input type='file'  id="input-label" name='Image for Question'  onChange={Changehandler} className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500  file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4file:py-3 file:px-4"/>
                      {
                        formdata['Image for Question']?.fakepath? <img className='h-[12rem] w-auto' src={URL.createObjectURL(formdata['Image for Question'].file)}/> :formdata['Image for Question']?<Image src={`${process.env.IMAGE_PATH}/${formdata['Image for Question']}`}  height={300} width={300} alt=""/>:null
                      }
                    </div>
                    <div className='col-span-full lg:col-span-6'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Option A</label>
                      <input type="text" id="input-label" name='Option A' value={formdata['Option A'] || ''} onChange={Changehandler} className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" required/>
                    </div>
                    <div className='col-span-full lg:col-span-6'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Option B</label>
                      <input type="text" id="input-label" name='Option B' value={formdata['Option B'] || ''} onChange={Changehandler} className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" required/>
                    </div>
                    <div className='col-span-full lg:col-span-6'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Option C</label>
                      <input type="text" id="input-label" name='Option C' value={formdata['Option C'] || ''} onChange={Changehandler} className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div className='col-span-full lg:col-span-6'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Option D</label>
                      <input type="text" id="input-label" name='Option D' value={formdata['Option D'] || ''} onChange={Changehandler} className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>
                    <div className='col-span-full'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Correct Answer</label>
                      <input type="text" id="input-label" name='Correct Answer' value={formdata['Correct Answer'] || ''} onChange={Changehandler} className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" required/>
                    </div>
                    <div className='col-span-full lg:col-span-6'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Level</label>
                      <select  id="input-label" name='Level' value={formdata['Level'] || ''} onChange={Changehandler} className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" >
                        <option disabled selected>Select a Level</option>
                        <option>Practice</option>
                        <option>Tutorial</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert</option>
                      </select>
                         
                    </div>
                    <div className='col-span-full lg:col-span-6'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Stage</label>
                      <input type="number" id="input-label" name='Stage' value={formdata['Stage'] || ''} onChange={Changehandler} className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>
                    <div className='col-span-full'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Explanation</label>
                      <textarea  id="input-label" name='Explanation' value={formdata['Explanation'] || ''} onChange={Changehandler} className=" py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" required></textarea>
                    </div>
                    <div className='col-span-full'>
                      <label htmlFor="input-label" className="block text-sm font-medium mb-2">Image for Explanation</label>
                      <input type='file' name='Image for Explanation'  onChange={Changehandler} id="input-label" className=" py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4file:py-3 file:px-4"/>
                      {
                        formdata['Image for Explanation']?.fakepath? <img className='h-[12rem] w-auto' src={URL.createObjectURL(formdata['Image for Explanation'].file)}/>:formdata['Image for Explanation']?<Image src={`${process.env.IMAGE_PATH}/${formdata['Image for Explanation']}`}  height={300} width={300} alt=""/>:null
                      }
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