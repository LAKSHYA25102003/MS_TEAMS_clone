import { fetchMessagesLoading, fetchMessagesFail, fetchMessagesSuccess,update } from "./messageSlics";

export const fetchMessages = (id,{fid,friend}) => async dispatch => {
    const BaseUrl = process.env.REACT_APP_BASE_URL;
    dispatch(fetchMessagesLoading);
    try {
        let url = `${BaseUrl}/getMessages/${id}`;
        let response = await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
                "security-key": "PLACEMENT-PROJECT"
            }
        })
        response = await response.json();
        if (response.success) {
            const payload = {
                messages: response.messages,
                friend:{
                    name:friend,
                    id:fid
                }
            }
            dispatch(fetchMessagesSuccess(payload));
        }
        else
        {
            dispatch(fetchMessagesFail(response.message));
        }
        
    } catch (error) {
        dispatch(fetchMessagesFail(error.message));
    }
}

export const updateMessages=()=>async (dispatch)=>{
    try{
        
    }catch(error){

    }
}