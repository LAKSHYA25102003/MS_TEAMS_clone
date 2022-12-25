import React from 'react'
import Universal_Navbar from '../Components/Universal_Navbar'
import Chat_sidebar from '../Components/Chat_sidebar'
import Universal_left_bar from '../Components/Universal_left_bar'
import Conversation from '../Components/Conversation'

function Chats() {
    return (
        <div id='Chats'>
            <div>
                <Universal_Navbar />
            </div>
            <div>
                <Universal_left_bar />
            </div>
            <div className='hidden md:block'>
                <Chat_sidebar />
            </div>
            <div>
                <Conversation />
            </div>
        </div>
    )
}

export default Chats
