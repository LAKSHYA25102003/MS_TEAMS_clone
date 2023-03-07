import React from "react";
import "./Message.css";
import Avatar from "../Images/profile.jpg";

function Message({ own }) {
  return (
    <div id={own?"messageWrapper_own":"messageWrapper"} className=" my-3 flex  min-w-fit w-[100%]">
        {
            !own&&<img  className="mt-1 w-[40px] h-[40px] rounded-full hidden md:block" src={Avatar} alt="" />
        }
      <div id={own ? "message_own" : "message"} className="flex flex-col" style={{"maxWidth":"70%"}}>
        <div id="messageTop" className="flex">
          <div id="messageSender" className="w-1/2 px-3 font-bold">
            Lakshya
          </div>
          <div
            id="messageTime"
            className="w-1/2 flex justify-end items-center gap-3 px-3 font-light text-sm flex-wrap"
          >
            <div>Date</div>
            <div>Time</div>
          </div>
        </div>
        <div id="messageBottom" className="px-3 pb-3" >
          hey this is the message so just do as much as possible
        </div>
      </div>
    </div>
  );
}

export default Message;
