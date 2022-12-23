import React from 'react'
import EditIcon from '@mui/icons-material/Edit';

export default function TeamsInternalFooter() {
  return (
    <div class='bg-[#ebebeb] fixed right-0 left-[356px] bottom-0'>
        <div class='ml-20 rounded-sm text-white text-center w-[200px] bg-[#444791] py-[4px] my-2'><button><EditIcon/> New Conversation</button></div>
    </div>
  )
}
