import React from 'react'
import CallsSidebarCard from './CallsCard/CallsSidebarCard'

export default function CallsSidebar() {
  return (
    <div className='shadow-sm shadow-[#b0aeae] fixed top-[103px] sm:w-[200px] w-[300px] bottom-0 left-[56px]'>
      <div className='mt-[10px] ml-[10px] mr-[10px]'>
        <label className="relative block">
        <input className="placeholder:text-slate-400 block bg-white w-[280px] h-[25px] sm:w-[180px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Type a name" type="text" name="search"/>
        </label>
      </div>
      <div className='mt-[10px] ml-[10px] mr-[10px]'>
        <div><CallsSidebarCard/></div>
        <div><CallsSidebarCard/></div>
        <div><CallsSidebarCard/></div>
        <div><CallsSidebarCard/></div>
        <div><CallsSidebarCard/></div>
        <div><CallsSidebarCard/></div>
        <div><CallsSidebarCard/></div>
      </div>
      <div className='ml-auto'>
        <div>Don't forward</div>
        <div>Custom Setup</div>
      </div>
    </div>
  )
}
