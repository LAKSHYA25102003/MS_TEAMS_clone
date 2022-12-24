import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Chat_sidebar from './Components/Chat_sidebar';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/home' element={<Navbar />}></Route>
          <Route path='/c' element={<Chat_sidebar />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
