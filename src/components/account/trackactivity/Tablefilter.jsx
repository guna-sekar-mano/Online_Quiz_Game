'use client'

const Tablefilter=({onGlobalFilter})=>{

    return(
          <div className="grid grid-cols-1">
              <div className="flex w-full justify-between flex-wrap items-center">
                <h1>Track Your Activity</h1>
                <input type="text" onChange={onGlobalFilter} className="py-2 text-center lg:text-start lg:px-6 bg-slate-100 border rounded-xl outline-none" placeholder="search activity...."/>
              
              </div>
          </div>
    )
}
export default Tablefilter