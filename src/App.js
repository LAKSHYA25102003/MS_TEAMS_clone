import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Chats from './Pages/Chats';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/home' element={<Navbar />}></Route>
          <Route path='/chats' element={<Chats />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
