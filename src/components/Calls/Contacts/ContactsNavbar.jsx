import React from 'react'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
export default function ContactsNavbar() {
  return (
    <div className="bg-[#ebebeb] flex fixed right-0 top-[103px] left-[56px] ">
        <div className='ml-5 mt-2'>
            <label className='relative block'>
                <input className='border-2 px-2 rounded-md border-grey placeholder:text-slate-400 bg-white w-[300px]' name='' type="text" placeholder='Find a contact'  />
            </label>
        </div>
        <div className='ml-auto'>
            <button className='bg-[#5f62b3] font-bold text-[13px] text-white rounded-md mr-4 my-2 mx-2 px-2'><PersonAddOutlinedIcon/> Add contact</button>
        </div>
    </div>
  )
}
