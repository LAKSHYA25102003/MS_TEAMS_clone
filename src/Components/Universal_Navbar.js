import React from 'react'
import { useState } from 'react'
import Avatar from "../Images/child1.jpeg"

export default function Universal_Navbar() {
    const [focused,setFocused]=useState(false);
    const onFocus=()=>{
        setFocused(true);
    }
    const onBlur=()=>{
        setFocused(false);
    }
  return (
    <div className=' max-w-screen bg-[#444791] h-20 flex justify-between items-center'>
      <div id='un_left' className='w-1/6 sm:w-1/4 h-full flex justify-center items-center'>
        <div className='hidden sm:block text-white font-bold text-lg'>
            Microsoft Teams
        </div>
      </div>
      <div id='un_middle' className='w-1/2 h-full flex items-center justify-center mx-5'>
        <form className=' w-full h-full flex justify-center items-center'>
            {!focused&&<input type="text" className='w-full h-1/2 bg-[rgba(255,255,255,.8)] outline-none rounded-md p-2 font-bold ' onFocus={onFocus} onBlur={onBlur} placeholder="&#128269; Search" />}
            {
                focused&&<input type="text" className='w-full h-1/2 bg-[#fff] outline-none rounded-md p-2 font-bold' onFocus={onFocus} onBlur={onBlur} placeholder="Look for message, files and more."/>
            }
        </form>
      </div>
      <div id='un_right ' className=' w-1/4 h-full px-5'>
            <div id='avatar' className='h-full w-full flex justify-end'>
                <img src={Avatar} alt="Avatar" className='rounded-full cursor-pointer'/>
            </div>
      </div>
    </div>
  )
}
