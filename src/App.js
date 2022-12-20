import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Navbar>
    </Router>
  );
}

export default App;
