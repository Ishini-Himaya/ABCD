import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import Premium from './component/Premium';
import AboutUs from './component/AboutUs';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <Router>
      <div className="App bg-indigo-600 w-full h-screen overflow-hidden">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path='/account' element={<SignIn />} />
          <Route exact path='/SignUp' element={<SignUp />} />
          <Route exact path='/premium' element={<Premium />} />
          <Route exact path='/aboutUs' element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;