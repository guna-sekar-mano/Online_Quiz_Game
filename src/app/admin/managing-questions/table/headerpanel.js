'use client'
const Headerpanel = (props) => {
    const { onGlobalFilter, openNew,editbulktable} = props;
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
                    <div className="hs-dropdown relative inline-flex">
                        <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm ">
                            <i className="fa-solid fa-list-ul"></i> Bulk Action

                        </button>

                        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-32 hidden z-10 mt-2 min-w-[15rem] bg-white shadow rounded-lg p-2" aria-labelledby="hs-dropdown-default">
                            <a onClick={editbulktable} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="#">
                                <i className="fa-regular fa-pen-to-square"></i> Edit
                            </a>

                        </div>
                    </div>

                    <a onClick={openNew} className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm " href="#">
                        <i className="fa-solid fa-plus w-3 h-3"></i>
                        Create
                    </a>

                </div>
            </div>
        </div>
    )
}
export default Headerpanel;