import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, NASA_APOD, Weather } from './pages/';
import './index.css'; // Import index.css

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NASA_APOD" element={<NASA_APOD />} />
        <Route path="/Weather" element={<Weather />} />
        {/* Define more routes for future pages */}
      </Routes>
    </div>
  );
};

export default App;
