import React, { useContext, useState } from 'react'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import Cards from '../NavbarComponet/Cards'
import SecondNav from '../NavbarComponet/SecondNav'
import Posts from './Posts'
import SideBar from './SideBar'
import GS from "../../images/GS.jpg"
import MeetEnded from './MeetCards/MeetEnded'
import EntryMessage from './MeetCards/EntryMessage'
import GeneralMessage from './MeetCards/GeneralMessage'
import MeetingCard from './MeetCards/MeetingCard'
import FileInMeetCard from './MeetCards/FileInMeetCard'
import GoToTop from '../GoToTop'
import GoToBottom from '../GoToBottom'
import GeneralNavBar from './MeetCards/GeneralNavBar'
import GeneralContent from './MeetCards/GeneralContent'
import GrpContext from '../../Context/GrpContext/GrpContext'
import AssignmentCard from './AssignmentCard'

export default function GeneralComponent() {

  const [topNav, setToNav] = useState(<GeneralNavBar />);
  const { grpState } = useContext(GrpContext);

  const [isassign, setIsAssign] = useState(true);

  const clickAssign = () => {
    setIsAssign(true);
    window.scrollTo(0, 0);
  }

  const clickCompleted = () => {
    setIsAssign(false);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div>
        <NavbarCoponent />
        <div class="flex">
          <div>
            <SideBarComponent />
          </div>
          {topNav}
        </div>
        <div className="entrymessage ">
          {grpState === "general" ? <EntryMessage /> :
            <div className='container pl-[100px] pt-[90px] min-[946px]:pt-[130px]  min-[946px]:pl-[400px] mb-2 pr-10 w-screen'>
              <div className="flex space-x-4 pt-3 pl-2 ">
                {isassign ? <div className="assigned">
                  <span className='text-[#444791] text-sm font-semibold cursor-pointer border-b-[3px] border-indigo-500' onClick={() => clickAssign()}>Assigned</span>
                </div> : <div className="assigned">
                  <span className='text-black text-sm font-base cursor-pointer hover:border-b-[3px] ' onClick={() => clickAssign()}>Assigned</span>
                </div>}
                {!isassign ? <div className="completed">
                  <span className='text-[#444791] text-sm font-semibold cursor-pointer border-b-[3px]  border-indigo-500' onClick={() => clickCompleted()}>Completed</span>
                </div> : <div className="completed">
                  <span className='text-black text-sm font-base cursor-pointer hover:border-b-[3px]  ' onClick={() => clickCompleted()}>Completed</span>
                </div>}
              </div>
              {isassign ? <div className="">
                <AssignmentCard />
                <AssignmentCard />
                <AssignmentCard />
                <AssignmentCard />
                <AssignmentCard />
                <AssignmentCard />
                <AssignmentCard />
                <AssignmentCard />
                <AssignmentCard />
                <AssignmentCard />
                <AssignmentCard />
                <AssignmentCard />
                <AssignmentCard />
              </div> : <div className="">
                <AssignmentCard />
                <AssignmentCard />
              </div>}
            </div>}
        </div>
        {grpState === "general" ? <GeneralContent /> : <div className="cards ml-[150px] w-[70%] min-[946px]:ml-[450px] mb-4"><h1></h1></div>}
      </div>
    </>
  )
}
