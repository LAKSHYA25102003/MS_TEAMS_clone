import React from 'react'
import Avatar from "../Images/profile.jpg"
import { useContext } from 'react'
import chatContext from '../Context/ChatContext/chatContext'

const Searchbar = ({u}) => {
  const {createConversation}=useContext(chatContext);

  return (
    <div className='flex items-center gap-2 cursor-pointer hover:bg-[#dadade54] p-[10px]' onClick={()=>{createConversation(u._id)}}>
      <div className='mx-[10px]'>
        <img src={Avatar} alt="Avatar" className='w-[40px] h-[40px] rounded-[50%]' />
      </div>
      <div>
        {u.firstName+" "+u.lastName}
      </div>
    </div>
  )
}

export default Searchbar
