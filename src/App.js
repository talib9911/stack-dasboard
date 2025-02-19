import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ErrorPage from './Pages/404/404';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      {/* <Dashboard/> */}
      <div className="App">
        <Routes>    
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
