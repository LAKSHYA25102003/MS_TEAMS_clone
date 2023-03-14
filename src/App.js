import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import RenderingFirst from "./Components/RenderingPages/RenderingFirst";
import Chats from './Pages/Chats';
import Home from "./Components/Auth/Home"
import SignupForm from "./Components/Auth/SignupForm"
import Login from './Components/Auth/Login';
import ForgotPassword from "./Components/Auth/ForgotPassword";
import SetNewPassword from "./Components/Auth/SetNewPassword";
import CreateNewPassword from "./Components/Auth/CreateNewPassword";
import LoginOtp from './Components/Auth/LoginOtp';
import AuthState from "./Context/AuthContext/AuthState"
import Logout from "./Components/Auth/Logout"
import GrpState from './Context/GrpContext/GrpState';
import { useDispatch } from 'react-redux';
import { fetchUser } from "./Redux/user.js/userActions";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { setSocketFunction } from './Redux/onlineUsers/onlineUserActions';
import { useContext } from 'react';
import chatContext from './Context/ChatContext/chatContext';
import { fetchConversations } from './Redux/conversations/conversationActions';
import { Socket } from './SocketClient';
import { fetchOnlineUsers } from './Redux/onlineUsers/onlineUserActions';
import { addmessage } from './Redux/messages/messageActions';
import { useState } from 'react';



function App() {
  let [arrivalMessage,setArrivalMessage] = useState(null);
  const { connectSocket, getMessage } = useContext(chatContext);
  const { user } = useSelector(state => { return state.user });
  const { messages } = useSelector(state => { return state.messages });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchConversations());
  }, [])

  useEffect(() => {
    Socket?.on("getMessage", (message) => {
      setArrivalMessage(message);
    })
  }, [])

  useEffect(()=>{
    if(arrivalMessage!==null)
    {
      let newMessages=[...messages,arrivalMessage];
      dispatch(addmessage({newMessages}));
      setArrivalMessage(null);
    }
  },[arrivalMessage])

  useEffect(() => {

    if (user !== null) {
      Socket?.emit("addUser", user.id);
    }

    Socket?.on("getUsers", (onlineUsers) => {
      dispatch(fetchOnlineUsers(onlineUsers));
    })

  }, [user])


  return (
    <GrpState>
      <AuthState>

        <Router>
          <Routes>
            <Route exact path="/home" element={<RenderingFirst />} />
            <Route path='/chats' element={<Chats />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path='/signup' element={<SignupForm />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/verify-account' element={<LoginOtp />}></Route>
            <Route path='/forgot-password' element={<ForgotPassword />}></Route>
            <Route path='/set-new-password/:token' element={<SetNewPassword />}></Route>
            <Route path='/create-password/:token' element={<CreateNewPassword />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
          </Routes>
        </Router>

      </AuthState>
    </GrpState>
  );
}

export default App;
