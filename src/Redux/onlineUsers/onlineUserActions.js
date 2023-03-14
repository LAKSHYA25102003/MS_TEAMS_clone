import {fetchOnlineUsersLoading, fetchOnlineUsersSuccess, fetchOnlineUsersFail} from "./onlineUserSlice";
// import { io } from "socket.io-client";
// import { useRef } from "react";

export const fetchOnlineUsers=(onlineUsers)=>async dispatch=>{
    dispatch(fetchOnlineUsersLoading())
    try{
        let users=[...onlineUsers];
        dispatch(fetchOnlineUsersSuccess({users}));
    }
    catch(error)
    {
        dispatch(fetchOnlineUsersFail(error.message));
    }
}



