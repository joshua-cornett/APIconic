import React from 'react';

const WeatherData = ({ city, country, forecast }) => {
  // Extracting necessary data for display
  const temperature = forecast[0].main.temp;
  const description = forecast[0].weather[0].description;

  console.log(forecast);

  return (
    <div className="rounded-lg bg-teal-900 p-4">
      <h2 className="mb-2 text-lg font-semibold text-white">
        Current Weather for {city}
      </h2>
      <p className="text-white">Country: {country}</p>
      <p className="text-white">Temperature: {temperature}°C</p>
      <p className="text-white">Description: {description}</p>
    </div>
  );
};

export default WeatherData;
