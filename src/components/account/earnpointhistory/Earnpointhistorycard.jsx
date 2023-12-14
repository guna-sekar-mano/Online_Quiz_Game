'use client'
import './table.css'
import Tablepagination from './Tablepagination'
import Tablefilter from './Tablefilter'
const Earnpointhistorycard=(props)=>{
    const {data,totalRecords,page,rows,onPage,onGlobalFilter}=props

    return(
        <div className="p-5 rounded-2xl bg-white border">
              <Tablefilter onGlobalFilter={onGlobalFilter}/>
         <div className="grid grid-cols-1 mt-5">
            <div className="overflow-auto">
              <table className="border-collapse text-sm table-auto  overflow-scroll w-full">
               <thead>
                  <tr>
                      <th>#</th>
                      <th>History</th>
                      <th>Earnpoint Type</th>
                      <th>EarnpointCategory</th>
                      <th>Earnpointvalue</th>
                      <th>Points</th>
                      <th>Lifes</th>
               
                  </tr>
               </thead>
               <tbody className="bg-white">
                  {data&&data.map((item,index)=>
                  <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item?.History}</td>
                      <td>{item?.Earnpointtype}</td>
                      <td>{item?.Historydata?.EarnpointCategory}</td>
                      <td><i className="fa-solid fa-coins text-yellow-500 text-base"></i> {item?.Historydata?.Earnpointvalue}</td>
                      <td><i className="fa-solid fa-coins text-yellow-500 text-base"></i> {item?.Points}</td>
                      <td><i className="fa-solid fa-heart text-red-600 text-base"></i> {item?.Lifes}</td>
                     
                  </tr>
                  )}
                  {totalRecords==0&&(
                      <tr className="text-center">
                          <td colSpan={9} className="p-2">No activity found.</td>
                      </tr>
                  )}
               </tbody>
             </table>
             </div>
          </div>
         <Tablepagination totalRecords={totalRecords} page={page} rows={rows} onPage={onPage}/>

        </div>

    )
}
export default Earnpointhistorycard