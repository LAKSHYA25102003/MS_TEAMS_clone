import React from 'react'
import CallIcon from "@mui/icons-material/Call";
import { Link } from 'react-router-dom';

export default function CallsNavbar() {
  return (
    <div className='bg-[#ebebeb] text-center pl-5 py-3 flex gap-5 fixed right-0 left-[56px] top-[42px]'>
        <div className='rounded-lg py-1 px-1 text-white bg-[#444791]'><CallIcon/></div>
        <div className='py-1 font-bold text-[18px]'>Calls</div>
        <div className='py-2 text-[14px]'><Link to='/calls'><button>Phone</button></Link></div>
        <div className='py-2 text-[14px]'><Link to='/calls/contacts/'><button>Contacts</button></Link></div>
    </div>
  )
}
