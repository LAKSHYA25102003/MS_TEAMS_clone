import React from 'react'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import Posts from './Posts'
import SideBar from './SideBar'
import TeamsInternalNavbarComponent from './TeamsInternalNavbarComponent'

export default function GeneralComponent() {
  return (
    <div>
        <NavbarCoponent />
      <div class="flex">
        <div>
          <SideBarComponent />
        </div>
        <div  class="ml-[56px] mt-[54px] flex">
            <div class='flex flex-initial w-[200px]'><SideBar/></div>
            <div class='grid grid-cols-1'>
              <div><TeamsInternalNavbarComponent/></div>
              <div><Posts/></div>
            </div>
        </div>
      </div>
    </div>
  )
}
