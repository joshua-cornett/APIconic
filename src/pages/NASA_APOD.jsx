import React from 'react';
import NASADataDisplay from '../components/dataDisplays/NASA_APOD_DataDisplay';

const NASA_APOD = () => {
  return (
    <div>
      <h1>Welcome to the NASA Page!</h1>
      <NASADataDisplay />
    </div>
  );
};

export default NASA_APOD;
