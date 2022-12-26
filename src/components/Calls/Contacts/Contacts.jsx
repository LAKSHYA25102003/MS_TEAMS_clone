import React from 'react'
import NavbarCoponent from '../../NavbarComponet/NavbarCoponent'
import SideBarComponent from '../../SideBarComponent/SideBarComponent'
import CallsNavbar from '../CallsNavbar'
import ContactsNavbar from './ContactsNavbar'

export default function Contacts() {
  return (
    <div>
      <div>
        <NavbarCoponent/>
        <SideBarComponent/>
        <CallsNavbar/>
        <ContactsNavbar/>
      </div>
    </div>
  )
}
