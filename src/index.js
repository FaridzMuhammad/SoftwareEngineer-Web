import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Views/Auth/SignIn';
import SignUp from './Views/Auth/SignUp';
import Home from './Views/dashboard/Home';
import AboutUs from './Views/dashboard/aboutUs';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/About_us" element={<AboutUs />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
