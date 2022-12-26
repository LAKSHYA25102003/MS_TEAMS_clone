import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MergeOutlinedIcon from '@mui/icons-material/MergeOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function CallsContactDetailsCard({open, onClose}) {
    if(!open)return null
  return (
    <div className='w-[400px] ml-auto mr-auto my-10 border-2 border-grey px-4 py-4'>
        <div className='flex gap-4'>
            <div>Details</div>
            <div className='ml-auto'><button onClick={onClose}><CloseIcon/></button></div>
        </div>
        <div>
            <div className='flex gap-4'>
                <div className='border-2 border-grey rounded-full w-20 h-20 text-center pt-4 text-[25px] font-bold'>MM</div>
                <div>
                    <div className='font-bold text-[20px]'>Manish Mishra</div>
                    <div className='text-[12px]'>B.Tech</div>
                    <div className='text-[12px]'>Mechanical Engineering</div>
                    <div className='text-[12px]'>Last seen 12/3</div>
                </div>
            </div>
            <div className='ml-2 my-2 flex gap-4'>
                <button><MessageOutlinedIcon/></button>
                <button><MergeOutlinedIcon/></button>
                <button><VideocamOutlinedIcon/></button>
                <button><CallOutlinedIcon/></button>
            </div>
            <hr/>
        </div>
        <div className='mt-2'>
            <div className='flex gap-4'>
                <div><label className="relative block">
            <input className="placeholder:text-slate-400 block bg-white w-[300px] h-[30px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Send a quick message" type="text" name="search"/>
            </label></div>
            <button><SendOutlinedIcon/></button>
            
            </div>
            <div className='mt-4'>
                <div className='font-bold text-[12px]'>Contact</div>
                <div className='my-1 text-[12px]'><AccessTimeOutlinedIcon/> 9:05 AM - Same time zone as you</div>
                <div className='text-[12px]'><MailOutlinedIcon/> manish.mishra@iitg.ac.in</div>
            </div>
        </div>
        </div>
  )
}
