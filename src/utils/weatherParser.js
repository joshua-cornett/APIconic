// Helper function to convert temperature from Kelvin to Celsius
export const kelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
};

// Helper function to format temperature value with desired decimal places
export const formatTemperature = (temperature, decimalPlaces) => {
  return temperature.toFixed(decimalPlaces);
};

// utils/cityUtils.js
export const findClosestCity = (responseCity, userInput) => {
  if (Array.isArray(responseCity)) {
    // Array response
    const userCity = userInput.toLowerCase();
    return responseCity
      .map((city) => city.name.toLowerCase())
      .find((city) => city.includes(userCity));
  } else if (responseCity && responseCity.name) {
    // Object response
    const userCity = userInput.toLowerCase();
    return responseCity.name.toLowerCase().includes(userCity) ? responseCity.name : null;
  }
  return null;
};

