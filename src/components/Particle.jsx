import React from 'react';

const Particle = ({ id, energy }) => {
  return (
    <div className="mb-4 flex-auto rounded-lg bg-white p-6 shadow-md">
      <p className="text-xl font-bold">{id}</p>
      <p className="text-xl font-bold text-teal-500">{energy}</p>
    </div>
  );
};

export default Particle;
