// Particles.jsx
import React from 'react';
import { Particles_DataDisplay } from '../components/dataDisplays';

const Particles = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="mb-8 text-4xl font-bold text-teal-500">Particles</h1>
      <Particles_DataDisplay className="text" />
    </div>
  );
};

export default Particles;
