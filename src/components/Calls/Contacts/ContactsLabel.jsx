import React from 'react'

export default function ContactsLabel() {
  return (
    <div class='text-[13px] flex shadow-sm shadow-grey py-2 bg-white'>
        <div className='w-1/2 px-2'>Name</div>
        <div className='w-1/8 sm:px-8 sm:ml-auto'>Title</div>
        <div className='sm:hidden w-1/8'>Phone</div>
        <div className='sm:hidden w-1/4'></div>
    </div>
  )
}
