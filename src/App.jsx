import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NASA_APOD from './pages/NASA_APOD';
import './index.css'; // Import index.css

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NASA_APOD" element={<NASA_APOD />} />
        {/* Define more routes for future pages */}
      </Routes>
    </div>
  );
};

export default App;
