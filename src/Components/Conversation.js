import React from 'react'
import Avatar from "../Images/profile.jpg"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Conversation() {
    return (
        <div id='conversation' className='fixed top-[60px] left-[75px] md:left-[395px] right-0 h-[100vh] bg-[#ebebeb70]'>
            <div id='conversationTop' className='flex items-center border-b-[1px] border-gray-300 h-[65px]'>
                <div className='flex w-1/2  items-center space-x-3'>
                    <img className='h-[43px] w-[43px] rounded-full ml-3 cursor-pointer' src={Avatar} alt="Lakshya" />
                    <div className='font-bold text-[20px] cursor-pointer'>Lakshya</div>
                    <div className='cursor-pointer'>Chat</div>
                    <div className='cursor-pointer'>Files</div>
                    <div className='cursor-pointer'>Organisation</div>
                    <div className='cursor-pointer'>Activity</div>
                </div>
                <div className='flex justify-end items-center'>

                </div>
            </div>
            <div id='conversatioMid' className='pl-10 md:pl-20 pr-[140px] md:pr-[480px]'>

            </div>
            <div id='conversationBottom' className='pl-10 md:pl-20 pr-[140px] md:pr-[480px] fixed bottom-0 right-0 left-[75px]  md:left-[395px] w-full border-t-[.5px] border-gray-300 pt-8'>
                <div id='conversationBottomTop'  style={{"border":"1px solid #abaaaa","borderRadius":"8px"}}>
                    <input type="text" className='w-full  border-1 h-10 outline-none bg-white px-3 focus:border-b-2 border-[#444791]'  style={{ "borderRadius": "8px" }} placeholder="Type a new message" />
                </div>
                <div id='conversationBottomBottom ' className='flex pt-2 pb-2 justify-between'>
                    <div className="flex items-center space-x-5">
                        <label htmlFor="file" className="cursor-pointer">
                            <PermMedia htmlColor="black" className="" />
                            <input style={{ display: "none" }} type="file" id="file" name="file" accept=".png,.jpeg,.jpg" />
                        </label>
                        <div className="cursor-pointer">
                            <Label htmlColor="black" className="" />
                        </div>
                        <div className="cursor-pointer">
                            <Room htmlColor="black" className="shareOptionIcon" />
                            
                        </div>
                        <div className="cursor-pointer">
                            <EmojiEmotions htmlColor="black" className="" />
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <SendOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation
