import Plot from 'react-plotly.js';

const WeatherPlot = ({ city, forecast }) => {
  // Extracting necessary data for the plot
  const dates = forecast.map((entry) => entry.dt_txt);
  const temperatures = forecast.map((entry) => entry.main.temp);

  // Create data object for Plotly
  const data = [
    {
      x: dates,
      y: temperatures,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'rgb(20 184 166)' }, // Orange color
    },
  ];

  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
      <Plot
        data={data}
        layout={{
          width: 800,
          height: 400,
          title: '5-day Weather Forecast for ' + city,
        }}
      />
    </div>
  );
};

export default WeatherPlot;
