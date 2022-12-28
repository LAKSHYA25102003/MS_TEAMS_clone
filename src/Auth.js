import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GrpState from './Context/GrpContext/GrpState';
import Home from "./components/Auth/Home"
import SignupForm from "./components/Auth/SignupForm"
import Login from './components/Auth/Login';
import ForgotPassword from "./components/Auth/ForgotPassword";
import SetNewPassword from "./components/Auth/SetNewPassword";
import CreateNewPassword from "./components/Auth/CreateNewPassword";


function Auth() {
  return (
    <GrpState>
      <Routes forceRefresh={true}>
        <Route path="/" element={<Home />}></Route>
        <Route path='/signup' element={<SignupForm />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/set-new-password/:token' element={<SetNewPassword />}></Route>
        <Route path='/create-password/:token' element={<CreateNewPassword />}></Route>
      </Routes>
    </GrpState>
  );
}

export default Auth;
