import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<><Navbar/><Home/></>}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login /> }></Route>
            <Route path="/profile" element={<><Navbar/><Profile/></> }></Route>
          </Routes>      
        </AuthProvider>
    </Router>
  );
}

export default App;
