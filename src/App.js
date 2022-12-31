import logo from './logo.svg';
import './App.css';
import RenderingFirst from "./components/RenderingPages/RenderingFirst";
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GeneralComponent from "./components/TeamsInternalComponents/GeneralComponent"
import AllAssignment from './components/TeamsInternalComponents/AllAssignment';
import ParticularAssignment from './components/TeamsInternalComponents/ParticularAssignment';
import JoinOrCreate from './components/RenderingPages/JoinOrCreate';
import Second from './components/RenderingPages/Second';
import GrpState from './Context/GrpContext/GrpState';
import Home from "./components/Auth/Home"
import SignupForm from "./components/Auth/SignupForm"
import Login from './components/Auth/Login';
import ForgotPassword from "./components/Auth/ForgotPassword";
import SetNewPassword from "./components/Auth/SetNewPassword";
import CreateNewPassword from "./components/Auth/CreateNewPassword";
import LoginOtp from './components/Auth/LoginOtp';
import AuthState from "./Context/AuthContext/AuthState"
import Logout from "./components/Auth/Logout"

function App() {
  return (
    <AuthState>
      <GrpState>
        <Routes forceRefresh={true}>
          <Route exact path="/home" element={<RenderingFirst />} />
          <Route exact path="/grp" element={<GeneralComponent />} />
          <Route exact path="/assignment" element={<AllAssignment />} />
          <Route exact path="/assignment/:id" element={<ParticularAssignment />} />
          <Route exact path="/discover" element={<JoinOrCreate />} />
          <Route exact path="/test" element={<Second />} />
          <Route path="/" element={<Home />}></Route>
          <Route path='/signup' element={<SignupForm />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/verify-account' element={<LoginOtp />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
          <Route path='/set-new-password/:token' element={<SetNewPassword />}></Route>
          <Route path='/create-password/:token' element={<CreateNewPassword />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
      </GrpState>
    </AuthState>
  );
}

export default App;
