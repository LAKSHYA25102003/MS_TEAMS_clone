import chatContext from "./chatContext";
import React from 'react'
import { fetchMessages } from "../../Redux/messages/messageActions";
import { useDispatch } from "react-redux";
import { updateConversations } from "../../Redux/conversations/conversationActions";



function ChatState(props) {
  const dispatch=useDispatch();
  let BaseUrl=process.env.REACT_APP_BASE_URL;

 const createConversation=async ({friend,friends,conversations})=>{
  let url=`${BaseUrl}/get-conversation/${friend._id}`;
  let response = await fetch(url,{
      method:"post",
      headers:{
          "Content-Type":"application/json",
          "auth-token":localStorage.getItem('token'),
          "security-key":"PLACEMENT-PROJECT"
      },
  })
  response =await response.json();
  if(response.success)
  {
    if(response.message==="newly created")
    {
      dispatch(updateConversations({conversation:response.conversation,friends,conversations,friend}))
    }
    dispatch(fetchMessages({conversation:response.conversation,friend}))
  }
}

 

  return (
    <chatContext.Provider value={{createConversation}}>
        {props.children}
    </chatContext.Provider>
  )
}

export default ChatState
