'use client'
import { useMemo } from "react";
import { Pagination,Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
const Watchadlist=(props)=>{
  const {data,totalRecords,page,rows,onPage,editwachad,handledelete}=props
  const pages = useMemo(() => {
    return totalRecords ? Math.ceil(totalRecords / rows) : 0;
  }, [totalRecords, rows]);
  return(
  <div className="mt-5">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
     {data&&data.map((item,index)=>
      <div key={index} className="p-5 rounded-2xl bg-white border flex justify-between items-center">
          <div>
            <p className="font-semibold text-lg">{item?.Adtitle}</p>
            <p>{item?.Adtotalseconds} second</p>
            <a href={item?.Adlink} target="_blank" className="text-blue-500">Ad Link</a>
          </div>
          <div className="cursor-pointer">
          <Dropdown>
            <DropdownTrigger>
              <button className="outline-none"><i className="fa-solid fa-list-ul"></i></button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="edit" onPress={()=>editwachad(item)}>Edit</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger" onPress={()=>handledelete(item._id)}>
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          </div>
      </div>
     )}
    </div> 
    <div className="grid grid-cols-1 mt-5">
      {totalRecords > 0 ? (
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
          </div>) : null
        }
    </div>
  </div>
  )
}
export default Watchadlist
