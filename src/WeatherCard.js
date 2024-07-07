// WeatherCard.js
import React from 'react';

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].main}</p>
      <p>Description: {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
