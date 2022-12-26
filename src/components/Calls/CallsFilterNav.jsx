import React, { useState } from 'react'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function CallsFilterNav({filterOpen, onClose}) {
  if(!filterOpen)return null
  return (
    <div className='z-[1] bg-[#f7f9fc] text-[12px] px-3 py-2 fixed sm:left-[256px] left-[356px] right-[300px] sm:right-0 md:right-0 top-[115px] flex'>
        <div>
        <label className="relative block">
        <input className="placeholder:text-slate-400 block bg-white w-[600px] sm:w-[300px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Filter by name or number" type="text" name="search"/>
        </label>
        </div>
        <div className='ml-auto flex'>
        <button><MoreHorizOutlinedIcon/></button>
        <button onClick={onClose}><CloseOutlinedIcon/></button>
        </div>
    </div>
  )
}
