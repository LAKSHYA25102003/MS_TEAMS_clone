import {fetchConversationLoading,fetchConversationSuccess,fetchConversationFail} from "./conversationSlice";

export const fetchConversations=()=>async dispatch=>{
    dispatch(fetchConversationLoading())
    try{
        let response = await fetch("http://localhost:5000/teams_clone/v1/getAllConversations",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "auth-token":localStorage.getItem('token'),
                "security-key":"PLACEMENT-PROJECT"
            }
        })
        response=await response.json();
        const payload={
            friends:response.friends,
            conversations:response.allConversations
        }
        dispatch(fetchConversationSuccess(payload));
    }
    catch(error)
    {
        dispatch(fetchConversationFail(error.message));
    }
}