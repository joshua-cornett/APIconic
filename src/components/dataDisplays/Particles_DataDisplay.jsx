import Particle from '../Particle';
import { useId } from 'react';

const Particles_DataDisplay = () => {
  const particleData = [
    { id: useId(), energy: 100 },
    { id: useId(), energy: 150 },
    { id: useId(), energy: 200 },
    // Add more data as needed...
  ];

  return (
    <div>
      {particleData.map((particle) => (
        <Particle key={particle.id} id={particle.id} energy={particle.energy} />
      ))}
    </div>
  );
};

export default Particles_DataDisplay;
