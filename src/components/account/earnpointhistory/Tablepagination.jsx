'use client'
import { useMemo } from "react";
import { Pagination } from "@nextui-org/react";
const Tablepagination=(props)=>{
    const {totalRecords,page,rows,onPage}=props
    const pages = useMemo(() => {
      return totalRecords ? Math.ceil(totalRecords / rows) : 0;
    }, [totalRecords, rows]);
    return(
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
    )
}
export default Tablepagination