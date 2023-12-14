'use client'
import { Dialog } from 'primereact/dialog';
import Image from 'next/image';
const Viewdetailsresult=(props)=>{
 const {formDialog,viewdata,hideDialog}=props;
 return(
    <div className="flex justify-between pb-5 flex-wrap gap-y-2">
          <Dialog visible={formDialog} maximizable style={{ width: '50rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="View Detailed Results" modal className="p-fluid" onHide={hideDialog}>
             {
                  viewdata?.map((data,index)=>
                  <div key={index} className='mb-3'>
                    <h1 className='font-semibold'><span>{index+1}</span>.{data.Question}</h1>
                    <Image src={`${process.env.IMAGE_PATH}/${data['Image for Question']}`}  className="flex-shrink-0  w-[250px] rounded-md" width={500} height={500} alt=""/>
                    <div className="inline-flex rounded-md shadow-sm">
                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium  text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
                        {data?.['Option A']}
                        </button>
                         
                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium  text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
                        {data?.['Option B']}
                        </button>
                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium  text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
                        {data?.['Option C']}
                        </button>
                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium  text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
                         {data?.['Option D']}
                        </button>
                    </div>
                    <div>
                     <span className='text-blue-500'>Selected Answer: {data?.Selected_Answer}</span>---<span className='text-green-500'>Correct Answer: {data?.['Correct Answer']}</span>
                    </div>
                  </div>
                  )
             }
          </Dialog>
    </div>
 )
}
export default Viewdetailsresult;