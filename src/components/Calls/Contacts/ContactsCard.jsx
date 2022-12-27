import React from 'react'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function ContactsCard() {
  return (
    <div className='flex gap-2 py-1 shadow-sm shadow-grey hover:bg-[]'>
      <div className='w-1/2 px-1 flex gap-2'>
        <div className='bg-[#eedff7] w-9 h-9 text-center pt-[1px] rounded-full border-2 border-black'>MM</div>
        <div className='text-[13px] pt-1'>MANISH MISHRA</div>
      </div>
      <div className='sm:ml-auto sm:px-4 text-[13px] pt-1 w-1/8'>B.TECH.</div>
      <div className="sm:hidden pt-1 mx-4 ml-auto gap-4 flex">
        <div><MessageOutlinedIcon/></div>
        <div><MailOutlinedIcon/></div>
        <div><VideocamOutlinedIcon/></div>
        <div><CallOutlinedIcon/></div>
        <div><MoreHorizOutlinedIcon/></div>
      </div>
    </div>
  )
}
