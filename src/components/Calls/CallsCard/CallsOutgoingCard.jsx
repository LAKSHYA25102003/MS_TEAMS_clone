import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from 'react';
import CallsContactDetailsCard from './CallsContactDetailsCard';

export default function CallsOutgoingCard() {
    const [isContactDetailOpen,setIsContactDetailOpen]=useState(false)
    return (
        <>
        <button onClick={()=>{setIsContactDetailOpen(true)}} className='hover:bg-[#ebebeb] mr-[20px] ml-[20px] w-full flex gap-4 py-[2px] text-center px-4 text-[12px] '>
            <div className='mt-1 pt-[1px] bg-[#ecd9fc] text-center border-2 border-black rounded-full w-7 h-7'>MM</div>
            <div>
                <div>Manish Mishra</div>
                <div className='my-1'><LocalPhoneIcon/> Outgoing</div>
            </div>
            <div className='ml-auto flex gap-4'><div>19m 59s</div>
            <div className=''>6/1/2022</div></div>
            <hr/>
        </button>
        <CallsContactDetailsCard open={isContactDetailOpen} onClose={()=>{setIsContactDetailOpen(false)}}/>
    </>
    )
}
