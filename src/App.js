import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Universal_left_bar from './Components/Universal_left_bar';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/home' element={<Navbar />}></Route>
          <Route path='/l' element={<Universal_left_bar />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
