'use client'
import './table.css'
import Tablepagination from './Tablepagination'
import Tablefilter from './Tablefilter'
const Trackyouractivitycard=(props)=>{
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
                      <th>Game Type</th>
                      <th>Level</th>
                      <th>Stage</th>
                      <th>Score</th>
                      <th>Points</th>
                      <th>Lifes</th>
                      <th>Game Time</th>
                      <th>Game Status</th>
                  </tr>
               </thead>
               <tbody className="bg-white">
                  {data&&data.map((item,index)=>
                  <tr key={index}>
                      <td>{index + 1 + (page - 1) * rows}</td>
                      <td>{item?.Game_Type}</td>
                      <td>{item?.Level??'-'}</td>
                      <td>{item?.Stage??'-'}</td>
                      <td><i className="fa-solid fa-star text-blue-800 text-base"></i>{item?.CorrectAnswerCount??0}</td>
                      <td><i className="fa-solid fa-coins text-yellow-500 text-base"></i> {item?.Points}</td>
                      <td><i className="fa-solid fa-heart text-red-600 text-base"></i> {item?.Lifes}</td>
                      <td>{item?.Game_Time}</td>
                      <td><i className="fa-solid fa-trophy text-base text-yellow-500"></i> {item?.Game_Status}</td>
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
export default Trackyouractivitycard