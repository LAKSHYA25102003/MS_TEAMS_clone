import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import RenderingFirst from "./Components/RenderingPages/RenderingFirst";
import Chats from './Pages/Chats';
import ChatState from './Context/ChatContext/chatState';
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
import {fetchUser} from "./Redux/user.js/userActions";
import { useEffect } from 'react';


function App() {
  const dispatch=useDispatch();
  if(localStorage.getItem('token'))
  {
    dispatch(fetchUser());
  }
  return (
    <GrpState>
      <AuthState>
        <ChatState>
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
        </ChatState>
      </AuthState>
    </GrpState>
  );
}

export default App;
