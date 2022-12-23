import React from 'react'
import cardImage from "../../images/image2.jpeg";
import AddIcon from '@mui/icons-material/Add';
import DuoIcon from '@mui/icons-material/Duo';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PermScanWifiIcon from '@mui/icons-material/PermScanWifi';

export default function TeamsInternalNavbarComponent() {
  return (
    <div  class='bg-[#ebebeb] shadow-sm shadow-[#b0aeae] fixed top-[36px] right-0 left-[356px] flex mt-4  '>
      <div class='ml-3 mt-3 mb-3 flex gap-2'>
        <div><img class='rounded-sm w-[40px]' src={cardImage}></img></div>
        <div>General</div>
        <div>Posts</div>
        <div>Files</div>
        <div><AddIcon/></div>
      </div>
      <div class='mt-3 mb-3 ml-auto mr-3 flex float-right gap-1'>
        <div><DuoIcon/> Meet</div>
        <div class='text-[15px] w-5 h-5 text-center border-2 border-black rounded-full'>i</div>
        <div><MoreHorizIcon/></div>
      </div>
    </div>
  )
}
