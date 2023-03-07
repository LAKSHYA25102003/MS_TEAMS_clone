import chatContext from "./chatContext";
import React from 'react'




function ChatState(props) {


 

  return (
    <chatContext.Provider value={{}}>
        {props.children}
    </chatContext.Provider>
  )
}

export default ChatState
