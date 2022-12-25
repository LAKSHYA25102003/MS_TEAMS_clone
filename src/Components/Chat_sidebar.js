import React from 'react'
import Universal_Navbar from './Universal_Navbar'
import Universal_left_bar from './Universal_left_bar'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import ChatSideBarFriend from './ChatSideBarFriend';
import "./Chat_sidebar.css"

function Chat_sidebar() {
    return (
        <div>
            <Universal_Navbar />
            <Universal_left_bar />
            <div id='chatSideBar' className='shadow-inner  border-[#b7b3b36d] fixed left-[75px] top-[60px] w-[230px] md:w-[320px] flex flex-col bg-[#ebebeb97] min-h-screen border-r-2 border-['>
                <div id='chatSideBarTop' className='flex items-center border-b-[1px] border-gray-300 p-4' style={{ "color": "#242424" }}>
                    <div className='w-1/2 justify-start px-3 text-2xl font-bold'>
                        Chat
                    </div>
                    <div className='w-1/2 flex items-center justify-end space-x-3 px-3'>
                        <div>
                            <FilterListOutlinedIcon />
                        </div>
                        <div>
                            <AddCommentOutlinedIcon />
                        </div>
                    </div>
                </div>
                <div id='chatFriendsList' className='h-[100vh]' style={{ "overflowY": "auto" }}>
                    <ChatSideBarFriend />
                    <ChatSideBarFriend />
                    <ChatSideBarFriend />
                    <ChatSideBarFriend />
                    <ChatSideBarFriend />
                    <ChatSideBarFriend />
                    <ChatSideBarFriend />
                </div>
            </div>
        </div>
    )
}

export default Chat_sidebar
