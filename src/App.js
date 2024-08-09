import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Services from './Services';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
