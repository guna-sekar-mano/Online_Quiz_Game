'use client'
import dynamic from 'next/dynamic';
const ActionTemplate= dynamic(() => import('./actionTemplate'));
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const Activitytable=(props)=>{
    const {tablebodydata,loading,first,rows,totalRecords,onPage,globalFilter,viewdetailsresult,downloadcertificate}=props;
    const tableheadclass="text-xs !text-gray-700  !bg-gray-50 !p-4";
    const serialNumberTemplate = (rowData, column) => {
      return  column.rowIndex + 1;
    };

    return(
        <>
            <DataTable dataKey="_id" paginator value={tablebodydata} lazy stripedRows  loading={loading}  first={first} rows={rows} size={'small'} 
             scrollable 
    
             emptyMessage="No records found"
             paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
             totalRecords={totalRecords}
             currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
             cellClassName={'text-xs !text-gray-700 !px-4 !py-3  text-gray-900 whitespace-nowrap'}
             onPage={onPage}
             globalFilter={globalFilter}
             scrollHeight="600px"
             paginatorLeft
     
            >   
               <Column field="Index"  header="ID"  headerClassName={tableheadclass} body={serialNumberTemplate}></Column>
               <Column field="Game_Type" header="Game Type" headerClassName={tableheadclass}
                body={(rowData)=><><i className="fa-solid fa-gamepad text-base text-green-600"></i> {rowData.Game_Type??'-'}</>}></Column>
               <Column field="Level" header="Level" headerClassName={tableheadclass}></Column>
               <Column field="Stage" header="Stage" headerClassName={tableheadclass}></Column>
             
               <Column field="CorrectAnswerCount" header="Score" headerClassName={tableheadclass} 
               body={(rowData)=><><i className="fa-solid fa-star text-blue-800 text-base"></i> {rowData.CorrectAnswerCount??'0'}</>}></Column>
                 <Column field="Points" header="Points" headerClassName={tableheadclass} body={(rowData)=><><i className="fa-solid fa-coins text-yellow-500 text-base"></i> {rowData.Points}</>}></Column>
                <Column field="Lifes" header="Lifes" headerClassName={tableheadclass} body={(rowData)=><><i className="fa-solid fa-heart text-red-600 text-base"></i> {rowData.Lifes}</>}></Column>
               <Column field="Game_Time" header="Game Time" headerClassName={tableheadclass}></Column>
        
               <Column field="Game_Status" header="Game Status" headerClassName={tableheadclass} body={(rowData)=><><i className="fa-solid fa-trophy text-base text-yellow-500"></i> {rowData.Game_Status??'-'}</>}></Column>
               <Column header="Action" headerClassName={tableheadclass} body={(rowData)=><ActionTemplate viewdetailsresult={viewdetailsresult} rowData={rowData} downloadcertificate={downloadcertificate}/>}></Column>
           </DataTable>
        </>
    )
}
export default Activitytable;