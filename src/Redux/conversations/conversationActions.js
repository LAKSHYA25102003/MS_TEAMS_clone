import {fetchConversationLoading,fetchConversationSuccess,fetchConversationFail} from "./conversationSlice";

export const fetchConversations=()=>async dispatch=>{
    const BaseUrl=process.env.REACT_APP_BASE_URL;
    dispatch(fetchConversationLoading())
    try{
        let response = await fetch(`${BaseUrl}/getAllConversations`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "auth-token":localStorage.getItem('token'),
                "security-key":"PLACEMENT-PROJECT"
            }
        })
        response=await response.json();
        if(response.success)
        {
            const payload={
                friends:response.friends,
                conversations:response.allConversations
            }
            dispatch(fetchConversationSuccess(payload));
        }
        else
        {
            dispatch(fetchConversationFail(response.message));
        }
    }
    catch(error)
    {
        dispatch(fetchConversationFail(error.message));
    }
}