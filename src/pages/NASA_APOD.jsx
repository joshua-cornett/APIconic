// NASA_APOD.jsx
import React from 'react';
import NASA_APOD_DataDisplay from '../components/dataDisplays/NASA_APOD_DataDisplay';

const NASA_APOD = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="mb-8 text-4xl font-bold text-teal-500">
        NASA APOD: Astronomy Picture of the Day
      </h1>
      <NASA_APOD_DataDisplay className="text" />
    </div>
  );
};

export default NASA_APOD;
