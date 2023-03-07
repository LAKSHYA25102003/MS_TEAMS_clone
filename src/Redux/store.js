import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.js/userSlice";
import conversationReducer from "./conversations/conversationSlice"

const store=configureStore({
    reducer:{
        user:userReducer,
        conversations:conversationReducer
    }

})

export default store;