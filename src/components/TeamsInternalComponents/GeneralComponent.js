import React from 'react'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import Posts from './Posts'
import SideBar from './SideBar'
import TeamsInternalFooter from './TeamsInternalFooter'
import TeamsInternalNavbarComponent from './TeamsInternalNavbarComponent'

export default function GeneralComponent() {
  return (
    <div>
        <NavbarCoponent />
      <div class="bg-[#ebebeb] flex">
        <div>
          <SideBarComponent />
        </div>
        <div  class="bg-[#ebebeb] relative ml-[56px] mt-[54px] flex">
            <div class='md:w-0 flex flex-initial'><SideBar/></div>
            <div class='shadow-lg shadow-[#b0aeae]'>
              <div><TeamsInternalNavbarComponent/></div>
              <div><Posts/></div>
              <div><TeamsInternalFooter/></div>
            </div>
        </div>
      </div>
    </div>
  )
}
