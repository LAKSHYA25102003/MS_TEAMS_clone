import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.js/userSlice";
import conversationReducer from "./conversations/conversationSlice"
import messageReducer from "./messages/messageSlics";

const store=configureStore({
    reducer:{
        user:userReducer,
        conversations:conversationReducer,
        messages:messageReducer
    }

})

export default store;