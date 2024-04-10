import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NASA_APOD_DataDisplay = () => {
  // State variables to store current and old data
  const [currentData, setCurrentData] = useState(null);
  const [oldData, setOldData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if cached data exists in local storage
        const cachedData = localStorage.getItem('NASA_APOD_Data');
        if (cachedData) {
          const parsedCachedData = JSON.parse(cachedData);
          setOldData(parsedCachedData);
        }

        // Fetch data from the NASA API using the environment variable
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod',
          {
            params: {
              api_key: import.meta.env.VITE_NASA_APOD_KEY,
            },
          },
        );
        const newData = response.data;

        // Compare new data with old data
        if (JSON.stringify(newData) !== JSON.stringify(currentData)) {
          // Update current data state
          setCurrentData(newData);

          // Update local storage with new data
          localStorage.setItem(
            'NASA_APOD_Data',
            JSON.stringify([...oldData, newData]),
          );
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div className="space-y-8">
      {/* Display current picture of the day */}
      {currentData && (
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-teal-500">
            Current Picture of the Day
          </h2>
          <h3 className="mb-2 text-xl font-bold">{currentData.title}</h3>
          <img
            src={currentData.url}
            alt={currentData.title}
            className="mb-4 w-full max-w-full"
          />
          <p className="text-gray-800">{currentData.explanation}</p>
        </div>
      )}
      {/* Display old pictures of the day */}
      {oldData.length > 0 && (
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-teal-500">
            Old Pictures of the Day
          </h2>
          {oldData.map((data, index) => (
            <div key={index} className="mb-8">
              <h3 className="mb-2 text-xl font-bold">{data.title}</h3>
              <img
                src={data.url}
                alt={data.title}
                className="mb-4 w-full max-w-full"
              />
              <p className="text-gray-800">{data.explanation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NASA_APOD_DataDisplay;
