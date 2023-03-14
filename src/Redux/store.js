import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.js/userSlice";
import conversationReducer from "./conversations/conversationSlice"
import messageReducer from "./messages/messageSlics";
import onlineUserReducer from "./onlineUsers/onlineUserSlice"
const store=configureStore({
    reducer:{
        user:userReducer,
        conversations:conversationReducer,
        messages:messageReducer,
        onlineUsers:onlineUserReducer
    }

})

export default store;