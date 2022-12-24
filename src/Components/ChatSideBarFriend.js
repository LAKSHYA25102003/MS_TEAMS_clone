import React from 'react'
import Avatar from "../Images/profile.jpg"

function ChatSideBarFriend() {
  return (
    <div className='flex p-3 cursor-pointer hover:bg-white'>
        <div id='profileImg'>
            <img src={Avatar} className="w-10 h-10 rounded-full" alt="" />
        </div>
        <div id='profileName' className='flex items-center p-2'>
            Lakshya
        </div>
    </div>
  )
}

export default ChatSideBarFriend
