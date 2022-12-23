import React from 'react'
import cardImage from "../../images/image2.jpeg";
import AddIcon from '@mui/icons-material/Add';
import DuoIcon from '@mui/icons-material/Duo';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PermScanWifiIcon from '@mui/icons-material/PermScanWifi';

export default function TeamsInternalNavbarComponent() {
  return (
    <div class='flex w-[900px] ml-[300px]'>
      <div class='flex gap-4'>
        <div><img class='rounded-sm w-[40px]' src={cardImage}></img></div>
        <div>General</div>
        <div>Posts</div>
        <div>Files</div>
        <div><AddIcon/></div>
      </div>
      <div class='grid grid-cols-3 float-right'>
        <div><DuoIcon/> Meet</div>
        <div><PermScanWifiIcon/></div>
        <div><MoreHorizIcon/></div>
      </div>
    </div>
  )
}
