import React from 'react'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

export default function CallsSidebarCard() {
  return (
    <div className='my-4 flex text-[12px] gap-4'>
        <div className='font-bold bg-[#ecd9fc] text-center border-2 border-black rounded-full w-7 h-7'>JP</div>
        <div>JITENDRA KUMAR PANDEY</div>
        <div className='flex gap-4 ml-auto'>
        <div className='hover:text-purple-500'><button><VideocamOutlinedIcon/></button></div>
        <div className='hover:text-purple-500'><button><CallOutlinedIcon/></button></div>
        </div>
        
    </div>
  )
}
