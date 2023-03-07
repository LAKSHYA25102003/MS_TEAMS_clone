import React, { useEffect } from 'react'
import Avatar from "../Images/profile.jpg"
import { useSelector } from 'react-redux'
import { useState } from 'react';



function ChatSideBarFriend({ c }) {
  const [friend,setFriend] = useState(null);
  const currUser = useSelector(state => { return state.user });
  const f=useSelector(state=>{return state.conversations});
  let fid;
  if (c.members[0] === currUser.user.id) {
    fid = c.members[1];
  }
  else {
    fid = c.members[0];
  }

  useEffect(()=>{
    f.friends.forEach(element => {
      if(element._id===fid)
      {
        setFriend(element.firstName+" "+element.lastName);
      }
    });
  },[])


  return (
    <div className='flex p-3 cursor-pointer hover:bg-white'>
      <div id='profileImg'>
        <img src={Avatar} className="w-10 h-10 rounded-full" alt="" />
      </div>
      <div id='profileName' className='flex items-center p-2'>
        {friend}
      </div>
    </div>
  )
}

export default ChatSideBarFriend
