import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importing react-router-dom components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  // Route for Home page
        <Route path="/login" element={<Login />} />  // Route for Login page
        <Route path="/signup" element={<Signup />} />  // Route for Signup page
      </Routes>
    </Router>
  );
}

export default App;
