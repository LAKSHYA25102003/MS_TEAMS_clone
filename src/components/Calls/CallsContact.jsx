import React from "react";
import NavbarCoponent from "../NavbarComponet/NavbarCoponent";
import SideBarComponent from "../SideBarComponent/SideBarComponent";
import CallsContactGrp from "./CallsContactGrp";
import CallsHistory from "./CallsHistory";
import CallsNavbar from "./CallsNavbar";
import CallsSidebar from "./CallsSidebar";
import CallsHistoryNavbar from "./CallsHistoryNavbar";
import CallsFilterNav from "./CallsFilterNav";

export default function CallsContact() {
  // const ClickCrossHandler = ()=>{
  //   setInputBar(<CallsHistoryNavbar onClickFilterHandler={ClickFilterHandler}/>)
  // }

  // const ClickFilterHandler = ()=>{
  //   setInputBar(<CallsFilterNav onClickCrossHandler={ClickCrossHandler}/>)
  // }
  // const [inputBar, setInputBar]=(<CallsHistoryNavbar onClickFilterHandler={ClickFilterHandler}/>)
  
  
  return (
    <div>
      <div>
        <NavbarCoponent/>
        <SideBarComponent/>
        <CallsNavbar/>
        <CallsSidebar/>
        <CallsContactGrp/>
      </div>
      <div>
        {/* <div><inputBar/></div> */}
        <div><CallsHistoryNavbar/></div>
        <hr className=''/>
        <div><CallsHistory/></div>
        </div>
    </div>
  );
}
