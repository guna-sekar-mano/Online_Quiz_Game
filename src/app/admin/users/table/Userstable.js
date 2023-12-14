'use client'
import React from "react";
import dynamic from "next/dynamic";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const ActionTemplate= dynamic(() => import('./actionTemplate'));
const Userstable=(props)=>{
    const {tablebodydata,loading,first,rows,totalRecords,onPage,globalFilter,selectedProducts, setSelectedProducts,edittable}=props;
    const tableheadclass="text-xs !text-gray-700  !bg-gray-50 !p-4";
    const serialNumberTemplate = (rowData, column) => {
      return  column.rowIndex + 1;
    };
    const getSeverity = (items) => {
        switch (items) {
            case 'Active':
                return <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">{items}</span>;

            case 'inactive':
                return <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800">{items}</span>;
            default:
                return null;
        }
    };
        
    return(
        <>
             <DataTable dataKey="_id" paginator value={tablebodydata} lazy stripedRows  loading={loading}  first={first} rows={rows} size={'small'} 
                  scrollable 
                  selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                  emptyMessage="No records found"
                  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                  totalRecords={totalRecords}
                  currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
                  cellClassName={'text-xs !text-gray-700 !px-4 !py-3  text-gray-900 whitespace-nowrap'}
                  onPage={onPage}
                  globalFilter={globalFilter}
                  scrollHeight="600px"
          
                 >
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} headerClassName={tableheadclass} footerClassName="bg-red-500"></Column>
                    <Column field="Index"  header="ID"  headerClassName={tableheadclass} body={serialNumberTemplate}></Column>
                    <Column field="userId" header="userId" headerClassName={tableheadclass}></Column>
                    <Column field="Full Name" header="Full Name" headerClassName={tableheadclass}></Column>
                    <Column field="Email" header="Email" headerClassName={tableheadclass}></Column>
                    <Column field="Points" header="Points" headerClassName={tableheadclass} body={(rowData)=><><i className="fa-solid fa-coins text-yellow-500 text-base"></i> {rowData.Points}</>}></Column>
                    <Column field="Lifes" header="Lifes" headerClassName={tableheadclass} body={(rowData)=><><i className="fa-solid fa-heart text-red-600 text-base"></i> {rowData.Lifes}</>}></Column>
                    <Column field="Status" header="Status" headerClassName={tableheadclass} body={(rowData)=>getSeverity(rowData.Status)}></Column>
                    <Column header="Action" headerClassName={tableheadclass} body={(rowData)=><ActionTemplate edittable={edittable} rowData={rowData}/>}></Column>
                </DataTable>
        </>
    )

}
export default Userstable;