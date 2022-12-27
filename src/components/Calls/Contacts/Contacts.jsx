import React from 'react'
import NavbarCoponent from '../../NavbarComponet/NavbarCoponent'
import SideBarComponent from '../../SideBarComponent/SideBarComponent'
import CallsNavbar from '../CallsNavbar'
import ContactsCard from './ContactsCard'
import ContactsLabel from './ContactsLabel'
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
      <div class='ml-[76px] mr-4 my-2
       mt-[146px]'>
        <div><ContactsLabel/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
        <div><ContactsCard/></div>
      </div>
      
    </div>
  )
}
