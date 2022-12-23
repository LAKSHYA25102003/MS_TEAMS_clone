import React from 'react'
// import VideocamIcon from '@material-ui/icons/Videocam';
import DuoIcon from '@mui/icons-material/Duo';
import ReplyIcon from '@mui/icons-material/Reply';

export default function PostsCard() {
  return (
    <div class='border-solid border-gray my-5 flex'>
        <div class='text-center mr-3 w-8 h-8 bg-[#ffffff] rounded-full'><DuoIcon/></div>
        <div class='bg-[#ffffff] rounded-sm px-2 py-1 shadow-sm shadow-[#b0aeae] flex-initial w-[850px]'>
            <div>New channel meeting ended: 23m27s</div>
            <div class='flex'>
              <div class='flex initial w-[50px]'><DuoIcon/></div>
              <div>Meeting ended: 14s</div>
            </div>
            <div><ReplyIcon/> Reply</div>
        </div>
    </div>
  )
}
