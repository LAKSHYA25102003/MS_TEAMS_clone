import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function SecondNav() {
  return (
    <div className="py-2 px-2 fixed top-[42px] right-0 left-[56px] bg-[#ebebeb] z-[1] grid grid-cols-2">
        <div className='text-left mx-2'>Teams</div>
        {/* <div class="text-right grid grid-cols-3"> */}
        <div className="flex ml-auto">
            <div><button><FilterListIcon/></button></div>
            <div><button><SettingsIcon/></button></div>
            <div><button><GroupAddIcon/> Join or create team</button></div>
        </div>
    </div>
  )
}
