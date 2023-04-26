import React from 'react'
import { useState } from 'react'
import Avatar from "../Images/profile.jpg"
import { useSelector } from 'react-redux';
import "./streaming.css"
import { Socket } from '../SocketClient';



function Streaming() {
    const {friend} =useSelector(store=>{return store.messages})
    const {users} = useSelector(store=>{return store.onlineUsers})
    const [isCalling, setIsCalling] = useState(true);
    return (
        <div id='streaming' className='fixed top-[48px] left-[72px] right-0 h-[100vh] bg-[#ebebeb70]'>
            <div id='streamingTop' className='flex justify-end items-center border-b-[1px] border-gray-300 h-[65px]'>
                <div className='flex px-[10px]' >
                    <button className='bg-red-600 rounded-md text-white py-[6px] px-[10px] font-medium cursor-pointer'>Leave Call</button>
                </div>
            </div>
            <div className='' style={{ "overflowY": "auto", "height": "calc(100vh - 48px)" }}>
                {isCalling && <div className='flex justify-center items-center w-[100%] h-[100%]'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center justify-center'>
                            <img src={Avatar} alt="Avatar" className='w-[80px] h-[80px] rounded-[50%]' />
                        </div>
                        <div className='font-medium text-[24px] text-center flex justify-center items-center gap-2'>
                            <div>Connecting</div>
                            <div className='w-[60px] flex justify-center items-center pt-[7px]'><div className='dot-pulse'></div></div>
                            <div>{friend.firstName+" "+friend.lastName}</div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Streaming
