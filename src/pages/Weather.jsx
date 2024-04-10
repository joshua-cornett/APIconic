import React, { useState } from 'react';
import axios from 'axios';
import { WeatherData, WeatherPlot } from '../components';
import { kelvinToCelsius, findClosestCity } from '../utils/weatherParser';

function Weather() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [forecast, setForecast] = useState([]);
  const [showWeather, setShowWeather] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const newCity = event.target.value;
    if (newCity !== city) {
      setCity(newCity);
      setForecast([]); // Reset forecast data
      setShowWeather(false); // Hide weather components
      setError(''); // Reset error
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiKey = import.meta.env.VITE_WEATHER_KEY;
      const response = await axios.get(
        'http://api.openweathermap.org/data/2.5/forecast',
        {
          params: {
            q: city,
            appid: apiKey,
          },
        },
      );

      const closestCity = findClosestCity(response.data.city, city);
      if (closestCity) {
        // Set city to the closest match found
        console.log(response.data);
        setCity(closestCity);
        setCountry(response.data.city.country);
        setForecast(
          response.data.list.map((entry) => ({
            ...entry,
            main: {
              ...entry.main,
              temp: kelvinToCelsius(entry.main.temp),
            },
          })),
        );
        setShowWeather(true); // Set flag to show weather components
        setError(''); // Reset error
      } else {
        setError(`City '${city}' not found`); // Set error message
        setShowWeather(false); // Hide weather components
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data'); // Set error message
      setShowWeather(false); // Hide weather components
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="mb-8 text-4xl font-bold text-black">Weather Forecast</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <label className="mb-4 block">
          Enter city:
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            className="mt-2 block w-full rounded-lg border px-4 py-2"
          />
        </label>
        <button
          type="submit"
          className="rounded-lg bg-teal-500 px-4 py-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-black"
        >
          Submit
        </button>
      </form>
      {error && <div className="text-red-950">{error}</div>}
      {showWeather && (
        <React.Fragment>
          <WeatherData city={city} country={country} forecast={forecast} />
          <WeatherPlot city={city} country={country} forecast={forecast} />
        </React.Fragment>
      )}
    </div>
  );
}

export default Weather;
