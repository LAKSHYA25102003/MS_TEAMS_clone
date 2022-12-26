import React from 'react'
import Cards from '../NavbarComponet/Cards'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import SecondNav from '../NavbarComponet/SecondNav'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'

export default function RenderingFirst() {
  return (
    <div>
        <NavbarCoponent />
      <div className="flex">
        <div>
          <SideBarComponent />
        </div>
        <div  className="ml-[56px] mt-[54px] grid grid-cols-1">
          <div ><SecondNav/></div>
          <div className="bg-[#ebebeb] px-6 py-[80px] grid xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
