import React from 'react'
import Universal_Navbar from '../Components/Universal_Navbar'
import Chat_sidebar from '../Components/Chat_sidebar'
import Conversation from '../Components/Conversation'
import SideBarComponent from '../Components/SideBarComponent/SideBarComponent'
import { fetchConversations } from '../Redux/conversations/conversationActions'
import { useDispatch } from 'react-redux'
function Chats() {
 
    return (
        <div id='Chats'>
            <div>
                <Universal_Navbar/>
            </div>
            <div>
                <SideBarComponent/>
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
