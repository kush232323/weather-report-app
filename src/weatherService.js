// weatherService.js
const API_KEY = 'YOUR_API_KEY'; // Get API key from OpenWeatherMap
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeatherData(city) {
  const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    throw new Error('Weather data not found');
  }
  return response.json();
}
