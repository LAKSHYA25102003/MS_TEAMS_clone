import React from 'react'
import hpi2 from "../Images/hpi2.jpeg";
import child1 from "../Images/child1.jpeg";
import education from "../Images/education.jpeg";
import enterprise from "../Images/enterprise.jpeg";
import buisness from "../Images/buisness.jpeg";
import user from "../Images/user.png"


const Navbar = () => {
    return (
        <>
            <div className="navbar flex justify-between items-center p-2 md:my-6">
                <div className="hamburger inline-block p-4 md:hidden">
                    <div className="line h-0.5 w-6 my-1 bg-black"></div>
                    <div className="line h-0.5 w-6 my-1 bg-black"></div>
                    <div className="line h-0.5 w-6 my-1 bg-black"></div>
                </div>
                <div className="logo text-center md:h-1.5 flex ">
                    <div className='w-28 '><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" /></div>

                    <div className="feature -translate-x-96 md:translate-x-0 md:mx-5 absolute md:static md:flex md:visible space-x-3 ">
                        <div className="fitem">Microsoft 365</div>
                        <div className="fitem">Office</div>
                        <div className="fitem">Windows</div>
                        <div className="fitem">Surface</div>
                    </div>
                </div>

                <div className="account  md:h-1.5 flex w-6"><img src={user} alt="" /></div>
            </div>

            <div className="topbar h-16 w-full bg-[#4b53bc] justify-center flex">
                <div className="text-white text-center py-3"><h3>The better way to meet: Microsoft Teams Premium Discover more</h3></div>
            </div>

            <div className="slider1 flex flex-col-reverse my-14 md:flex-row justify-center items-center px-6">

                <div className="left w-screen">
                    <div className="text-l4 text-[#4b53bc] text-[1.8125rem] font-semibold items-baseline px-3">Microsoft Teams</div>
                    <div className="textl3 text-[1.2rem] px-3 font-semibold my-4">Make amazing things happen together at home, work, and school.</div>
                    <button className="bg-[#4b53bc] hover:bg-[#2a307f] text-white font-bold w-full my-3 py-2 px-4 border border-blue-700 rounded">
                        SignUp For Free
                    </button>
                    <button className="bg-[#4b53bc] hover:bg-[#2a307f] text-white font-bold w-full py-2 px-4 border border-blue-700 rounded">
                        SignUp For Free
                    </button>
                    <div className="textl3 text-[#4b53bc] text-[1.2rem] px-3 font-semibold my-4">Sign in.</div>
                </div>

                <div className="right my-4">
                    <div className="image w-fit"><img src={hpi2} alt="" /></div>
                </div>
            </div>

            <div className="slider2 flex flex-col my-4 md:flex-row justify-center items-center">

                <div className="center w-screen justify-center items-center">
                    <div className="textl3 text-[1.5rem] px-3 font-semibold my-4 mx-8">More is possible with Microsoft Teams</div>
                    <div className="textl3 text-[1rem] px-3 leading-5 font-semibold my-4 mx-8">Stay connected and access shared content any time to learn, plan, and innovate together.</div>
                    
                </div>

                <div className="right my-4 flex space-x-2 flex-flow-col mx-2">
                    <div className="image w-fit"><img src={child1} alt="" /></div>
                    <div className="image w-fit"><img src={enterprise} alt="" /></div>
                    
                </div>

                <div className="right my-4 flex space-x-2 flex-flow-col mx-2">
                    <div className="image w-fit"><img src={buisness} alt="" /></div>
                    <div className="image w-fit"><img src={education} alt="" /></div>
                </div>

            </div>


            <div className="slider3 flex flex-col my-4 md:flex-row justify-center items-center">


                <div className="right my-4 flex space-x-2 flex-flow-col mx-2">
                    <div className="image w-fit"><img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Meet1:VP1-539x440?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100" alt="" /></div>                    
                </div>

                <div className="center w-screen justify-center items-center">
                    <div className="textl3 text-[1.5rem] px-3 font-semibold my-4 mx-8">Meet</div>
                    <div className="textl3 text-[1rem] px-3 leading-5 font-normal my-4 mx-8">Share your screen, change or blur your background, and use together mode to virtually be in the same space.</div>
                    
                </div>

            </div>


            
            <div className="slider3 flex flex-col my-4 md:flex-row ">


                <div className="right my-4 flex space-x-2 flex-flow-col mx-2">
                    <div className="image w-fit"><img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/call1:VP5-1920x600?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100&fit=crop" alt="" /></div>                    
                </div>

                <div className="center w-screen justify-center items-center">
                    <div className="textl3 text-[1.5rem] px-3 font-semibold my-4 mx-8">Call</div>
                    <div className="textl3 text-[1rem] px-3 leading-5 font-normal my-4 mx-8">Make and receive calls directly in Teams with advanced features like group calling, voicemail, and call transfers.</div>
                    
                </div>

            </div>


            <div className="slider3 flex flex-col my-4 md:flex-row ">


                <div className="right my-4 flex space-x-2 flex-flow-col mx-2">
                    <div className="image w-fit"><img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/chat1:VP5-1920x600?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85" alt="" /></div>                    
                </div>

                <div className="center w-screen justify-center items-center">
                    <div className="textl3 text-[1.5rem] px-3 font-semibold my-4 mx-8">Collaborate</div>
                    <div className="textl3 text-[1rem] px-3 leading-5 font-normal my-4 mx-8">Easily find, share, and edit files together in real time with apps like Word, PowerPoint, and Excel.</div>
                    
                </div>

            </div>


            <div className="slider3 flex flex-col my-4 md:flex-row ">


                <div className="right my-4 flex space-x-2 flex-flow-col mx-2">
                    <div className="image w-fit"><img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/collaborate1:VP5-1920x600?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100" alt="" /></div>                    
                </div>

                <div className="center w-screen justify-center items-center">
                    <div className="textl3 text-[1.5rem] px-3 font-semibold my-4 mx-8">Chat</div>
                    <div className="textl3 text-[1rem] px-3 leading-5 font-normal my-4 mx-8">Share your thoughts and your personality. Send GIFs, stickers, and emojis in one-to-one or group chats.</div>
                    
                </div>

            </div>

            <div className="topbar h-16 w-full bg-[#4b53bc] justify-center flex">
                <div className="text-white text-center py-3"><h3>Get started with Microsoft Teams today</h3></div>
            </div>



        </>
    )
}

export default Navbar