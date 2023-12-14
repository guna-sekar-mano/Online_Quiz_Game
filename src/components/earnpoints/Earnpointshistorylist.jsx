'use client'
import { useMemo } from "react";
import { Pagination } from "@nextui-org/pagination";
const Earnpointshistorylist=(props)=>{
  const {data,totalRecords,page,rows,onPage}=props
  const pages = useMemo(() => {
    return totalRecords ? Math.ceil(totalRecords / rows) : 0;
  }, [totalRecords, rows]);
  return(
  <div className="mt-5">
    <div className="p-5 rounded-2xl bg-white border">
       <div className="grid grid-cols-1">
          <div className="overflow-auto">
            <table class="border-collapse text-sm table-auto  overflow-scroll w-full">
            <thead>
                <tr>
                <th class="border-b  font-medium  p-4 pl-8 text-slate-400  text-left">#</th>
                   <th class="border-b  font-medium  p-4 pl-8 text-slate-400  text-left">userId</th>
                    <th class="border-b  font-medium  p-4 pl-8 text-slate-400  text-left">Email</th>
                    <th class="border-b  font-medium  p-4 pl-8 text-slate-400  text-left">History</th>
                    <th class="border-b  font-medium  p-4 pl-8 text-slate-400  text-left">Earnpointtype</th>
                    <th class="border-b  font-medium  p-4 pl-8 text-slate-400  text-left">EarnpointCategory</th>
                    <th class="border-b  font-medium  p-4 pl-8 text-slate-400  text-left">Earnpointvalue</th>
                    <th class="border-b  font-medium  p-4 pl-8 text-slate-400  text-left">Points</th>
                    <th class="border-b  font-medium  p-4 pl-8 text-slate-400  text-left">Lifes</th>
                </tr>
            </thead>
            <tbody class="bg-white">
                {data&&data.map((item,index)=>
                <tr key={index}>
                    <td class="border-b border-slate-100  p-4 pl-8 text-slate-500">{index + 1 + (page - 1) * rows}</td>
                    <td class="border-b border-slate-100  p-4 pl-8 text-slate-500">{item?.userId}</td>
                    <td class="border-b border-slate-100  p-4 pl-8 text-slate-500">{item?.Email}</td>
                    <td class="border-b border-slate-100  p-4 pl-8 text-slate-500">{item?.History}</td>
                    <td class="border-b border-slate-100  p-4 pl-8 text-slate-500">{item?.Earnpointtype}</td>
                    <td class="border-b border-slate-100  p-4 pl-8 text-slate-500">{item?.Historydata?.EarnpointCategory}</td>
                    <td class="border-b border-slate-100  p-4 pl-8 text-slate-500"><i className="fa-solid fa-coins text-yellow-500 text-base"></i> {item?.Historydata?.Earnpointvalue}</td>
                    <td class="border-b border-slate-100  p-4 pl-8 text-slate-500"><i className="fa-solid fa-coins text-yellow-500 text-base"></i> {item?.Points}</td>
                    <td class="border-b border-slate-100  p-4 pl-8 text-slate-500"><i className="fa-solid fa-heart text-red-600 text-base"></i> {item?.Lifes}</td>
               
                </tr>
                )}
                {totalRecords==0&&(
                    <tr className="text-center ">
                        <td colSpan={9} className="p-2">No point history found.</td>
                    </tr>
                )

                }
           </tbody>
           </table>
           </div>
        </div>
        <div className="grid grid-cols-1 mt-5">
    
            <div className="flex w-full justify-center">
            <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={(page) => onPage(page)}
                    />
            </div>
            
        </div>
    </div> 
  </div>
  )
}
export default Earnpointshistorylist
