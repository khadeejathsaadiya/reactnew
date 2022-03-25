import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
/* import { useState } from 'react'; */
import Login from './Pages/Login';
import VerifyOTP from './Pages/VerifyOTP';
import './Auth.css';
import Register from './Pages/Register';
import MyProfile from './Pages/MyProfile';
import ForgotPass from './Pages/ForgotPass';
import ResetPassword from './Pages/ResetPassword';




function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' exact element={<Login />} />
      <Route exact path='/verifyOTP' exact element={<VerifyOTP />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/forgotPass' element={<ForgotPass/>} />
      <Route path='/resetPassword' element={<ResetPassword/>} />
      <Route path='/myprofile' element={<MyProfile/>} />
    </Routes>
    </Router>
  );
  }

export default App;


