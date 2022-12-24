import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/home' element={<Navbar />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
