// NASA_APOD_DataDisplay.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseData } from '../../utils/dataParser'; // Import the helper function

const NASA_APOD_DataDisplay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=RoIj8Quv2K8o3nd7B9bLpIzaYmc3ZjGMoLts1JYY',
        );

        // Parse data using the helper function
        const parsedData = await parseData(response.data, 'json');
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-teal-500">Today</h2>
      {data && (
        <div>
          <h3 className="mb-2 text-xl font-bold">{data.title}</h3>
          <img
            src={data.url}
            alt={data.title}
            className="mb-4 w-full max-w-full"
          />
          <p className="text-gray-800">{data.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default NASA_APOD_DataDisplay;
