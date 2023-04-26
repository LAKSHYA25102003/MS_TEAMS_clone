import React from 'react'
import Universal_Navbar from '../Components/Universal_Navbar'
import SideBarComponent from '../Components/SideBarComponent/SideBarComponent'
import Streaming from '../Components/Streaming'



function VideoCall() {
  return (
    <div id='videoCall'>
            <div>
                <Universal_Navbar/>
            </div>
            <div>
                <SideBarComponent/>
            </div>
            <div>
                <Streaming/>
            </div>
        </div>
  )
}

export default VideoCall
