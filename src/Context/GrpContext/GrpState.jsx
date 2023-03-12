import GrpContext from "./GrpContext";
import { useState } from "react";



const GrpState=(props)=>{

    let BaseUrl=process.env.REACT_APP_BASE_URL;

    const [grpState,setgrpState]=useState("general");
    const [keywordUsers,setKeyWordUsers] = useState([]);

    const fetchKeyWordUser  = async (keyword)=>{
        let url=`${BaseUrl}/account/user/fetchKeywordUser`
        let response = await fetch(url,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "auth-token":localStorage.getItem('token'),
                "security-key":"PLACEMENT-PROJECT"
            },
            body:JSON.stringify({keyword})
        })
        response =await response.json();
        if(response.success)
        {
            setKeyWordUsers(response.users);
        }

    }
    
    return (
    <GrpContext.Provider value={{grpState,setgrpState,fetchKeyWordUser,keywordUsers}}>
        {props.children}
    </GrpContext.Provider>
    );
}

export default GrpState