'use client'
const Headerpanel = (props) => {
    const { onGlobalFilter} = props;
    return (
        <div className="flex justify-between pb-5 flex-wrap gap-y-2">
            <div className="sm:col-span-1">
                <label htmlFor="hs-as-table-product-review-search" className="sr-only">Search</label>
                <div className="relative">
                    <input type="text" onChange={onGlobalFilter} id="hs-as-table-product-review-search" name="hs-as-table-product-review-search" className="py-2 px-3 pl-11 block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 " placeholder="Search" />
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                        <i className="fa-solid fa-magnifying-glass h-4 w-4 text-gray-400"></i>
                    </div>
                </div>
            </div>
            <div>
                <div className="inline-flex gap-x-2 flex-wrap gap-y-2">
                  
                  

                </div>
            </div>
        </div>
    )
}
export default Headerpanel;