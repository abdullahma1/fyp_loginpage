import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { auth } from './firebase';
import Mainpage from './components/Mainpage';
import ForgotPassword from './components/ForgetPassword';
import ProtectedRoute from './components/ProtectedRoute ';


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserName(user ? user.displayName : "");
    }, []);

  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home name={userName} />  } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/mainpage' element={<ProtectedRoute><Mainpage /></ProtectedRoute>} />
          <Route path='/forgetPassword' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
