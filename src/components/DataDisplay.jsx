import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { parseString } from 'xml2js';

const DataDisplay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        );

        // Parse JSON data
        setData(response.data);

        // Parse XML data
        // parseString(response.data, (err, result) => {
        //   if (!err) {
        //     setData(result);
        //   } else {
        //     console.error(err);
        //   }
        // });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <img src={data.url} alt={data.title} style={{ maxWidth: '100%' }} />
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
