import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast"; // <-- Import Forecast
import Loader from "../components/Loader";
import WeatherEffects from "../components/WeatherEffects";
import { getWeather } from "../services/api"; 
import "../app.css";

function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null); // <-- Add forecast state
  const [loading, setLoading] = useState(false);

  const getWeatherTheme = () => {
    if (!weather) return "theme-default";
    const isNight = weather.weather[0].icon?.endsWith("n");
    if (isNight) return "theme-night";
    
    const condition = weather.weather[0].main.toLowerCase();
    if (condition.includes("cloud")) return "theme-clouds";
    if (condition.includes("rain") || condition.includes("drizzle")) return "theme-rain";
    if (condition.includes("thunderstorm")) return "theme-thunderstorm";
    if (condition.includes("clear")) return "theme-clear";
    return "theme-mist";
  };

  const handleSearch = async (city) => {
    setLoading(true);
    
    try {
      // 1. Fetch Current Weather (Your existing API call)
      const currentData = await getWeather(city);
      setWeather(currentData);

      // 2. Fetch 5-Day Forecast
      // Note: Replace "YOUR_API_KEY" with your actual OpenWeatherMap API key!
      // If your API key is in a .env file, use import.meta.env.VITE_API_KEY
      const API_KEY = "6f6641cb0fa0117566e4be4df6f3bab4"; 
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastData = await forecastResponse.json();
      
      if (forecastResponse.ok) {
        setForecast(forecastData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`app-wrapper ${getWeatherTheme()}`}>
      <WeatherEffects weatherData={weather} />
      
      <div className="app-container">
        <h1>Weather App 🌦️</h1>
        <SearchBar onSearch={handleSearch} />
        
        {loading && <Loader />}
        
        {/* Render Current Weather AND Forecast */}
        {weather && <WeatherCard data={weather} />}
        {forecast && <Forecast forecastData={forecast} />}
      </div>
    </div>
  );
}

export default Home;