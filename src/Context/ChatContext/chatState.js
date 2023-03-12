import chatContext from "./chatContext";
import React from 'react'





function ChatState(props) {

  let BaseUrl=process.env.REACT_APP_BASE_URL;

 const createConversation=async (id)=>{
  let url=`${BaseUrl}/get-conversation/${id}`;
  let response = await fetch(url,{
      method:"post",
      headers:{
          "Content-Type":"application/json",
          "auth-token":localStorage.getItem('token'),
          "security-key":"PLACEMENT-PROJECT"
      },
  })
  response =await response.json();
}

 

  return (
    <chatContext.Provider value={{createConversation}}>
        {props.children}
    </chatContext.Provider>
  )
}

export default ChatState
