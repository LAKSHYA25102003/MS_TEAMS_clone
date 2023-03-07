
import {fetchUserLoading,fetchUserSuccess,fetchUserFail} from "./userSlice";
export const fetchUser=(name)=>async (dispatch)=>{
    dispatch (fetchUserLoading());
    try{
        let result=await fetch("http://localhost:5000/teams_clone/v1/account/getUser",{
            method:"post",
            headers:{
                "Content-Type":"application/josn",
                "auth-token":localStorage.getItem('token'),
                "security-key":"PLACEMENT-PROJECT"
            }
        })
        const response=await result.json();
        dispatch(fetchUserSuccess(response.user));

    }catch(error){
        dispatch(fetchUserFail(error.message))
    }
}