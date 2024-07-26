// src/App.js
import React from 'react';
import Home from './pages/Home';
import './index.css';
import Submissions from './pages/Submissions';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Synopsis from './pages/Synopsis';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Policy from './pages/Policy.js';
import SponsorUs from './pages/SponsorUs.js';
import CastDetail from './pages/CastDetails.js';
import OurSponsor from './pages/OurSponsor.js';

function App() {
  return (
    <Router>
      <div>
        <Outlet />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/submission" element={<Submissions />} />
        <Route path="/sponsor-us" element={<SponsorUs />} />
        <Route path="/synopsis" element={<Synopsis />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/cast" element={<CastDetail />} />
        <Route path="/our-sponsor" element={<OurSponsor />} />
      </Routes>
    </Router>
  );
}

export default App;
