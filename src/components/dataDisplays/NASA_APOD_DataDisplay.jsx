// NASA_APOD_DataDisplay.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { parseData } from '../../utils/APOD_Parser'; // Import the helper function

const NASA_APOD_DataDisplay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_NASA_APOD_KEY;
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
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
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="md:w-1/2 md:pr-4">
            <img
              src={data.url}
              alt={data.title}
              className="mb-4 h-auto w-full"
              style={{ maxHeight: '4000px' }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-2 text-xl font-bold">{data.title}</h3>
            <p className="text-gray-800">{data.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NASA_APOD_DataDisplay;
