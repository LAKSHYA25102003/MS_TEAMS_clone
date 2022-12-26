import logo from './logo.svg';
import './App.css';
import RenderingFirst from "./components/RenderingPages/RenderingFirst";
import { Link,BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GeneralComponent from "./components/TeamsInternalComponents/GeneralComponent"
import CallsContact from './components/Calls/CallsContact';
import ProfileDetails from './components/Calls/ProfileDetails';
import Contacts from './components/Calls/Contacts/Contacts';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<RenderingFirst/>}/>
      <Route exact path="/grp" element={<GeneralComponent/>}/>
      <Route exact path="/calls" element={<CallsContact/>}/>
      <Route exact path="/profile" element={<ProfileDetails/>}/>
      <Route exact path="/calls/contacts" element={<Contacts/>}/>
    </Routes>
  );
}

export default App;
